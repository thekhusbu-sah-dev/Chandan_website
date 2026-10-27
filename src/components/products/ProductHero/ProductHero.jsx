import React from 'react';
import './ProductHero.css';

const ProductHero = ({
  titlePart1 = "Premium",
  titlePart2 = "Products",
  subtitle = "Discover our exclusive collection of Tiles, Faucets, Showers, Sanitaryware, and PVC Pipes."
}) => {
  return (
    <section className="products-hero tiles-hero faucets-hero contact-hero product-hero-section">
      <div className="container">
        <h1 className="hero-title">
          {titlePart1} <span>{titlePart2}</span>
        </h1>
        {subtitle && (
          <p className="hero-subtitle">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductHero;
