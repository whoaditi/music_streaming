import React from 'react';
import MusicSection from '../components/MusicSection';

import song1 from '../assets/devotional/deva.png';
import song2 from '../assets/devotional/durga.png';
import song3 from '../assets/devotional/krishna.png';
import song4 from '../assets/devotional/ram.png';
import song5 from '../assets/devotional/siya.png';

const devotionalSongs = [
  { title: "Deva Deva", image: song1 },
  { title: "Aigiri Nandini", image: song2 },
  { title: "Tum Prem Ho", image: song3 },
  { title: "Ram Aayenge", image: song4 },
  { title: "Ram Siya Ram", image: song5 }
];

const Devotional = () => {
  return (
    <MusicSection title="Devotional Songs" songs={devotionalSongs} />
  );
};

export default Devotional;