import React from 'react';
import './Specification.css';

const Specification = ({ specs = [] }) => {
  if (!specs || specs.length === 0) return null;

  return (
    <div className="product-specifications">
      <h3 className="spec-title">Technical Specifications</h3>
      <ul className="spec-list">
        {specs.map((item, idx) => (
          <li key={idx} className="spec-item">
            <i className="fa-solid fa-check spec-icon"></i>
            <span>{typeof item === 'string' ? item : `${item.label}: ${item.detail}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Specification;
