import React from 'react';
import { Link } from 'react-router-dom';
import { aboutData } from '../../../data/aboutData';
import './AboutPreview.css';

const AboutPreview = () => {
  return (
    <section className="about-preview">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-box">
            <img src={aboutData.personImage} alt="About Chandan Ceramics" />
            <div className="img-badge">{aboutData.badgeText}</div>
          </div>
          <div className="about-text">
            <h2 className="preview-heading">
              <span>{aboutData.tagline}</span>
            </h2>
            <p className="preview-desc">{aboutData.description}</p>
            <Link to="/about" className="btn-hero">
              Read More About Us <i className="fa-solid fa-arrow-right btn-icon"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
