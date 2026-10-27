import React from 'react';
import ProductHero from '../../../components/products/ProductHero';
import ProductGrid from '../../../components/products/ProductGrid';
import SectionTitle from '../../../components/common/SectionTitle';
import { products } from '../../../data/products';
import './Tiles.css';

const Tiles = () => {
  const tileProducts = products.filter((p) => p.category === 'tiles');

  return (
    <div className="tiles-detail-page container">
      <ProductHero
        titlePart1="Wall & Floor"
        titlePart2="Tiles"
        subtitle="Explore our range of durable, designer glazed & vitrified tiles."
      />
      <SectionTitle title="Tiles Collection" subtitle="Hand-inspected tiles for luxury interiors" center={true} />
      <ProductGrid products={tileProducts} />
    </div>
  );
};

export default Tiles;
