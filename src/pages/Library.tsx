import { useEffect, useState } from 'react';
import '../styles/Library.css';

interface Course {
  title: string;
  url: string;
  description: string;
  categories: string;
  instructor?: string;
  instructorBio?: string;
  prerequisites?: string;
  additionalInformation?: string;
  institution?: string;
}

// Parses the category from URL hash
function getCategoryFromHash(): string {
  const hash = window.location.hash;
  const queryStart = hash.indexOf('?');
  if (queryStart === -1) return 'All';

  const queryString = hash.substring(queryStart);
  const params = new URLSearchParams(queryString);
  const category = params.get('category');
  return category ? decodeURIComponent(category) : 'All';
}

const Library = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(getCategoryFromHash());

  useEffect(() => {
    fetch('/courses.json')
      .then(response => response.json())
      .then((data: Course[]) => setCourses(data));
  }, []);

  // Listen to hash changes (fixes typing in URL without hard refresh)
  useEffect(() => {
    const handleHashChange = () => {
      setSelectedCategory(getCategoryFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);

    // Cleanup listener when component unmounts
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const categories = Array.from(
    new Set(
      courses.flatMap(course =>
        course.categories.split(',').map(cat => cat.trim())
      )
    )
  ).sort();

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(course => course.categories.includes(selectedCategory));

  const formatCategoryClass = (category: string) =>
    category.toLowerCase().replace(/\s+/g, '-');

  // Updates URL hash when clicking categories
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      window.location.hash = '#/library';
    } else {
      window.location.hash = `#/library?category=${encodeURIComponent(category)}`;
    }
  };

  return (
    <div className="library-container">
      <h1>Library</h1>

      <p className="description">
        I put together this small athenaeum of courses and resources collected from across the internet.<br />
        Some of these I’ve created, others are from other people.
      </p>
      <p className="description">
        <a
          href="https://airtable.com/appqB1VAs2ZN5Df6j/pagOX4Og9v5aytpYf/form"
          target="_blank"
          rel="noopener noreferrer"
        >
          Please suggest a new course or resource.
        </a>
      </p>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('All')}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${formatCategoryClass(category)} ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="timeline">
        {filteredCourses.map(course => {
          const firstCategory = formatCategoryClass(course.categories.split(',')[0].trim());
          return (
            <a key={course.url} href={course.url} className={`timeline-item ${firstCategory}`}>
              <div className="timeline-content">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                {course.instructor && <p><strong>Instructor:</strong> {course.instructor}</p>}
                {course.prerequisites && <p><strong>Prerequisites:</strong> {course.prerequisites}</p>}
                <p className="learn-more">Learn More</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Library;