import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">
        <img src="https://via.placeholder.com/100x50?text=Logo" alt="Food Wonder Logo" />
      </Link>
    </div>
    <ul className="navbar-menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/customize-order">Customize Order</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
      <li><Link to="/sign-up-login">Sign Up / Login</Link></li>
      <li><Link to="/feedback">Feedback</Link></li>
    </ul>
    <div className="navbar-search">
      <input type="text" placeholder="Search..." />
      <button type="button">Search</button>
    </div>
  </nav>
);

export default Navbar;
