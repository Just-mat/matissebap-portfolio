import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;