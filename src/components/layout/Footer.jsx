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
            SPT Sports is a leading sports management company with a nationwide presence. We promote sports through high-quality events, our own academies, and infrastructure development. Known for our professionalism and efficiency.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/sptsports/?ref=embed_page#" className="social-icon" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              
              <a href="https://www.instagram.com/sptsports.in?igsh=b2dzY3h4dW40b3cz" className="social-icon" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="mailto:frontoffice@sptindia.com" className="social-icon">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Academy Address */}
          <div className="footer-section">
            <h3 className="footer-title">Academy Address</h3>
            <div className="contact-item">
              <MapPin size={24} />
              <span className="contact-value">Banana Sports,
Mullur, Sarjapur Road,
Bangalore - 560035</span>
            </div>
          </div>

          {/* Head Office */}
          <div className="footer-section office-section">
            <h3 className="footer-title">Head Office</h3>
            <div className="contact-item">
              <MapPin size={24} />
              <span className="contact-value">10 Sports House, 1st main
1st block, Koramangala,
Bangalore - 560034</span>
            </div>

            <div className="contact-item">
              <Phone size={18} />
              <div>
                <span className="contact-label">Contact us at</span>
                <span className="contact-value">81470 72726</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;