import React from 'react';
import '../styles/MusicCard.css';

const MusicCard = ({ title, image }) => {
  return (
    <div className="music-card">
      <img src={image} alt={title} className="music-card-image" />
      <p className="music-card-title">{title}</p>
    </div>
  );
};

export default MusicCard;
