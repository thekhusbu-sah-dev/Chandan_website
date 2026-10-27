import React from 'react';
import ProductHero from '../../components/products/ProductHero';
import ProductGrid from '../../components/products/ProductGrid';
import ProductCategoriesGrid from '../../components/products/ProductCategoriesGrid';
import ShowcaseRow from '../../components/products/ShowcaseRow';
import CtaBanner from '../../components/products/CtaBanner';
import AnimatedCounter from '../../components/common/AnimatedCounter';
import FeatureCard from '../../components/common/FeatureCard';
import SectionTitle from '../../components/common/SectionTitle';
import { products } from '../../data/products';
import { productsOverviewData } from '../../data/productData';
import './Products.css';

const Products = () => {
  return (
    <div className="products-page">
      <ProductHero
        titlePart1={productsOverviewData.heroTitlePart1}
        titlePart2={productsOverviewData.heroTitlePart2}
        subtitle={productsOverviewData.heroSubtitle}
      />

      <ProductCategoriesGrid />

      <section className="products-showcase-section">
        <div className="container">
          <SectionTitle title="Our Featured Collection" subtitle="Explore high-quality ceramic tiles, sanitaryware, and bathroom systems" center={true} />
          <ProductGrid products={products} />
        </div>
      </section>

      <section className="showcase">
        <div className="container">
          {productsOverviewData.showcaseRows.map((row) => (
            <ShowcaseRow
              key={row.id}
              titlePart1={row.titlePart1}
              titlePart2={row.titlePart2}
              desc={row.desc}
              img={row.img}
              link={row.link}
              buttonText={row.buttonText}
              reverse={row.reverse}
            />
          ))}
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {productsOverviewData.stats.map((stat, idx) => (
              <AnimatedCounter key={idx} target={stat.target} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="why-us why-us-section">
        <div className="container">
          <SectionTitle part1="Why Choose" part2="Us" center={true} />
          <div className="unique-grid">
            {productsOverviewData.whyUs.map((item, idx) => (
              <FeatureCard
                key={idx}
                icon={item.icon}
                title={item.title}
                description={item.desc}
                align={idx % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};

export default Products;
