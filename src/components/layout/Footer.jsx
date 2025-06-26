// components/Footer/Footer.jsx
import React from 'react';
import { Facebook, Linkedin, Mail, Instagram, Phone, MapPin } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
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
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Academy Address */}
          <div className="footer-section">
            <h3 className="footer-title">Academy Address</h3>
            <div className="contact-item">
              <MapPin size={24} />
              <span className="contact-value">SPT Sports Academy,
Mullur, Sarjapur Road,
Bangalore-560035</span>
            </div>
          </div>

          {/* Head Office */}
          <div className="footer-section office-section">
            <h3 className="footer-title">Head Office</h3>
            <div className="contact-item">
              <MapPin size={24} />
              <span className="contact-value">10 Sports House, 1st main
1st block, Koramangala,
Bangalore-560034</span>
            </div>

            <div className="contact-item">
              <Phone size={18} />
              <div>
                <span className="contact-label">Contact us at</span>
                <span className="contact-value">001-1234-88888</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;