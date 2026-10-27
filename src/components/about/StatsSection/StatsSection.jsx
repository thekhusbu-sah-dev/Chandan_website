import React from 'react';
import AnimatedCounter from '../../common/AnimatedCounter';
import { aboutData } from '../../../data/aboutData';
import './StatsSection.css';

const StatsSection = () => {
  return (
    <div className="stats about-page-stats">
      <div className="stats-grid">
        {aboutData.stats.map((stat, idx) => (
          <AnimatedCounter key={idx} target={stat.target} label={stat.label} />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
