import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, subtitle, part1, part2, center = true, className = '' }) => {
  const p1 = part1 || (title ? title.split(' ')[0] : '');
  const p2 = part2 || (title ? title.split(' ').slice(1).join(' ') : '');

  return (
    <div className={`section-header ${center ? 'center-title' : ''} ${className}`}>
      <h2>
        {p1} {p2 && <span>{p2}</span>}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
