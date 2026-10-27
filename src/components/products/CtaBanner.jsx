import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import './CtaBanner.css';

const CtaBanner = () => {
  return (
    <section className="cta">
      <SectionTitle
        part1="Ready To Build"
        part2="Your Dream Space?"
        center={true}
      />
      <p className="cta-banner-text">
        Explore our premium collection today.
      </p>
      <Link
        to="/contact"
        className="btn-hero cta-banner-btn"
      >
        Contact Us
      </Link>
    </section>
  );
};

export default CtaBanner;
