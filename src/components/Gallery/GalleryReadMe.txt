Gallery readme

src/
├── components/
│ ├── Navbar/               # Existing navbar component
│ ├── Gallery/              # New folder for Gallery components
│ │ ├── Gallery.tsx         # Renders the grid of images (Bento-style)
│ │ ├── Gallery.css         # Styles for the gallery layout
│ │ ├── GalleryData.json    # Contains artwork metadata
│ │ ├── ArtworkCard.tsx     # A single image card within the grid
│ │ ├── ArtworkDetail.tsx   # Displays a detailed view of a selected artwork
│ │ ├── useGallery.ts       # Custom hook for fetching & organizing data
│ ├── [OtherComponents]/    # Future components
├── styles/
│ ├── globals.css           # Existing global styles
├── App.tsx                 # Existing entry point for app
├── main.tsx                # Existing main file
├── index.html              # Existing HTML structure

Gallery Data Management
	•	GalleryData.json
	•	This file already contains metadata such as id, title, description, imageURL, and media.
	•	We will read this data dynamically to construct our UI.
	•	useGallery.ts
	•	A custom hook (useGallery) will handle fetching the JSON data, processing it, and exposing it to our components.
	•	This will be useful if we ever want to extend our data-fetching logic (e.g., pulling data from an API instead of a JSON file).
	•	Ensures indexing remains correct between the grid and detail view.

Displaying the Gallery Grid
	•	Gallery.tsx
	•	This is the main component that renders the modified Bento-style grid.
	•	It maps over the artwork data from GalleryData.json and renders ArtworkCard.tsx for each image.
	•	Responsible for grid styling and layout logic.
	•	Gallery.css
	•	Defines the Bento-style layout.
	•	Uses CSS Grid or Flexbox to create a responsive grid where:
	•	Some images are full-size squares (640px × 640px).
	•	Some images are quarter-sized and combined creatively.
	•	On mobile, the layout gracefully stacks into a single column.
	•	ArtworkCard.tsx
	•	A single image card component.
	•	Displays an image thumbnail with a hover effect.
	•	Listens for clicks, which trigger the detail view.

Handling the Detail View
	•	ArtworkDetail.tsx
	•	This is the component that displays the full detail view of an artwork.
	•	It retrieves the correct artwork details (title, description, media) based on the clicked image.
	•	Uses React Router (useParams()) or React state to track the selected artwork.
	•	Includes a “Back to Gallery” button.

⸻
