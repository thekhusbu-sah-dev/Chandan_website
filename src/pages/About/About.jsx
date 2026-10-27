import React from 'react';
import AboutHero from '../../components/about/AboutHero';
import AboutIntro from '../../components/about/AboutIntro';
import RoofingSection from '../../components/about/RoofingSection';
import PillarsSection from '../../components/about/PillarsSection';
import StatsSection from '../../components/about/StatsSection';
import ValueSpecs from '../../components/about/ValueSpecs';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <section className="premium-about">
        <AboutIntro />
        <RoofingSection />
        <PillarsSection />
        <StatsSection />
        <ValueSpecs />
      </section>
    </div>
  );
};

export default About;
