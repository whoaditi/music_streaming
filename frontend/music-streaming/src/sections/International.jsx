import React from 'react';
import MusicSection from '../components/MusicSection';

import song1 from '../assets/perfect.png';
import song2 from '../assets/nights.png';
import song3 from '../assets/lover.png';
import song4 from '../assets/snowman.png';

const internationalSongs = [
  { title: "Perfect", image: song1 },
  { title: "The Nights", image: song2 },
  { title: "Lover", image: song3 },
  { title: "Snowman", image: song4 },
];

const International = () => {
  return (
    <MusicSection title="International Hits" songs={internationalSongs} />
  );
};

export default International;
