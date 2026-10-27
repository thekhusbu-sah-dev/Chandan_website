import React from 'react';
import { whyChooseUsHomeData } from '../../data/homeData';
import SplitHeading from '../common/SplitHeading';
import FeatureCard from '../common/FeatureCard';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-unique">
      <div className="container">
        <SplitHeading part1="Why Choose" part2="Us" center={true} />

        <div className="unique-grid">
          {whyChooseUsHomeData.map((item) => (
            <FeatureCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              align={item.align}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
