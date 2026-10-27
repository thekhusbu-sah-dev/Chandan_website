import React from 'react';
import ProductHero from '../../../components/products/ProductHero';
import ProductGrid from '../../../components/products/ProductGrid';
import SectionTitle from '../../../components/common/SectionTitle';
import { products } from '../../../data/products';
import './Bathroom.css';

const Bathroom = () => {
  const bathroomProducts = products.filter((p) => p.category === 'bathroom');

  return (
    <div className="bathroom-detail-page container">
      <ProductHero
        titlePart1="Bathroom"
        titlePart2="Accessories"
        subtitle="German-engineered thermostatic shower columns, multi-flow rain showers, and solid brass faucets."
      />
      <SectionTitle title="Bathroom Collection" subtitle="Luxurious fluidics engineered for comfort and water conservation" center={true} />
      <ProductGrid products={bathroomProducts} />
    </div>
  );
};

export default Bathroom;
