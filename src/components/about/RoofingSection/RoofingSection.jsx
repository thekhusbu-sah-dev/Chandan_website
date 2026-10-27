import React from 'react';
import { aboutData } from '../../../data/aboutData';
import './RoofingSection.css';

const RoofingSection = () => {
  return (
    <div className="roofing-section">
      <h2 className="roofing-heading">
        {aboutData.roofingTitle}
      </h2>
      <p className="roofing-desc">
        {aboutData.roofingSub}
      </p>
      <div className="roofing-badges">
        {aboutData.roofingBadges.map((b, idx) => (
          <div key={idx} className="roofing-badge">
            <i className={b.icon}></i> {b.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoofingSection;
