import React from 'react';
import { Link } from 'react-router-dom';
import { aboutData } from '../../../data/aboutData';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="hero-cinematic">
      <div className="hero-content-left">
        <div className="hero-badge">
          <i className="fa-regular fa-gem"></i> {aboutData.heroBadge}
        </div>
        <h1 className="hero-title">
          {aboutData.titlePart1} <span>{aboutData.titlePart2}</span>
        </h1>
        <p className="hero-description">
          {aboutData.description}
        </p>
        <Link to="/contact" className="btn-hero">
          Get in Touch <i className="fa-solid fa-arrow-right btn-icon"></i>
        </Link>
      </div>

      <div className="hero-image-right">
        <div className="image-3d-card" id="tiltCard">
          <video autoPlay muted loop playsInline>
            <source src={aboutData.videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
