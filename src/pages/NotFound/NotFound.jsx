import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/common/SectionTitle';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <SectionTitle part1="404" part2="Page Not Found" center={true} />
      <p className="not-found-text">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="btn-hero">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
