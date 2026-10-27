import React from 'react';
import ProductHero from '../../../components/products/ProductHero';
import ProductGrid from '../../../components/products/ProductGrid';
import SectionTitle from '../../../components/common/SectionTitle';
import { products } from '../../../data/products';
import './Kitchen.css';

const Kitchen = () => {
  const kitchenProducts = products.filter((p) => p.category === 'kitchen');

  return (
    <div className="kitchen-detail-page container">
      <ProductHero
        titlePart1="Kitchen"
        titlePart2="Faucets & Sinks"
        subtitle="Ergonomic swan neck faucets, pull-out sprayers, and stainless steel kitchen sinks."
      />
      <SectionTitle title="Kitchen Collection" subtitle="Smart installation and lifetime durability for modern kitchens" center={true} />
      <ProductGrid products={kitchenProducts} />
    </div>
  );
};

export default Kitchen;
