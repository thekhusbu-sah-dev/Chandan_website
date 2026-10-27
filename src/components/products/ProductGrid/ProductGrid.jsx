import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products = [] }) => {
  return (
    <section className="tiles-grid-section faucets-grid-section products-section">
      <div className="tiles-grid faucets-grid products-grid-container">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image || item.img}
            category={item.category}
            specs={item.specs}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
