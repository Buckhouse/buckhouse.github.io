
# 📚 Explainer: How `Library.tsx` Works

This document clearly explains each part of the `Library.tsx` file, walking through the logic step-by-step. It's designed to help you deeply understand exactly how your Library page component functions in your React application.

---

## ✅ 1. Imports and Interfaces

```tsx
import React, { useEffect, useState } from 'react';
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
```

- **useEffect** and **useState** manage state and side-effects.
- `Library.css` applies styles.
- **Course interface** defines the data shape for courses.

---

## ✅ 2. Parsing the URL Hash to Select Initial Category

```tsx
function getCategoryFromHash(): string {
  const hash = window.location.hash;
  const queryStart = hash.indexOf('?');
  if (queryStart === -1) return 'All';

  const queryString = hash.substring(queryStart);
  const params = new URLSearchParams(queryString);
  const category = params.get('category');
  return category ? decodeURIComponent(category) : 'All';
}
```

- Extracts category from URL hash manually.
- Defaults to `"All"` if not specified.

---

## ✅ 3. React Component Setup and State

```tsx
const [courses, setCourses] = useState<Course[]>([]);
const [selectedCategory, setSelectedCategory] = useState<string>(getCategoryFromHash());
```

- Holds course data and the currently selected category.

---

## ✅ 4. Loading Course Data

```tsx
useEffect(() => {
  fetch('/courses.json')
    .then(response => response.json())
    .then((data: Course[]) => setCourses(data));
}, []);
```

- Fetches course data once on component mount.

---

## ✅ 5. Listening to URL Changes

```tsx
useEffect(() => {
  const handleHashChange = () => {
    setSelectedCategory(getCategoryFromHash());
  };

  window.addEventListener('hashchange', handleHashChange);

  return () => window.removeEventListener('hashchange', handleHashChange);
}, []);
```

- Updates category if URL hash changes.

---

## ✅ 6. Filtering Categories and Courses

```tsx
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
```

- Dynamically generates categories and filters courses.

---

## ✅ 7. Formatting Category CSS Classes

```tsx
const formatCategoryClass = (category: string) =>
  category.toLowerCase().replace(/\s+/g, '-');
```

- Converts category names into CSS-friendly class names.

---

## ✅ 8. Updating URL When Categories are Clicked

```tsx
const handleCategoryClick = (category: string) => {
  setSelectedCategory(category);
  if (category === 'All') {
    window.location.hash = '#/library';
  } else {
    window.location.hash = `#/library?category=${encodeURIComponent(category)}`;
  }
};
```

- Updates URL and category state on user click.

---

## ✅ 9. JSX Markup (Rendering HTML)

Renders title, intro, filter buttons, and course cards with dynamic data.

---

## 🎯 Final Recap

- Loads JSON course data.
- Parses URL hash to set initial category.
- Listens to URL changes and button clicks to update state and URL.
- Dynamically renders categories and courses with appropriate styling.

That's precisely how your `Library.tsx` component functions!
