import React, { useState, useEffect } from 'react';
import './Testimonial.css';

const TestimonialSlider = () => {

  const testimonials = [
  {
    id: 1,
    name: "Mr. Mahi Vardhan",
    role: "HR Senior Specialist, CGI",
    quote: "Firstly, would like to take this opportunity to thank you for your service offered for CGI Bangalore Sports Fest 2016. This is the 5th time CGI Bangalore is working with your team and needless to say, again the quality of service offered was top notch.",
    image: "/brands/CGI-1.jpg" // replace with your actual image path
  },
  {
    id: 2,
    name: "Mr. Rajith Narayanan",
    role: "Novozymes",
    quote: "Thank you for all arrangements. We will hold more such events in future.",
    image: "/brands/novo.jpg"
  },
  {
    id: 3,
    name: "Mr Chaitanya Chaudhary",
    role: "Team Lead, Accenture",
    quote: "Thank you for the great support, good arrangement and coordination in past 2 weeks. We are very happy with the service and support from your team and once again thank you for making the event a success. Looking forward for a great support like this time in future.",
    image: "/brands/acc.jpg"
  },
  {
    id: 4,
    name: "Mr. Cephas Patil",
    role: "Airbus",
    quote: "We enjoyed the facility and the arrangements extended towards us during the event. We look forward to conduct other events at SPT Sports in future.",
    image: "/brands/airbus.jpg"
  },
  {
    id: 5,
    name: "Mr. Ravindra Birje Pune",
    role: "Institute of Sports Science and Technology",
    quote: "Thanks for the support to our Pune team which visited for (All India) football tournament...Everybody enjoyed the well organized tournament on 5-6 July 2014...This has happened due to your hard work, dedication and polite cooperation.",
    image: "/brands/iisc.jpg"
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
    }, 8000);

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
        
        <div className="profile-section">
          <div className="profile-emoji">
  <img src={currentTestimonial.image} alt={currentTestimonial.name} />
</div>

          <div className="profile-name">{currentTestimonial.name}</div>
          <div className="profile-role">{currentTestimonial.role}</div>
        </div>

        <div className="testimonial-text">
          
          <p className="quote-text">"{currentTestimonial.quote}"</p>
        </div>
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
              }, 600);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;