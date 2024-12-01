import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <div className="container fade-in">
    <h1>Contact Us</h1>
    <form className="contact-form">
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
      <button type="submit">Send</button>
    </form>
    <div className="contact-info">
      <p>Email: info@foodwonder.com</p>
      <p>Phone: +91 123 456 7890</p>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086566860553!2d-122.08706168468208!3d37.418145279824424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c2aabe2a7%3A0xe8acabc6b1ce6ef5!2sGoogleplex!5e0!3m2!1sen!2sin!4v1622134579514!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  </div>
);

export default Contact;
//mo