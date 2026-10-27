import React from 'react';
import EnquiryButton from './EnquiryButton';
import './ProductInfo.css';

const ProductInfo = ({ title, category, description, price, brand = "Chandan Ceramics" }) => {
  return (
    <div className="product-info-details">
      {category && (
        <span className="spec-badge category-badge">
          {category}
        </span>
      )}
      <h1 className="product-title">{title}</h1>
      <p className="product-desc">{description}</p>

      {price && (
        <div className="product-price">
          ₹{price.toLocaleString('en-IN')}
        </div>
      )}

      <div className="product-brand">
        <strong>Brand: </strong> {brand}
      </div>

      <EnquiryButton productName={title} />
    </div>
  );
};

export default ProductInfo;
