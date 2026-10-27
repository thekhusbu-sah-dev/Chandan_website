import React from 'react';
import { Link } from 'react-router-dom';
import { homeCategoriesData } from '../../../data/homeData';
import SectionTitle from '../../common/SectionTitle';
import './CategoriesShowcase.css';

const CategoriesShowcase = () => {
  return (
    <section id="categories">
      <div className="container">
        <SectionTitle part1="Our Premium" part2="Categories" center={true} />

        <div className="categories-grid">
          {homeCategoriesData.map((cat) => (
            <div key={cat.id} className={`category-card ${cat.cardClass}`}>
              <div className="overlay">
                <h3>{cat.title}</h3>
                <Link to={cat.link} className="btn-hero">
                  {cat.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesShowcase;
