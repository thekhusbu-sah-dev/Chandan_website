import React from 'react';
import { companyData } from '../../data/companyData';

const WhatsAppFloat = () => {
  return (
    <a
      href={companyData.whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppFloat;
