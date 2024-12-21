import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgviIHeiaIFtu3olHXn6KcFXjsFnPXlOXszMtRtOfBXGHvWugCcHBzl-UcCxj5F7V7Ic95ESt2yk0bU0zQBl_uW0g7PErerI4WqK3DMXh6Nf2NR4HzrU5znSW30ciLrB7Id4R4Fv-fuV28Yx8BOrFxpc9ZnrFXD-n5KeyJvt9vAkVe7geEq1yH_nbC12kU/s669/Untitled.png" alt="Food Wonder Logo" />
        </Link>
      </div>
      <div className="navbar-menu-button" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
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
};

export default Navbar;
