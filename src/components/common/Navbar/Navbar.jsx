import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    document.body.classList.remove('menu-open');
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
      return next;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    document.body.classList.remove('menu-open');
  };

  const toggleDropdown = (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setIsDropdownOpen((prev) => !prev);
    }
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`} id="mainHeader">
      <div className="logo">
        <Link to="/">
          <img
            src="/assets/Images/logo/transperant-logo.png"
            alt="Chandan Ceramics"
          />
        </Link>
      </div>

      <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`} id="navbar">
        <div className="mobile-close-btn" id="mobileCloseBtn" onClick={closeMobileMenu}>
          <i className="fas fa-times"></i>
        </div>

        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>

        <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`} id="mainDropdown">
          <Link
            to="/products"
            className={`dropdown-toggle ${location.pathname.startsWith('/products') ? 'active' : ''}`}
            onClick={toggleDropdown}
          >
            PRODUCTS
            <i className="fas fa-chevron-down"></i>
          </Link>

          <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} id="dropdownMenu">
            <Link to="/products/tiles" onClick={closeMobileMenu}>Tiles</Link>
            <Link to="/products/bathroom" onClick={closeMobileMenu}>Bathroom</Link>
            <Link to="/products/kitchen" onClick={closeMobileMenu}>Kitchen</Link>
            <Link to="/products/sanitary" onClick={closeMobileMenu}>Sanitaryware</Link>
          </div>
        </div>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          CONTACT US
        </NavLink>

        <div className="toggle-switch" id="themeToggle" onClick={toggleTheme} title="Toggle Theme">
          <div className="toggle-circle" id="themeIcon">
            {isDarkMode ? '🌙' : '☀️'}
          </div>
        </div>
      </nav>

      <div className="menu-toggle" id="menuToggle" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
