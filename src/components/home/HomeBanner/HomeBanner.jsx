import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBanner.css';

const HomeBanner = ({
  title = "Transform Your Space With Luxury Ceramics",
  subtitle = "Experience Italian craftsmanship & German fluidics technology in your home.",
  buttonText = "Contact Our Experts",
  link = "/contact"
}) => {
  return (
    <section className="cta home-banner-cta">
      <div className="container">
        <h2 className="banner-title">{title}</h2>
        <p className="banner-subtitle">{subtitle}</p>
        <Link to={link} className="btn-hero banner-btn">
          {buttonText} <i className="fa-solid fa-arrow-right btn-icon"></i>
        </Link>
      </div>
    </section>
  );
};

export default HomeBanner;
