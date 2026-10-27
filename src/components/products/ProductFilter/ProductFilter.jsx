import React from 'react';
import './ProductFilter.css';

const ProductFilter = ({ categories = [], activeCategory = 'all', onCategoryChange }) => {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="tabs-container">
      <div className="tabs-buttons">
        {categories.map((cat) => {
          const catId = typeof cat === 'string' ? cat : cat.id;
          const catName = typeof cat === 'string' ? cat : cat.name || cat.title;
          
          return (
            <button
              key={catId}
              type="button"
              className={`tab-btn ${activeCategory === catId ? 'active' : ''}`}
              onClick={() => onCategoryChange && onCategoryChange(catId)}
            >
              {catName}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFilter;
