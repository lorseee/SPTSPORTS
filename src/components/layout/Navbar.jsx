// components/Navigation/Navigation.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'ABOUT US', path: '/about' }, 
    { name: 'EVENTS', path: '/events' },
    { name: 'ACHIEVEMENTS', path: '/achievements' },
    
    

    
  ];

  return (
    <nav className="main-nav">
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
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

          {/* Right Side */}
          <div className="nav-actions">
            <button className="contact-btn" onClick={() => navigate('/contact')}>CONTACT US</button>
            <button 
              className="mobile-menu-btn"
              onClick={() => navigate('/contact')}
              aria-label="Contact us"
            >
              CONTACT US
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item, index) => (
              <Link key={index} to={item.path} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
            <button className="mobile-contact-btn" onClick={() => { setIsMenuOpen(false); navigate('/contact'); }}>CONTACT US</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;