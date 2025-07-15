import React, { useState, useEffect } from 'react';
import { Play, Calendar, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';
import './hero.css';

const HeroSection = () => {
  const backgroundImages = [
    '/imgs/gallery-2.png',
    '/imgs/bg-13.jpg',
    '/imgs/bg-10.JPG',
    '/imgs/bg-11.JPG',
    '/imgs/bg-1.jpg',
    '/imgs/bg-3.jpg',
    '/imgs/bg-12.JPG',
    
    '/imgs/bg-14.jpg',
    '/imgs/bg-15.jpg',
    
    
    '/imgs/bg-6.jpg',
    '/imgs/bg-7.jpg',
    
    '/imgs/bg-9.JPG',
    
    
    
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
        <div className="hero-content">
          {/* Left Section - Text and Booking */}
          
          
          {/* Right Section - Event Card */}
      
        </div>

        {/* Image Indicators */}
        
      </div>
    </section>
  );
};

export default HeroSection;