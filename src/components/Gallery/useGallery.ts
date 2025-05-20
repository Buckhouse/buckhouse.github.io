// src/components/Gallery/useGallery.ts

import { useState, useEffect } from 'react';
import galleryData from './GalleryData.json';

export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  videoURL?: string;  // Optional video URL for video artworks
  videoThumbURL?: string;  // Optional video thumbnail URL for video artworks
  media: string;
  date: string;
  featured: boolean;
}

const useGallery = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    // Simulate loading from file (already imported as JSON)
    setArtworks(galleryData.images);
  }, []);

  return {
    artworks,
  };
};

export default useGallery;
