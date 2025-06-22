import React, { useState, useEffect } from 'react';
import './services.css';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState(0);
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  const benefits = [
    {
      id: 1,
      number: "01",
      title: "Be Healthy",
      description: "Improve your physical fitness and well-being through regular running.",
      position: "top-left"
    },
    {
      id: 2,
      number: "02", 
      title: "Feel Free",
      description: "Experience the freedom of running outdoors, and challenging yourself.",
      position: "bottom-left"
    },
    {
      id: 3,
      number: "03",
      title: "Be One Of Us",
      description: "Join a supportive community of like-minded runners and achieving goals together.",
      position: "top-right"
    },
    {
      id: 4,
      number: "04",
      title: "Be Strong",
      description: "Build resilience and mental toughness as you push your limits.",
      position: "bottom-right"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        if (prev < benefits.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  const handleBenefitClick = (benefit) => {
    setSelectedBenefit(selectedBenefit?.id === benefit.id ? null : benefit);
  };

  return (
    <div className="running-benefits">
      <div className="background-pattern"></div>
      
      <h1 className="main-title">SERVICES</h1>
      
      <div className="content-container">
        {/* Center Image */}
        <div className="center-image">
          <div className="image-container">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center" 
              alt="Runner in action"
              className="runner-image"
            />
            <div className="image-overlay"></div>
            <div className="connecting-arrows">
                <div className="arrow arrow-top-left">
                    <div className="arrow-line"></div>
                </div>
                <div className="arrow arrow-top-right">
                    <div className="arrow-line"></div>
                </div>
                <div className="arrow arrow-bottom-left">
                    <div className="arrow-line"></div>
                </div>
                <div className="arrow arrow-bottom-right">
                    <div className="arrow-line"></div>
                </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`benefit-item ${benefit.position} ${
                index < visibleItems ? 'visible' : ''
              } ${selectedBenefit?.id === benefit.id ? 'selected' : ''}`}
              onClick={() => handleBenefitClick(benefit)}
              style={{
                animationDelay: `${index * 0.8}s`
              }}
            >
              <div className="benefit-content">
                <div className="benefit-number">{benefit.number}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
              <div className="click-indicator">
                <div className="pulse-ring"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedBenefit && (
        <div className="detail-modal">
          <div className="modal-content">
            <button 
              className="close-btn"
              onClick={() => setSelectedBenefit(null)}
            >
              ×
            </button>
            <div className="modal-number">{selectedBenefit.number}</div>
            <h2 className="modal-title">{selectedBenefit.title}</h2>
            <p className="modal-description">{selectedBenefit.description}</p>
            <div className="modal-extra">
              <p>Click to learn more about how running can transform your life through this amazing benefit.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;