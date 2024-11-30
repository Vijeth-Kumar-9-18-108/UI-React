import React, { useState } from 'react';
import '../styles/OrderCustomization.css';

const OrderCustomization = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleIngredientChange = (event) => {
    const { value, checked } = event.target;
    setSelectedIngredients((prev) =>
      checked ? [...prev, value] : prev.filter((ingredient) => ingredient !== value)
    );
  };

  const handleAddOnChange = (event) => {
    const { value, checked } = event.target;
    setSelectedAddOns((prev) =>
      checked ? [...prev, value] : prev.filter((addOn) => addOn !== value)
    );
  };

  return (
    <div className="container fade-in">
      <h1>Customize Your Order</h1>
      <p>Select size, ingredients, and add-ons for your meal.</p>
      <form className="customization-form">
        <div className="form-group">
          <label>Select Size:</label>
          <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
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
              <input type="checkbox" value="Paneer" onChange={handleIngredientChange} />
              <label>Paneer</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" value="Vegetables" onChange={handleIngredientChange} />
              <label>Vegetables</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" value="Cheese" onChange={handleIngredientChange} />
              <label>Cheese</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" value="Olives" onChange={handleIngredientChange} />
              <label>Olives</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" value="Tomatoes" onChange={handleIngredientChange} />
              <label>Tomatoes</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Add-ons:</label>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <input type="checkbox" value="Extra Cheese" onChange={handleAddOnChange} />
              <label>Extra Cheese</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" value="Jalapenos" onChange={handleAddOnChange} />
              <label>Jalapenos</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" value="Sour Cream" onChange={handleAddOnChange} />
              <label>Sour Cream</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" value="Avocado" onChange={handleAddOnChange} />
              <label>Avocado</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <button type="submit" className="submit-button">Add to Cart</button>
      </form>
      <div className="selected-items">
        <h2>Your Selections:</h2>
        <p><strong>Size:</strong> {selectedSize}</p>
        <p><strong>Ingredients:</strong> {selectedIngredients.join(', ')}</p>
        <p><strong>Add-ons:</strong> {selectedAddOns.join(', ')}</p>
        <p><strong>Quantity:</strong> {quantity}</p>
      </div>
    </div>
  );
};

export default OrderCustomization;
