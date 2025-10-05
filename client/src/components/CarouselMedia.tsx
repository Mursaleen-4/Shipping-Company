import React from 'react';
import SimpleVideoBackground from './SimpleVideoBackground';

interface CarouselMediaProps {
  media: {
    type: 'video' | 'image';
    video?: string;
    image?: string;
    fallback?: string;
    description: string;
  };
  className?: string;
}

const CarouselMedia: React.FC<CarouselMediaProps> = ({ media, className = '' }) => {
  if (media.type === 'video' && media.video) {
    return (
      <SimpleVideoBackground
        videoSrc={media.video}
        className={className}
      />
    );
  }

  if (media.type === 'image' && media.image) {
    return (
      <div className={`absolute inset-0 w-full h-full ${className}`}>
        <img
          src={media.image}
          alt={media.description}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
    );
  }

  // Fallback in case of missing media
  return (
    <div className={`absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900 to-blue-700 ${className}`} />
  );
};

export default CarouselMedia;
