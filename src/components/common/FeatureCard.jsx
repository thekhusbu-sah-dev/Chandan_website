import React from 'react';

const FeatureCard = ({ icon, title, description, align = 'left' }) => {
  return (
    <div className={`unique-item ${align}`}>
      <div className="unique-icon-wrapper">
        <div className="unique-icon">
          <i className={icon}></i>
        </div>
      </div>
      <div className="unique-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
