import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import '../styles/Library.css';

interface Course {
  Title: string;
  Instructor: string;
  Institution: string;
  Description: string;
  URL: string;
  Category: string;
}

const Library: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set(['all']));

  useEffect(() => {
    Papa.parse('/courses.csv', {
      download: true,
      header: true,
      complete: (results) => {
        const data = results.data as Course[];
        setCourses(data);

        const categorySet = new Set<string>();
        data.forEach((course) => {
          course.Category?.split(',').forEach((cat) => {
            categorySet.add(cat.trim());
          });
        });
        setCategories(Array.from(categorySet));
      },
    });
  }, []);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) => {
      const updated = new Set(prev);

      if (filter === 'all') {
        return new Set(['all']);
      }

      if (updated.has(filter)) {
        updated.delete(filter);
      } else {
        updated.add(filter);
      }

      if (updated.size > 1 && updated.has('all')) {
        updated.delete('all');
      }

      return updated.size === 0 ? new Set(['all']) : updated;
    });
  };

  const filteredCourses =
    activeFilters.has('all')
      ? courses
      : courses.filter((course) => {
          const courseCategories = course.Category?.split(',').map((cat) =>
            cat.trim().toLowerCase().replace(/\s+/g, '-')
          );
          return courseCategories?.some((cat) => activeFilters.has(cat));
        });

  return (
    <div className="library-container">
      <h1>Library</h1>
      <p className="description">
  I put together this small athenaeum of courses and resources collected from across the internet.
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
          className={`filter-btn ${activeFilters.has('all') ? 'active' : ''}`}
          onClick={() => toggleFilter('all')}
        >
          All
        </button>
        {categories.map((cat) => {
          const className = cat.toLowerCase().replace(/\s+/g, '-');
          return (
            <button
              key={cat}
              className={`filter-btn ${className} ${activeFilters.has(className) ? 'active' : ''}`}
              onClick={() => toggleFilter(className)}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="timeline">
        {filteredCourses.map((course, index) => {
          const firstCategoryClass = course.Category
            ?.split(',')[0]
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-');

          return (
            <a
              key={index}
              className={`timeline-item ${firstCategoryClass}`}
              href={course.URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="timeline-content">
                <h3>{course.Title}</h3>
                <p>{course.Instructor}<br />{course.Institution}</p>
                <p>{course.Description}</p>
                <span className="learn-more">Learn more</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Library;
