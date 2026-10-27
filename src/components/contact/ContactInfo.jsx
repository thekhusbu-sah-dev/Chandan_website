import React from 'react';
import { companyData } from '../../data/companyData';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      {/* Address Card */}
      <div className="info-card">
        <div className="info-icon">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="info-content">
          <h3>Our Showroom</h3>
          <p>{companyData.address}</p>
        </div>
      </div>

      {/* Phone Card */}
      <div className="info-card">
        <div className="info-icon">
          <i className="fas fa-phone-alt"></i>
        </div>
        <div className="info-content">
          <h3>Call Us</h3>
          {companyData.phones.map((phone, idx) => (
            <a key={idx} href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>
              {phone}
            </a>
          ))}
        </div>
      </div>

      {/* Email Card */}
      <div className="info-card">
        <div className="info-icon">
          <i className="fas fa-envelope"></i>
        </div>
        <div className="info-content">
          <h3>Email Address</h3>
          <a href={`mailto:${companyData.email}`}>{companyData.email}</a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
