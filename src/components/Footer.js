import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;