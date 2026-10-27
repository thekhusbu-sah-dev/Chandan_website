import React from 'react';
import { aboutData } from '../../../data/aboutData';
import SectionTitle from '../../common/SectionTitle';
import './ValueSpecs.css';

const ValueSpecs = () => {
  return (
    <div className="passion-section">
      <SectionTitle part1="Core Values" part2="That Define Us" center={true} />

      <div className="final-quote">
        <p>{aboutData.quote}</p>
      </div>

      <div className="passion-grid">
        {aboutData.passionCards.map((card) => (
          <div key={card.id} className="passion-card">
            <div className="passion-icon">
              {card.icons.map((ic, i) => (
                <i key={i} className={ic}></i>
              ))}
            </div>

            {card.title && <h3 className="passion-card-title">{card.title}</h3>}
            {card.description && (
              <p className="passion-card-desc">
                {card.description}
              </p>
            )}

            <ul className="spec-list">
              {card.specs.map((s, idx) => (
                <li key={idx}>
                  <strong>{s.label}: </strong>
                  <span>{s.detail}</span>
                </li>
              ))}
            </ul>

            {card.badge && (
              <div className="tool-badge">
                <i className="fa-regular fa-circle-check"></i> {card.badge}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValueSpecs;
