import React, { useState } from 'react';
import PageHeader from '../layout/PageHeader';
import '../styles/about.css';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('mission');

  const missionContent = {
    title: "Our Mission",
    description: "Our objective for this project was to develop a comprehensive financial management platform that provided users with a centralized dashboard for managing their finances.",
    features: [
      "Identification Of Monthly Income",
      "Creation Of Savings And Investment Plan",
      "Management And Calculation Of Monthly Expenses",
      "Management And Calculation Of Monthly Expenses"
    ]
  };

  const aboutContent = {
    title: "Our About",
    description: "We are a team of passionate developers and financial experts dedicated to creating innovative solutions for personal finance management. Our platform combines cutting-edge technology with user-friendly design.",
    features: [
      "Expert Team Of Financial Advisors",
      "Advanced Security And Data Protection",
      "24/7 Customer Support And Assistance",
      "Continuous Platform Updates And Improvements"
    ]
  };

  const currentContent = activeSection === 'mission' ? missionContent : aboutContent;

  return (
    <div className="about-page">
      <PageHeader 
        title="About Us"        
      />
      
      {/* SPT Sports Welcome Container */}
      <div className="spt-sports-container">
        <div className="spt-content-wrapper">
          <div className="spt-text-section">
            <h2 className="spt-title">Welcome to SPT Sports</h2>
            
            <div className="spt-description">
              <p>
                Physical fitness is not only one of the most important keys to a healthy body; it is the 
                basis of dynamic and creative intellectual activity. The relationship between the 
                soundness of the body and the activities of the mind is subtle and complex. Much is 
                not yet understood.
              </p>
              
              <p>
                But we do know what the Greeks knew: that intelligence and skill can only function at 
                the peak of their capacity when the body is healthy and strong; that hardy spirits and 
                tough minds usually inhabit sound gods.
              </p>
              
              
            </div>
          </div>
          
          <div className="spt-image-section">
          
          <img src="/imgs/about-1.png" alt="SPT Banner" className="spt-image" />
  
          </div>
        </div>
      </div>
            
      <div className="about-container">
        <div className="about-content">
          {/* Image Section */}
          <div className="image-section">
            <img src="/imgs/about-2.png" alt="Financial Management" className="about-image" />
          </div>
                   
          {/* Content Section */}
          <div className="content-section">
            {/* Tab Navigation */}
            <div className="tab-navigation">
              <button 
                className={`tab-button ${activeSection === 'mission' ? 'active' : ''}`}
                onClick={() => setActiveSection('mission')}
              >
                Our Mission
              </button>
              <button 
                className={`tab-button ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => setActiveSection('about')}
              >
                Our About
              </button>
            </div>
                        
            {/* Content */}
            <div className="content-body">
              <p className="description">
                {currentContent.description}
              </p>
                            
              {/* Features List */}
              <div className="features-list">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="check-icon">
                      ✓
                    </div>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;