import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import OrderCustomization from './components/OrderCustomization';
import ShoppingCart from './components/ShoppingCart';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import SignUpLogin from './components/SignUpLogin';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/customize-order" element={<OrderCustomization />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/sign-up-login" element={<SignUpLogin />} />
            <Route path="/feedback" element={<FeedbackForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
/* mo */