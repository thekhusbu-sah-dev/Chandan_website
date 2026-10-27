import React from 'react';
import { Link } from 'react-router-dom';
import './EnquiryButton.css';

const EnquiryButton = ({ productName = "this product" }) => {
  return (
    <Link
      to={`/contact?product=${encodeURIComponent(productName)}`}
      className="btn-hero enquiry-btn"
    >
      <i className="fa-regular fa-paper-plane"></i>
      Enquire About Product
    </Link>
  );
};

export default EnquiryButton;
