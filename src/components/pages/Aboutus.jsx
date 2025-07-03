import React, { useState } from 'react';
import PageHeader from '../layout/PageHeader';
import '../styles/about.css';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState('mission','about');

  const missionContent = {
    title: "Our Mission",
    description: "Establishing standards in the sunrise industry of sports management and attain leadership position by exceeding expectations to nature talent at grassroots level and to become a distinct provider of opportunities to the target segment",
   
    features: [
      "To explore and excel in related fields where others do not tread",
      "Conceptualisation of epic events like Corporate 5-a-side football and biggest Inter-district Kabbadi tournaments in India",
      "Having pioneered the concept of Integrated Sports Management in India, we are among the fastest growing companies in the segment. ",
      "To provide employment opportunities to ex-sportspersons."
    ]
  };

  const aboutContent = {
    title: "Our Vision",
    description: "To make accessible, opportunity and infrastructure to all sports enthusiasts and to provide an environment for achieving excellence by developing one's talent and also to become outstanding individuals through this medium.",
    features: [
      "The first private golf academy in India with 9-Hole par-3 Golf Course",
      "Pioneered the concept of Integrated Sports Management in India",
      "Tutors to golf teaching professionals through Indian Golf Teachers Federation (IGTF - an affiliate of USGTF)",
      "Continuous Platform Updates And Improvements"
    ]
  };

  const currentContent = activeSection === 'mission' ? missionContent : aboutContent;

  return (
    
    <div className="about-page"
    style={{ backgroundImage: "url('/imgs/bg-6.jpg')",
      

      
       
     }}>
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
              In 1992, my passion for sports got ignited after reading an article in a newspaper about a Delhi based gold medallist wrestler selling channa (grams) on the roads of Chandini Chowk. In my own humble fashion I began organising Summer Camps and tournament in Noida (near Delhi in 1992). By 1998 a burning desire to contribute quality sports opportunities was transformed into a profession coupled with the hope to provide employment opportunities for our sportspersons
              </p>
              <div className="quote-attribution">
                - AMIT SARAN
                Promotor-SPT SPORTS
              </div>
             
              
              
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
                className={`tab-button ${activeSection === 'mission' ? 'active' : 'inactive'}`}
                onClick={() => setActiveSection('mission')}
              >
                Our Mission
              </button>
              <button 
                className={`tab-button ${activeSection === 'about' ? 'active' : 'inactive'}`}
                onClick={() => setActiveSection('about')}
              >
                Our Vision
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