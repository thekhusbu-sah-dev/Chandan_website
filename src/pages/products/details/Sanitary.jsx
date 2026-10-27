import React from 'react';
import ProductHero from '../../../components/products/ProductHero';
import ProductGrid from '../../../components/products/ProductGrid';
import SectionTitle from '../../../components/common/SectionTitle';
import { products } from '../../../data/products';
import './Sanitary.css';

const Sanitary = () => {
  const sanitaryProducts = products.filter((p) => p.category === 'sanitary');

  return (
    <div className="sanitary-detail-page container">
      <ProductHero
        titlePart1="Elite Sanitaryware"
        titlePart2="Suites"
        subtitle="Rimless WCs, countertop basins, and hygienic double-glazed ceramics."
      />
      <SectionTitle title="Sanitaryware Collection" subtitle="Antibacterial glazes and water-saving dual flush engineering" center={true} />
      <ProductGrid products={sanitaryProducts} />
    </div>
  );
};

export default Sanitary;
