import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'ABOUT US', path: '/about' },
    { name: 'EVENTS', path: '/events' },
    { name: 'ACHIEVEMENTS', path: '/achievements' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-content')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToFooter = () => {
    const footer = document.getElementById('footer') || document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <div className="logo">
            <Link to="/" onClick={closeMobileMenu}>
              <img src="/imgs/logo.png" alt="SPT Sports" className="logo-img" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="nav-menu">
            {navItems.map((item, index) => (
              <Link key={index} to={item.path} className="nav-link">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side - Desktop */}
          <div className="nav-actions">
            <button className="contact-btn desktop-only" onClick={scrollToFooter}>
              CONTACT US
            </button>
            
            {/* Mobile Hamburger Button */}
            <button
              className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <div className="mobile-logo">
                <img src="/imgs/logo.png" alt="SPT Sports" className="logo-img" />
              </div>
              <button
                className="close-btn"
                onClick={closeMobileMenu}
                aria-label="Close mobile menu"
              >
                ×
              </button>
            </div>
            
            <div className="mobile-menu-content">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="mobile-nav-link"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
              
              <button
                className="mobile-contact-btn"
                onClick={() => {
                  closeMobileMenu();
                  scrollToFooter();
                }}
              >
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;