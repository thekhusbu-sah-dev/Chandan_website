import React, { useState, useEffect } from 'react';
import { companyData } from '../../data/companyData';

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 48) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`top-bar ${isScrolled ? 'hide' : ''}`} id="topBar">
      <span>
        <i className="fas fa-phone-alt"></i>
        {companyData.phones[0]}
      </span>

      <span>
        <i className="fas fa-envelope"></i>
        {companyData.email}
      </span>
    </div>
  );
};

export default TopBar;
