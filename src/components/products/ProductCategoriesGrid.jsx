import React from 'react';
import { productsOverviewData } from '../../data/productsData';
import SplitHeading from '../common/SplitHeading';

const ProductCategoriesGrid = () => {
  return (
    <section className="products-section" id="products">
      <div className="container">
        <SplitHeading part1="Our Product" part2="Categories" center={true} />
        
        <div className="product-grid">
          {productsOverviewData.categories.map((cat, idx) => (
            <div key={idx} className="product-card">
              <img src={cat.img} alt={cat.title} loading="lazy" />
              <div className="product-card-content">
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesGrid;
