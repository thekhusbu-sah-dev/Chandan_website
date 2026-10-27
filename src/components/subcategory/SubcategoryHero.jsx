import React from 'react';
import SectionTitle from '../common/SectionTitle';
import './SubcategoryHero.css';

const SubcategoryHero = ({ titlePart1, titlePart2, subtitle }) => {
  return (
    <section className="tiles-hero faucets-hero">
      <div className="tiles-hero-content faucets-hero-content">
        <SectionTitle part1={titlePart1} part2={titlePart2} center={true} />
        <p className="subcategory-hero-desc">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default SubcategoryHero;
