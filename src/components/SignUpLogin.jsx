import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignUpLogin.css';

const SignUpLogin = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseURL = 'http://localhost:5000'; 
    if (isSignUp) {
      // Sign Up
      await axios.post(`${baseURL}/signup`, formData)
        .then(response => alert('User registered successfully!'))
        .catch(error => alert('Error registering user'));
    } else {
      // Login
      await axios.post(`${baseURL}/login`, formData)
        .then(response => alert('Login successful!'))
        .catch(error => alert('Invalid email or password'));
    }
  };

  return (
    <div className="container fade-in">
      <h1>Sign Up / Login</h1>
      <div className="button-container">
        <button className={`toggle-button ${isSignUp ? 'active' : ''}`} onClick={() => setIsSignUp(true)}>Sign Up</button>
        <button className={`toggle-button ${!isSignUp ? 'active' : ''}`} onClick={() => setIsSignUp(false)}>Login</button>
      </div>
      <div className="form-container">
        <div className="form-box">
          <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
          <form onSubmit={handleSubmit} className={isSignUp ? 'signup-form' : 'login-form'}>
            {isSignUp && (
              <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>
            )}
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            {isSignUp && (
              <label>
                Confirm Password:
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
              </label>
            )}
            <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpLogin;
