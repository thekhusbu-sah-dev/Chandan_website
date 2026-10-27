import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ title, img, desc, link = '/products' }) => {
  return (
    <div className="category-card" style={{ backgroundImage: `url(${img})` }}>
      <div className="overlay">
        <h3>{title}</h3>
        {desc && <p className="category-card-desc">{desc}</p>}
        <Link to={link} className="btn-hero category-card-btn">
          Explore Category <i className="fas fa-arrow-right btn-icon"></i>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
