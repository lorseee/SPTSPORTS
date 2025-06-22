// components/Footer/Footer.jsx
import React, { useState } from 'react';
import { Facebook, Linkedin, Twitter, Instagram, Youtube, Phone, MapPin, Send } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-section">
            <div className="footer-logo">
              
        
              
              <img src="/imgs/logo.png" alt="SPT Sports" className="logo-image" />
            </div>
            <p className="footer-description">
              Welcome to our running community! Discover the joy of running, 
              connect with fellow enthusiasts, and unlock your full potential with 
              our expert resources and training programs.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">QUICK LINKS</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Our Event</a></li>
              <li><a href="#" className="footer-link">Latest News</a></li>
              <li><a href="#" className="footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Page Links */}
          <div className="footer-section">
            <h3 className="footer-title">ACADEMY ADDRESS</h3>
            <div className="contact-item">
                <MapPin size={45} />
                <span className="contact-value"> SPT Sports Academy,
                                                Mullur,Sarjapur Road,
                                                Bangalore-560035
                                                </span>
            
              </div>

          </div>

          {/* Newsletter */}
          <div className="footer-section office-section">
            <h3 className="footer-title">HEAD OFFICE</h3>
            <div className="contact-item">
                <MapPin size={40} />
                <span className="contact-value">10 Sports House,1st main 
                                                1st block,Koramangala,
                                                Bangalore-560034
                                                </span>
            
              </div>

            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <div>
                  <span className="contact-label">Contact us at</span>
                  <span className="contact-value">001-1234-88888</span>
                </div>
              </div>
              
              
            </div>

            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;