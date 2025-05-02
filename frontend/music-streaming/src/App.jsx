import React from 'react';
import MusicSection from './components/MusicSection';
import Header from './components/Header';
import './styles/App.css'
import TopArtists from './components/TopArtists';
import DoseofLove from './sections/DoseofLove';
import International from './sections/International';
import Devotional from './sections/Devotional';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <DoseofLove/>
      <TopArtists sectionTitle = "Top Artists"/>
      <International/>
      <Devotional/>
      <Footer/>
    </>
  );
}

export default App;
