import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ArtworkCard.css';
import { Artwork } from './useGallery';

interface ArtworkCardProps {
  artwork: Artwork;
  className?: string;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, className: _className }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const preloadVideoRef = useRef<HTMLVideoElement>(null);

  // Preload video and capture first frame for thumbnail
  useEffect(() => {
    if (artwork.videoURL) {
      // Reset video ready state when artwork changes
      setVideoReady(false);
      
      const preloadVideo = document.createElement('video');

      // Setup event listeners
      preloadVideo.addEventListener('loadeddata', () => {
        preloadVideo.currentTime = 0;
      });

      preloadVideo.addEventListener('seeked', () => {
        // Video is ready at first frame
        setVideoReady(true);
      });

      // Load the video
      preloadVideo.src = artwork.videoURL;
      preloadVideo.muted = true;
      preloadVideo.preload = 'auto';
      preloadVideo.load();

      // Save reference
      preloadVideoRef.current = preloadVideo;
    }
  }, [artwork.videoURL]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  // Use effect to handle video play/pause based on hover state
  useEffect(() => {
    if (isHovering && videoRef.current) {
      // Add small timeout to ensure video element is fully rendered
      const playTimeout = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play()
            .catch(err => console.log('Auto-play prevented:', err));
        }
      }, 50);
      
      return () => clearTimeout(playTimeout);
    } else if (!isHovering && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovering]);

  return (
    <Link
      to={`/art/${artwork.id}`}
      className="artwork-card-link"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Square container for the image/video */}
      <div className="artwork-card-sizer">
        {/* Always show the image as a base/fallback */}
        <img 
          src={artwork.imageURL} 
          alt={artwork.title} 
          className={artwork.videoURL && videoReady ? "image-placeholder" : ""}
        />
        
        {/* Only show video if it's a video artwork and the video has loaded */}
        {artwork.videoURL && videoReady && (
          <video
            ref={videoRef}
            src={artwork.videoURL}
            muted
            loop
            playsInline
            preload="auto"
            className={`artwork-card-video ${isHovering ? 'is-playing' : 'video-thumbnail'}`}
            onLoadedData={(e) => {
              // Always pause at first frame initially
              e.currentTarget.currentTime = 0;
              e.currentTarget.pause();
            }}
          />
        )}
        
        {/* Video indicator dot */}
        {artwork.videoURL && (
          <div className="video-indicator"></div>
        )}
      </div>

      {/* Title below the square */}
      <div className="artwork-card-title">{artwork.title}</div>
    </Link>
  );
};

export default ArtworkCard;