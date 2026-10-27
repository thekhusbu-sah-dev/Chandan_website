import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../common/SectionTitle';
import './ShowcaseRow.css';

const ShowcaseRow = ({ titlePart1, titlePart2, desc, img, link, buttonText, reverse }) => {
  return (
    <div className={`showcase-row ${reverse ? 'reverse' : ''}`}>
      <div className="showcase-img-wrapper">
        <img src={img} alt={`${titlePart1} ${titlePart2}`} loading="lazy" />
      </div>
      <div className="showcase-content">
        <SectionTitle part1={titlePart1} part2={titlePart2} center={false} />
        <p>{desc}</p>
        <Link to={link} className="btn-hero showcase-btn">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default ShowcaseRow;
