import React from 'react';
import ProductHero from '../../../components/products/ProductHero';
import ProductGrid from '../../../components/products/ProductGrid';
import SectionTitle from '../../../components/common/SectionTitle';
import { products } from '../../../data/products';
import './Marble.css';

const Marble = () => {
  const marbleProducts = products.filter(
    (p) => p.category === 'tiles' || p.title.toLowerCase().includes('marble') || p.title.toLowerCase().includes('onyx')
  );

  return (
    <div className="marble-detail-page container">
      <ProductHero
        titlePart1="Italian Marble"
        titlePart2="& Vitrified"
        subtitle="Exquisite Italian marble designs and double charged vitrified slabs for royal interiors."
      />
      <SectionTitle title="Marble & Onyx Collection" subtitle="Timeless elegance for living rooms and luxury halls" center={true} />
      <ProductGrid products={marbleProducts} />
    </div>
  );
};

export default Marble;
