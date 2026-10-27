import React from 'react';
import { companyData } from '../../data/companyData';
import './MapSection.css';

const MapSection = () => {
  return (
    <section className="contact-container map-section-wrapper">
      <div className="map-container">
        <iframe
          src={companyData.mapEmbedUrl}
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Showroom Location Map"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
