import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <Link to="/">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmGeXHe1w5Lg3_EQqloqd7qHK_CujI_iR6V8wBZYZX8z7jTJczG2eBFzzzpHg3GK0MjpZwz_70MSwrbh4DlzHuEfTdimxJjqLIqd47E_H_IhnGjpuVlD7_J5KTLg-czor6nA_a5mxqk0QX3YGnincSq5JCDq4GgNHwdH0AgFNJ1mjzg9TognjsyjoPb04/w945-h600-p-k-no-nu/df.png" alt="Food Wonder Logo" />
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

