import React from 'react';
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">🎵 PlayDz</div>
      </div>

      <div className="header-center">
        <input type="text" placeholder="Search your favourite songs" className="search-bar" />
      </div>

      <nav className="header-right">
        <a href="#">Home</a>
        <a href="#">Know Your Artist</a>
        <a href="#">About Us</a>
        <a href="#">Log In/Sign Up</a>
      </nav>
    </header>
  );
};

export default Header;
