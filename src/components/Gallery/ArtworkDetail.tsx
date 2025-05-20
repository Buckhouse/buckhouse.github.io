// src/components/Gallery/ArtworkDetail.tsx

import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useGallery from './useGallery';
import './ArtworkDetail.css';

const ArtworkDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { artworks } = useGallery();

  const currentIndex = artworks.findIndex((art) => art.id === id);
  const currentArtwork = artworks[currentIndex];

  const [previousArtwork, setPreviousArtwork] = useState<typeof currentArtwork | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!currentArtwork) return;

    // Reset video loaded state when artwork changes
    setVideoLoaded(false);
    setPreviousArtwork(currentArtwork);
    setTransitioning(true);

    const timeout = setTimeout(() => {
      setPreviousArtwork(null);
      setTransitioning(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [currentArtwork]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      else if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, artworks]);

  if (!artworks.length) return null;
  if (!currentArtwork) return <p>Artwork not found.</p>;

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    navigate(`/art/${artworks[prevIndex].id}`);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % artworks.length;
    navigate(`/art/${artworks[nextIndex].id}`);
  };

  const handleBackToGallery = () => {
    navigate('/');
  };

  return (
    <div className="artwork-detail-container">
      <div className="button-group">
        <button className="image-button" onClick={handlePrevious}>
            <img src={`${import.meta.env.BASE_URL}images/left.jpg`} alt="Previous" />
        </button>

        <button className="image-button" onClick={handleBackToGallery}>
            <img src={`${import.meta.env.BASE_URL}images/gallery_button.jpg`} alt="Gallery" />
        </button>

        <button className="image-button" onClick={handleNext}>
            <img src={`${import.meta.env.BASE_URL}images/right.jpg`} alt="Next" />
        </button>
        </div>

      <div className="artwork-image-wrapper">
        <div className="artwork-image-inner" onClick={handleNext} style={{ cursor: 'pointer' }}>
          {previousArtwork && previousArtwork.id !== currentArtwork.id && (
            <>
              {previousArtwork.videoURL ? (
                <video
                  src={previousArtwork.videoURL}
                  className="artwork-previous fading-out"
                  style={{ position: 'absolute', zIndex: 0 }}
                />
              ) : (
                <img
                  src={previousArtwork.videoThumbURL || previousArtwork.imageURL}
                  alt={previousArtwork.title}
                  className="artwork-previous fading-out"
                  style={{ position: 'absolute', zIndex: 0 }}
                />
              )}
            </>
          )}

          {/* Use video thumbnail for videos in detail view, regular image for non-videos */}
          <img
            src={currentArtwork.videoThumbURL || currentArtwork.imageURL}
            alt={currentArtwork.title}
            className={`artwork-image ${transitioning ? 'fading-in' : ''} ${currentArtwork.videoURL ? 'video-placeholder' : ''}`}
            style={{ 
              opacity: (currentArtwork.videoURL && videoLoaded) ? 0 : 1 
            }}
          />
          
          {currentArtwork.videoURL && (
            <video
              ref={videoRef}
              src={currentArtwork.videoURL}
              className={`artwork-video ${transitioning ? 'fading-in' : ''}`}
              autoPlay
              loop
              muted
              playsInline
              style={{ 
                opacity: videoLoaded ? 1 : 0,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 5
              }}
              onLoadedData={() => {
                // Set video as loaded after a short delay
                setTimeout(() => setVideoLoaded(true), 50);
              }}
            />
          )}
        </div>
      </div>

      <div className="artwork-detail">
        <h2>{currentArtwork.title}</h2>
        <p><strong>Medium:</strong> {currentArtwork.media}</p>
        <p><strong>Date:</strong> {currentArtwork.date}</p>
        <p>{currentArtwork.description}</p>
      </div>
    </div>
  );
};

export default ArtworkDetail;