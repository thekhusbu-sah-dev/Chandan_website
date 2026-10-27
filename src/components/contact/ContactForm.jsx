import React, { useState, useEffect } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    captchaInput: ''
  });

  const [captchaCode, setCaptchaCode] = useState('');
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage({ type: '', text: '' });

    if (formData.captchaInput.toUpperCase() !== captchaCode) {
      setStatusMessage({
        type: 'error',
        text: 'Incorrect CAPTCHA code! Please try again.'
      });
      generateCaptcha();
      setFormData((prev) => ({ ...prev, captchaInput: '' }));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage({
          type: 'success',
          text: data.message || 'Thank you! Your message has been sent successfully. Our team will contact you shortly.'
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          captchaInput: ''
        });
      } else {
        setStatusMessage({
          type: 'error',
          text: data.message || 'Failed to submit form. Please check your details and try again.'
        });
      }
    } catch (error) {
      console.error('Contact Form submission error:', error);
      setStatusMessage({
        type: 'error',
        text: 'Unable to connect to the server. Please check your internet connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
      generateCaptcha();
    }
  };

  return (
    <div className="contact-form-wrapper">
      <h3>Send Message</h3>

      {statusMessage.text && (
        <div className={`status-box ${statusMessage.type}`}>
          {statusMessage.text}
        </div>
      )}

      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className="form-control"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
            className="form-control"
            placeholder="Describe your requirement..."
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Verification Check</label>
          <div className="captcha-container">
            <div
              className="captcha-img"
              id="captchaCode"
              onClick={generateCaptcha}
              title="Click to refresh CAPTCHA"
            >
              {captchaCode}
            </div>
            <input
              type="text"
              id="captchaInput"
              className="form-control captcha-input-field"
              placeholder="Code"
              value={formData.captchaInput}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <button type="submit" className="btn-submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
