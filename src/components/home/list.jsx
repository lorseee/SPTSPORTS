import React, { useState } from 'react';
import { ChevronDown, MapPin, Trophy, Building, Gamepad2, Target, Users, Zap, Heart, Timer, Medal } from 'lucide-react';
import './list.css';
import chennaiIcon from '/icons/chennai.png';
import hyderabadIcon from '/icons/hyderabad.png';
import bengaluruIcon from '/icons/bengaluru.png';
import mumbaiIcon from '/icons/delhi.png';       // If added
import sikkimIcon from '/icons/sikkim.png';
import assamIcon from '/icons/assam.png';
import mizoramIcon from '/icons/ahmedabad.png';     // You still need to add this
import puneIcon from '/icons/pune.png';
import kolkataIcon from '/icons/kolkata.png';
import nagpurIcon from '/icons/nagpur.png';
import cricketIcon from '/icons/cricket.png';
import footballIcon from '/icons/football.png';
import tennisIcon from '/icons/tennis.png';
import golfIcon from '/icons/golf.jpg';
import BadmintonIcon from '/icons/badminton.png';
import swimmingIcon from '/icons/swimming.png';

const CitySportsSection = () => {
  const [showCitiesDropdown, setShowCitiesDropdown] = useState(false);
  const [showSportsDropdown, setShowSportsDropdown] = useState(false);

  const popularCities = [
 { name: 'Bengaluru', icon: kolkataIcon},
  { name: 'Chennai', icon: chennaiIcon },
  { name: 'Hyderabad', icon: hyderabadIcon },
  { name: 'Assam', icon: assamIcon },
    { name: 'Nagpur', icon: nagpurIcon },
    { name: 'Siligudi', icon: mizoramIcon }, // Assuming mizoramIcon is used for Ahmedabad
    { name: 'Meghalaya', icon: mumbaiIcon },
  { name: 'Arunachal Pradesh', icon: chennaiIcon},
  { name: 'Coimbatore', icon: puneIcon} ,
  { name: 'Manipur', icon: assamIcon},// Assuming mumbaiIcon is used for Delhi
  { name: 'Mumbai', icon: mumbaiIcon },
  { name: 'Sikkim', icon: sikkimIcon },
  { name: 'Mizoram', icon: mizoramIcon },
  { name: 'Pune', icon: puneIcon },
  { name: 'Kolkata', icon: kolkataIcon },
  
];

  const popularSports = [
    { name: 'Cricket', icon: cricketIcon },
    { name: 'Football', icon: footballIcon },
    { name: 'Tennis', icon: tennisIcon },
    { name: 'Half Marathon', icon: Timer },
    { name: 'Table Tennis', icon: tennisIcon },
    { name: 'Carrom', icon: Gamepad2 },
    { name: 'Throwball', icon: Medal },
    { name: 'Chess', icon: Gamepad2 },
    { name: 'Badminton', icon: BadmintonIcon },
    { name: 'Swimming', icon: Medal },
    { name: 'Basketball', icon: footballIcon },
    { name: 'Squash', icon: tennisIcon },
    { name: 'Golf', icon: golfIcon },
    { name: 'Athletics', icon: Medal },
    { name: 'Volleyball', icon: footballIcon }
  ];

 

 

  return (
    <div className="city-sports-container">
      {/* Left Section - Cities */}
      <div className="section">
        <div className="section-header">
          <MapPin className="section-icon" />
          <h2>CITIES COVERED</h2>
        </div>
        
        <div className="grid">
          {popularCities.map((city, index) => (
            <div key={index} className="grid-item">
                {typeof city.icon === 'string' ? (
      <img src={city.icon} alt={city.name} className="item-icon" />
    ) : (
      <city.icon className="item-icon" />
    )}
              
              <span className="item-name">{city.name}</span>
            </div>
          ))}
        </div>

    
      </div>

      {/* Right Section - Sports */}
      <div className="section">
        <div className="section-header">
          <Trophy className="section-icon" />
          <h2>SPORTS COVERED</h2>
        </div>
        
        <div className="grid">
          {popularSports.map((sport, index) => (
  <div key={index} className="grid-item">
    {typeof sport.icon === 'string' ? (
      <img src={sport.icon} alt={sport.name} className="item-icon" />
    ) : (
      <sport.icon className="item-icon" />
    )}
    <span className="item-name">{sport.name}</span>
  </div>
))}
        </div>

      
      </div>
    </div>
  );
};

export default CitySportsSection;