import React from 'react';
import '../styles/Home.css';

const Home = () => (
  <div className="home-container fade-in">
    <h1>Welcome to Food Wonder</h1>
    <p>Explore our delicious vegetarian menu items and seasonal specials.</p>
    <div className="hero-image"></div>
    <div className="promotions">
      <h2>Promotions and Seasonal Specials</h2>
      <div className="promotion-item">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgAQlwbwK1PFLHUA9WF4gmaVEWOsYtl3c45-V__3vpXgns-u6W-cbR98owPILvrbWtMoXk22sVMmEpjpDeIsZwWVeleB1wGZb70SD-0X4hldT0uUZnhiA7ZMW8fEqJQRDQSpkGqQrm6-1osjAs_tviTPLgO-ZACPFNDRmEYexao3xkFXz_jnMTLRgCSZE/s320/summersalad.png" alt="Promotion 1" />
        <h3>Summer Special Salad</h3>
        <p>Enjoy a refreshing salad with a variety of seasonal fruits and veggies.</p>
      </div>
      <div className="promotion-item">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpCdu7AOUBcOKIrqiYWKF7X7mYbeLZKjS13wfyTPa7Lb9YO12vh28YNUToBHLJKF-CZSeHIdBEt0qtxJeHC0inqk7dqEsV87GYf-eZ6uQfwAKN8lKCQEzuk4zj1e1qc1eM7i9sKEXX0UYZGgdhDyVGEXtKpceQIK_F2HDrcbAWYmOs9pKePWP16KnUZvo/s320/feast.png" alt="Promotion 2" />
        <h3>Festive Feast</h3>
        <p>Indulge in our special festive menu available only for a limited time.</p>
      </div>
    </div>
    <div className="categories">
      <h2>Categories</h2>
      <div className="category-list">
        <div className="category">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdL5O5cY167zFikCZTpbZGNOHuVihSFEvYSAEW6wqB7t6Mr9J1XDqWGuR_RZMEUdp9EAksl-977bu8qXn57lt29_K22iRv2i_IIgmEJ38qfTlWBN1J-S4iJl_tTPRglqeDGgNP5v6Bt9IYdvq12S28E3ts-tsPecRFWzGSUPa8iykZgYbGXtEc-t1V_GA/s320/msaldosa.png" alt="Starters" />
          <h3>Starters</h3>
        </div>
        <div className="category">
          <img src="https://via.placeholder.com/250?text=Main+Course" alt="Main Course" />
          <h3>Main Course</h3>
        </div>
        <div className="category">
          <img src="https://via.placeholder.com/250?text=Desserts" alt="Desserts" />
          <h3>Desserts</h3>
        </div>
        <div className="category">
          <img src="https://via.placeholder.com/250?text=Salads" alt="Salads" />
          <h3>Salads</h3>
        </div>
        <div className="category">
          <img src="https://via.placeholder.com/250?text=Beverages" alt="Beverages" />
          <h3>Beverages</h3>
        </div>
        <div className="category">
          <img src="https://via.placeholder.com/250?text=Sides" alt="Sides" />
          <h3>Sides</h3>
        </div>
      </div>
    </div>
    <div className="featured-items">
      <h2>Featured Items</h2>
      <div className="featured-item">
        <h3>The Mafias Meal</h3>
        <p>622 calories</p>
      </div>
      <div className="featured-item">
        <h3>Eggs Pepper Roast Combo</h3>
        <p>Indian cuisine</p>
      </div>
      <div className="featured-item">
        <h3>Kadai Eggs Combo</h3>
        <p>Indian cuisine</p>
      </div>
    </div>
  </div>
);

export default Home;
