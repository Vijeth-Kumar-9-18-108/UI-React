import React, { useState } from 'react';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Paneer Tikka', quantity: 2, price: 200 },
    { id: 2, name: 'Vegetable Biryani', quantity: 1, price: 250 },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container fade-in">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </div>
        ))
      )}
      <div className="total">
        <h2>Total Amount: ₹{totalAmount}</h2>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
//mo