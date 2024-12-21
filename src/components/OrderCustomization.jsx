import React from 'react';
import '../styles/OrderCustomization.css';

const OrderCustomization = () => (
  <div className="container fade-in">
    <h1>Customize Your Order</h1>
    <p>Select size, ingredients, and add-ons for your meal.</p>
    <form className="customization-form">
      <div className="form-group">
        <label>Select Size:</label>
        <select>
          <option value="" disabled>Select size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <div className="checkbox-group">
          <div className="checkbox-item">
            <input type="checkbox" value="Paneer" />
            <label>Paneer</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" value="Vegetables" />
            <label>Masala Dosa</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" value="Cheese" />
            <label>Veg Biryani</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" value="Olives" />
            <label>Golibaje</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" value="Tomatoes" />
            <label>Tomatoes</label>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label>Add-ons:</label>
        <div className="checkbox-group">
          <div className="checkbox-item">
            <input type="checkbox" value="Extra Cheese" />
            <label>Extra Cheese</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" value="Jalapenos" />
            <label>Jalapenos</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" value="Sour Cream" />
            <label>Sour Cream</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" value="Avocado" />
            <label>Avocado</label>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label>Quantity:</label>
        <input type="number" min="1" />
      </div>
      <button type="button" className="submit-button">Add to Cart</button>
    </form>
  </div>
);

export default OrderCustomization;
