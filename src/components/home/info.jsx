import React from 'react';
import { useNavigate } from 'react-router-dom';
import './info.css';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-image">
          <img 
            src= "./imgs/info1.png"
            alt="Youth football team celebrating"
            className="team-image"
          />
        </div>
        <div className="about-us-content">
          
          <h1 className="main-heading">
            PIONEERS IN SPORTS<br />
            MANAGEMENT<br />
            SINCE 1998
          </h1>
          <p className="description">
            SPT Sports is a leading sports management company with a nationwide presence. 
            We promote sports through high-quality events, our own academies, and 
            infrastructure development. Known for our professionalism and efficiency, we 
            organize corporate tournaments across cricket, football, tennis, throwball, and 
            more.
          </p>
          <button 
          className="cta-button"
          onClick={() => navigate('/about')} 
          >
            FIND OUT MORE
            </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;