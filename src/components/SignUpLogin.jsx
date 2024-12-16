import React, { useState } from 'react';
import '../styles/SignUpLogin.css';

const SignUpLogin = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="container fade-in">
      <h1>Sign Up / Login</h1>
      <div className="button-container">
        <button className={`toggle-button ${isSignUp ? 'active' : ''}`} onClick={() => setIsSignUp(true)}>Sign Up</button>
        <button className={`toggle-button ${!isSignUp ? 'active' : ''}`} onClick={() => setIsSignUp(false)}>Login</button>
      </div>
      <div className="form-container">
        {isSignUp ? (
          <div className="form-box">
            <h2>Sign Up</h2>
            <form className="signup-form">
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Password:
                <input type="password" name="password" required />
              </label>
              <label>
                Confirm Password:
                <input type="password" name="confirm-password" required />
              </label>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        ) : (
          <div className="form-box">
            <h2>Login</h2>
            <form className="login-form">
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Password:
                <input type="password" name="password" required />
              </label>
              <button type="submit">Login</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpLogin;