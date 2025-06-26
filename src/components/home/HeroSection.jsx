import React, { useState, useEffect } from 'react';
import { Play, Calendar, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';
import './hero.css';

const HeroSection = () => {
  const backgroundImages = [
    '/imgs/logo.png',
    '/imgs/gallery-1.png',
    '/imgs/gallery-2.png',
    '/imgs/bg.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % backgroundImages.length
    );
  };

  return (
    <section className="hero-section">
      {/* Fixed Dynamic Background */}
      <div className="hero-background-carousel">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`hero-background-slide ${
              index === currentImageIndex ? 'active' : ''
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>
      
      <div className="container">
        {/* Navigation Arrows */}
        <div className="nav-arrows">
          <button
            onClick={goToPrevious}
            className="nav-arrow prev"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="nav-arrow next"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="hero-content">
          {/* Left Section - Text and Booking */}
          <div className="hero-text">
            <h1 className="hero-title">
              WELCOME TO  <span className="hero-title-highlight">
                <br/>SPT SPORTS</span>
            </h1>
            
            <p className="hero-description">
              The platform that turns aspirations into accomplishments. Join now and
              unleash your potential in the world of fitness and wellness.
            </p>
            
            <button className="join-btn">
              <span>BOOK A GROUND NOW</span>
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Right Section - Event Card */}
      
        </div>

        {/* Image Indicators */}
        
      </div>
    </section>
  );
};

export default HeroSection;