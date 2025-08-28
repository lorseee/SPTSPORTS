import React from "react";
import "./logos.css";

const Logos = () => {
  const logos = [
   "/brands/1.png", "/brands/2.png", "/brands/20.png", "/brands/28.jpg", "/brands/23.png",
    "/brands/29.png", "/brands/6.png", "/brands/25.png", "/brands/8.png", "/brands/15.png", 
    "/brands/12.png", "/brands/9.png", "/brands/11.png", "/brands/7.png", "/brands/13.jpg", 
    "/brands/16.png", "/brands/14.png", "/brands/10.png", "/brands/27.png", "/brands/18.png", 
    "/brands/26.jpg", "/brands/19.png", "/brands/21.png", "/brands/4.png", "/brands/22.png",  
    "/brands/17.png", "/brands/3.png", 
    
  ];

  return (
    <div className="logos-section">
      <h2 className="logos-heading">
        OUR PATRONS
      </h2>

      <div className="marquee-container">
        <div className="marquee-content animate-marquee">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="logo-item">
              <div className="logo-wrapper">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="logo-image"
                  loading="lazy" // Optimize loading
                />
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless looping */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="logo-item">
              <div className="logo-wrapper">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="logo-image"
                  loading="lazy" // Optimize loading
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos;