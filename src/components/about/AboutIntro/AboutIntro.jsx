import React from 'react';
import { aboutData } from '../../../data/aboutData';
import './AboutIntro.css';

const AboutIntro = () => {
  return (
    <div className="about-grid">
      <div className="about-img-box">
        <img src={aboutData.personImage} alt="About Chandan Ceramics" />
        <div className="img-badge">{aboutData.badgeText}</div>
      </div>
      <div className="about-text">
        <h2 className="intro-heading">
          <span>{aboutData.tagline}</span>
        </h2>
        {aboutData.introParagraphs.map((p, idx) => (
          <p key={idx} className="intro-paragraph">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutIntro;
