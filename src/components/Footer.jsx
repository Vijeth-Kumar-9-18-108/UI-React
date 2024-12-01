import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      <a href="/menu">Menu</a>
      <a href="/cart">Cart</a>
      <a href="/contact">Contact</a>
      <a href="/about-us">About Us</a>
    </div>
    <div className="footer-social">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
    </div>
    <div className="footer-copy">
      &copy; 2023 Food Wonder. All rights reserved.
    </div>
  </footer>
);

export default Footer;
//mo