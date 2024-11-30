import React from 'react';
import '../styles/FeedbackForm.css';

const FeedbackForm = () => (
  <div className="container fade-in">
    <h1>Feedback Form</h1>
    <p>We value your feedback. Please share your thoughts with us.</p>
    <form className="feedback-form">
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <label>
        Rating:
        <select name="rating">
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Good</option>
          <option value="3">3 - Average</option>
          <option value="2">2 - Poor</option>
          <option value="1">1 - Terrible</option>
        </select>
      </label>
      <button type="submit">Submit Feedback</button>
    </form>
  </div>
);

export default FeedbackForm;
