import React from 'react';
import MusicSection from '../components/MusicSection';
import song1 from '../assets/song01.png';
import song2 from '../assets/song2.png';
import song3 from '../assets/song3.png';
import song4 from '../assets/song4.png';
import song5 from '../assets/song005.png';
// import song6 from '../assets/song6.png';

const songs = [
  { title: "Bulleya", image: song1},
  { title: "Sanam Re", image: song2 },
  { title: "Jhol", image: song3 },
  { title: "Khairiyat", image: song4 },
  {title: "Mast Magan", image: song5 },
  // {title: "Isq Risk", image: song6}
];

const DoseofLove = () => {
    return (
      <MusicSection title="Dose of Love" songs={songs} />
    );
  };

export default DoseofLove;