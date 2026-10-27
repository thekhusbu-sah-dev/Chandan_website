import React from 'react';
import ProductCard from '../products/ProductCard';
import './RelatedProducts.css';

const RelatedProducts = ({ products = [] }) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="related-products">
      <h3 className="related-title">Related Products You May Like</h3>
      <div className="product-grid related-grid">
        {products.slice(0, 3).map((prod) => (
          <ProductCard
            key={prod.id}
            title={prod.title}
            description={prod.description}
            image={prod.image || prod.img}
            category={prod.category}
            specs={prod.specs}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
