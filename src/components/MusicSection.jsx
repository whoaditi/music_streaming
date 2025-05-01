import React from 'react';
import MusicCard from './MusicCard';
import '../styles/MusicSection.css';

const MusicSection = ({ title, songs }) => {
  return (
    <div className="music-section">
      <h2>{title}</h2>
      <div className="music-cards-container">
        {songs.map((song, index) => (
          <MusicCard key={index} title={song.title} image={song.image} />
        ))}
      </div>
    </div>
  );
};

export default MusicSection;

