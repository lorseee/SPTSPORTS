import React, { useState, useEffect } from 'react';
import './Testimonial.css';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jane Nguyen",
      role: "Running Club Member",
      quote: "I've Always Struggled With Staying Consistent With Exercise, But Being Part Of The Running Club Has Changed That",
      emoji: "🏃‍♂️"
    },
    {
      id: 2,
      name: "Mike Johnson",
      role: "Fitness Enthusiast",
      quote: "The Community Support Here Is Amazing. I've Never Felt More Motivated To Push My Limits And Achieve My Goals",
      emoji: "💪"
    },
    {
      id: 3,
      name: "Sarah Chen",
      role: "Marathon Runner",
      quote: "Joining This Club Was The Best Decision I Made. The Training Programs Are Excellent And The People Are Incredible",
      emoji: "🏃‍♀️"
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      role: "Weekend Warrior",
      quote: "From Couch To 5K, This Club Helped Me Transform My Life. The Coaches Are Patient And The Progress Is Real",
      emoji: "🌟"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonial-container">
      <div 
        className="testimonial-content"
        style={{
          opacity: isTransitioning ? 0 : 1,
          transform: `translateX(${isTransitioning ? '20px' : '0'})`
        }}
      >
        <div className="quote-mark">"</div>
        
        <div className="profile-section">
          <div className="profile-emoji">
            {currentTestimonial.emoji}
          </div>
          <div className="profile-name">{currentTestimonial.name}</div>
          <div className="profile-role">{currentTestimonial.role}</div>
        </div>

        <div className="testimonial-text">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
          <p className="quote-text">"{currentTestimonial.quote}"</p>
        </div>
      </div>

      <div className="navigation">
        <button className="nav-button" onClick={goToPrevious}>
          ‹
        </button>
        <button className="nav-button" onClick={goToNext}>
          ›
        </button>
      </div>

      <div className="progress-indicators">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`progress-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 300);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;