import React from 'react';
import { aboutData } from '../../../data/aboutData';
import './PillarsSection.css';

const PillarsSection = () => {
  return (
    <div className="pillars">
      {aboutData.pillars.map((pillar) => (
        <div key={pillar.id} className="pillar">
          <div className="pillar-icon">
            <i className={pillar.icon}></i>
          </div>
          <h4>{pillar.title}</h4>
          <p className="pillar-desc">
            {pillar.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PillarsSection;
