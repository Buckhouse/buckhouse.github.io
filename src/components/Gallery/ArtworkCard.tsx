import React from 'react';
import { Link } from 'react-router-dom';
import './ArtworkCard.css';
import { Artwork } from './useGallery';

interface ArtworkCardProps {
  artwork: Artwork;
  className?: string;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, className: _className }) => {
  return (
    <Link to={`/art/${artwork.id}`} className="artwork-card-link">
  {/* Square container for the image only */}
  <div className="artwork-card-sizer">
    <img src={artwork.imageURL} alt={artwork.title} />
  </div>

  {/* Title below the square */}
  <div className="artwork-card-title">{artwork.title}</div>
</Link>
  );
};

export default ArtworkCard;