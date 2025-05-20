# James Buckhouse Portfolio Website

A personal portfolio website showcasing James Buckhouse's work in art, design, film, and more, built with React and Vite.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Gallery Implementation](#gallery-implementation)
- [Installation and Setup](#installation-and-setup)
- [Development](#development)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

## Overview

This website serves as a portfolio for James Buckhouse, featuring:

- An art gallery with thumbnail grid and detailed views
- A design page with Delphi integration
- A library of curated resources and courses
- A film page showcasing movie credits
- An about page with biographical information

The site is built with modern React (v19), TypeScript, and CSS, with a responsive design that adapts to various screen sizes.

## Features

- **Responsive Gallery**: Grid-based layout of artwork thumbnails with detailed view
- **Interactive Video Content**: Hover-to-play video thumbnails with optimized loading
- **Seamless Media Transitions**: Smooth transitions between image and video content
- **Dynamic Routing**: HashRouter-based navigation with clean URLs
- **Resource Library**: Filterable collection of courses and resources by category
- **Film Portfolio**: Visual showcase of film projects
- **Embedded Design Content**: Integration with Delphi for design-related content
- **About Page**: Biographical information with social links

## Project Structure

```
/src
  /components
    /Gallery
      - ArtworkCard.tsx       # Artwork thumbnail component
      - ArtworkDetail.tsx     # Detailed artwork view
      - Gallery.tsx           # Main gallery grid component
      - GalleryData.json      # Artwork metadata
      - useGallery.ts         # Custom hook for gallery data
    /Navbar
      - Navbar.tsx            # Navigation component
  /pages
    - About.tsx               # About page component
    - Design.tsx              # Design page with Delphi integration
    - Film.tsx                # Film portfolio page
    - Library.tsx             # Library resources page
  /styles
    - globals.css             # Global styles and design tokens
    - [Page].css              # Page-specific CSS files
  - App.tsx                   # Main application component with routing
  - main.tsx                  # React entry point
```

## Gallery Implementation

The gallery is implemented with several key components:

### Data Structure

Artwork data is stored in `GalleryData.json` with the following structure:

```typescript
interface Artwork {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  videoURL?: string;  // Optional video URL for video artworks
  media: string;
  date: string;
  featured: boolean;
}
```

### Components

1. **Gallery.tsx**: Renders a responsive grid of artwork thumbnails
   - Uses CSS Grid with `auto-fill` and `minmax` for responsive layout
   - Featured artworks can span multiple grid cells

2. **ArtworkCard.tsx**: Creates uniform square thumbnails with titles
   - Uses the aspect-ratio padding trick for consistent thumbnail dimensions
   - Images use `object-fit: cover` for proper cropping
   - Video thumbnails play automatically on hover (muted)
   - Optimized video loading with image placeholder to prevent black flash
   - Animated video indicator for artworks with video
   - Hover effects add subtle scaling and shadow

3. **ArtworkDetail.tsx**: Shows full-size image or video with metadata
   - Conditional rendering: displays video for video artworks, images for others
   - Autoplays videos with muted audio
   - Smooth transitions between different types of artworks
   - Navigation controls for previous/next/gallery
   - Transition effects between artworks
   - Keyboard navigation support (arrow keys)

4. **useGallery.ts**: Custom hook that loads and provides artwork data

### CSS Implementation

The gallery uses CSS Grid for layout, with responsive adjustments via media queries:

```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
}
```

Thumbnail sizing is handled with a padding-based aspect ratio technique to ensure consistent square thumbnails regardless of the original image or video dimensions:

```css
.artwork-card-sizer {
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* forces a 1:1 aspect ratio */
  overflow: hidden;
  border-radius: 8px;
  background-color: #000; /* dark background for videos */
}

.artwork-card-sizer img,
.artwork-card-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  transition: opacity 0.3s ease;
}

/* Video indicator dot in the corner */
.video-indicator {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 12px;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  z-index: 2;
  animation: pulse 2s infinite ease-in-out;
}

/* Video loading optimization to prevent black flash */
.artwork-card-video {
  background-color: transparent;
  z-index: 1;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

.image-placeholder {
  opacity: 1;
  z-index: 0;
}
```

## Installation and Setup

```bash
# Clone the repository
git clone https://github.com/buckhouse/buckhouse.github.io.git

# Navigate to the project directory
cd buckhouse.github.io

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Development

The project uses Vite for fast development and building:

```bash
# Start development server
npm run dev

# Type-check and build
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## Deployment

The site is deployed to GitHub Pages using the gh-pages package:

```bash
# Build and deploy in one command
npm run build && npm run deploy
```

This builds the project and pushes the contents of the `dist` folder to the `gh-pages` branch, which is configured to serve the website.

## Technologies Used

- **React 19**: UI library for building components
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **React Router**: Navigation and routing
- **CSS Modules**: Scoped CSS styling
- **PapaParse**: CSV parsing for the library page
- **gh-pages**: GitHub Pages deployment helper

---

Created by James Buckhouse