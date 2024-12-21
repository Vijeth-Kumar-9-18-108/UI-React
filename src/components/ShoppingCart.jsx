import React from 'react';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => (
  <div className="container fade-in">
    <h1>Shopping Cart</h1>
    <div className="cart-item">
      <div className="item-details">
        <h3>Paneer Tikka</h3>
        <p>₹200</p>
      </div>
      <input type="number" min="1" value="2" readOnly />
      <button>Remove</button>
    </div>
    <div className="cart-item">
      <div className="item-details">
        <h3>Vegetable Biryani</h3>
        <p>₹250</p>
      </div>
      <input type="number" min="1" value="1" readOnly />
      <button>Remove</button>
    </div>
    <div className="total">
      <h2>Total Amount: ₹650</h2>
      <button className="checkout-button">Checkout</button>
    </div>
  </div>
);

export default ShoppingCart;
