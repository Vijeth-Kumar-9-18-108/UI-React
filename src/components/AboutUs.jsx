import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => (
  <div className="container fade-in">
    <h1>About Us</h1>
    <p>Welcome to Food Wonder, where we celebrate the best vegetarian cuisine. Our mission is to offer a delightful dining experience with high-quality ingredients and mouth-watering dishes.</p>
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwjKxq23dpg4U9Ow364pIixNvUwgJL8MdVgJBSsbvMIFbFoHBBlwL-8Re4g0-T5-orkoZlzmOb4DX-g_18ZL6K42uzPiC0IkCQcx2txQ40mVhNmZY9-7ZWcCfTgHy4qkE7jAvN5cOjZseQlEMWEGhN9rYQSqTLArRV2GYgMJpFdnH-_pz_VPwuoXrH5vU/w945-h600-p-k-no-nu/milestone%20HoteL.png" alt="About Us" className="about-image" />
    <p>Our chefs are dedicated to creating unique and flavorful dishes that cater to all taste buds. From traditional recipes to modern twists, we have something for everyone</p>
    <div className="team">
      <h2>Meet Our Team</h2>
      <div className="team-member">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5iqc18BD93JWv6neywF0zolKuB18D7YzwBtEiCX0QqZPF8ennLfTLrqDiaKjDPxgxOw782tUcO1q0Q8KX0RL8hra_DFFqyRlOvj_XtEqQBc9gIf5HQBVq2Et2nA9AylSl41U_wQ-WZ5IkhvjTChyEkRvdjX14z0KMu1GxpzFa8myLVnVFQxFyWM2MA24/w128-h128-p-k-no-nu/chef1.png" alt="Chef 1" />
        <h3>Chef Sanjeev</h3>
        <p>Head Chef</p>
      </div>
      <div className="team-member">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiagy_hPEgTtFaEGfHnO2ezRtg9bdR5EYz1zD6Vd7qJNfc3eJRb9CQnb3804KV_NvujGHe5JfXdBqfIBM10S0cwWvZNCpUGEZzLiEwSQX5Wh3HIEfkKIN0i8j8vxTNZlpnGs4we3V7uVQpS9p5c7_-tkQepjwkjTdIy5Lzgyb7_duraAv4cajZJn2hraQE/w945-h600-p-k-no-nu/chef2.png" alt="Chef 2" />
        <h3>Chef Ranveer</h3>
        <p>Co Chef</p>
      </div>
      <div className="team-member">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibwfxm17CMbEs9_x641tIraUDrD1W_kJCqEKBZOmzKOt5-HMbimY5mPjfpnuOtHnqW0cts2ueCAOqM-UEk4oWnvFzK8fnimXKlvDndp2ch8GoQhytZAZ4GvLV3BpS8wTKfsor6_r6vIiR9ftiZy-Kubiskb1E1jPdzzlqcNeU4Lxj3cCRrx9o95mW6B2M/w945-h600-p-k-no-nu/chef3.png" alt="Chef 3" />
        <h3>Chef Vikas</h3>
        <p>Main Chef</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
//mo