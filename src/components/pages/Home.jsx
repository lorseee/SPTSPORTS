import React from 'react';
import HeroSection from '../home/HeroSection';
import Info from '../home/info';
import EventsDisplay from '../home/events';
import Services from '../home/services';
import TestimonialSlider from '../home/Testimonial';
import Logos from '../home/logos';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <Info />
      <EventsDisplay />
      <Services />
      <TestimonialSlider />
      <Logos />
      {/* Additional sections can be added here */}
      
    </div>
  );
};

export default Home;