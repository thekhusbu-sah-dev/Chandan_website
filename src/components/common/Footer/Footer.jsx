import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '../../../data/companyData';
import './Footer.css';

const Footer = () => {
  const spotlightRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!spotlightRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    spotlightRef.current.style.setProperty('--x', `${x}%`);
    spotlightRef.current.style.setProperty('--y', `${y}%`);
  };

  const handleMouseLeave = () => {
    if (!spotlightRef.current) return;
    spotlightRef.current.style.setProperty('--x', `50%`);
    spotlightRef.current.style.setProperty('--y', `50%`);
  };

  return (
    <footer
      className="wow-footer"
      id="wowFooter"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="animated-bg"></div>
      
      <div className="spotlight" id="spotlight" ref={spotlightRef}></div>

      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>

      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>
              <img
                src="/assets/Images/logo/transperant-logo.png"
                alt="Chandan Ceramics"
                className="footer-logo-img"
              />
              {companyData.name}
            </h3>
            <p>
              {companyData.name} – the ruling company for Flooring and Wall Tiles,
              sanitaryware and Faucets with PVC pipes and ceramics for the past 20 years.
            </p>
            <div className="social-links">
              {companyData.socialLinks.map((item, idx) => (
                <a key={idx} href={item.url} className="social-icon" aria-label={item.name}>
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>
                <Link to="/"><i className="fas fa-chevron-right"></i> Home</Link>
              </li>
              <li>
                <Link to="/about"><i className="fas fa-chevron-right"></i> About</Link>
              </li>
              <li>
                <Link to="/products"><i className="fas fa-chevron-right"></i> Products</Link>
              </li>
              <li>
                <Link to="/contact"><i className="fas fa-chevron-right"></i> Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li className="footer-address-item">
                {companyData.address}
              </li>
              {companyData.phones.map((phone, idx) => (
                <li key={idx}>
                  <i className="fas fa-phone-alt"></i> {phone}
                </li>
              ))}
              <li>
                <i className="fas fa-envelope"></i> {companyData.email}
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link to="/products"><i className="fas fa-chevron-right"></i> Wall & Flooring Tiles</Link>
              </li>
              <li>
                <Link to="/tiles"><i className="fas fa-chevron-right"></i> Vitrified & Digital Tiles</Link>
              </li>
              <li>
                <Link to="/faucets"><i className="fas fa-chevron-right"></i> Faucets</Link>
              </li>
              <li>
                <Link to="/shower"><i className="fas fa-chevron-right"></i> Showers</Link>
              </li>
              <li>
                <Link to="/sanitaryware"><i className="fas fa-chevron-right"></i> Sanitaryware</Link>
              </li>
              <li>
                <Link to="/pvc-pipes"><i className="fas fa-chevron-right"></i> PVC Pipes</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {companyData.name} — Serving Excellence for Over 20 Years |{' '}
            <i className="fa-regular fa-star"></i> Premium Quality Since 2004
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
