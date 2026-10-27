import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, description, image, img, category, specs = [] }) => {
  const imgSrc = image || img;

  return (
    <div className="tile-card faucet-card product-card">
      <div className="tile-img-box faucet-img-box">
        <img src={imgSrc} alt={title} loading="lazy" />
      </div>
      <div className="tile-info faucet-info product-card-content">
        {category && (
          <span className="spec-badge product-category-badge">
            {category}
          </span>
        )}
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        {specs && specs.length > 0 && (
          <div className="tile-specs faucet-specs">
            {specs.map((spec, idx) => (
              <span key={idx} className="spec-badge">
                {spec}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
