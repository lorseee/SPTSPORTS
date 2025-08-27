import React, { useState } from 'react';
import { ChevronDown, MapPin, Trophy, Building, Gamepad2, Target, Users, Zap, Heart, Timer, Medal } from 'lucide-react';
import './list.css';
import chennaiIcon from '/icons/chennai.png';
import hyderabadIcon from '/icons/hyderabad.png';
import bengaluruIcon from '/icons/bengaluru.png';
import mumbaiIcon from '/icons/mumbai.png'; 
import goaIcon from '/icons/kochi.png'
import apIcon from '/icons/ap.png';
import lehIcon from '/icons/leh.png';
import delhiIcon from '/icons/delhi.png';
import tripuraIcon from '/icons/tripura.png';
import meghIcon from '/icons/meghalaya.png';       // If added
import sikkimIcon from '/icons/sikkim.png';
import manipurIcon from '/icons/manipur.png';
import assamIcon from '/icons/assam.png';
import mizoIcon from '/icons/mizo.png';
import agarIcon from '/icons/agar.png';
import mizoramIcon from '/icons/ahmedabad.png';     // You still need to add this
import puneIcon from '/icons/pune.png';
import kolkataIcon from '/icons/kolkata.png';
import nagpurIcon from '/icons/nagpur.png';
import cricketIcon from '/icons/cricket1.png';
import footballIcon from '/icons/football.png';
import carromIcon from '/icons/carrom.png';
import basketballIcon from '/icons/basketball.png';
import throwballIcon from '/icons/throwball.png';
import volleyballIcon from '/icons/volleyball.jpg';
import halfIcon from '/icons/halfmarathon.png';
import athIcon from '/icons/athletics.png';
import pbIcon from '/icons/pickleball.jpg'
import chessIcon from '/icons/chess.png';
import ttIcon from '/icons/tt.png';
import tennisIcon from '/icons/tennis.png';
import squashIcon from '/icons/squash.png';
import golfIcon from '/icons/golf.png';
import BadmintonIcon from '/icons/badminton.png';
import swimmingIcon from '/icons/swimming.png';

const CitySportsSection = () => {
  const [showCitiesDropdown, setShowCitiesDropdown] = useState(false);
  const [showSportsDropdown, setShowSportsDropdown] = useState(false);

  const popularCities = [
 { name: 'Bengaluru', icon: bengaluruIcon},
 { name: 'Chennai', icon: chennaiIcon },
 { name: 'Hyderabad', icon: hyderabadIcon },
 { name: 'Assam', icon: assamIcon },
 { name: 'Nagpur', icon: nagpurIcon },
 { name: 'Siliguri', icon: mizoramIcon }, // Assuming mizoramIcon is used for Ahmedabad
 { name: 'Meghalaya', icon: meghIcon },
  { name: 'Arunachal Pradesh', icon: apIcon},
  { name: 'Coimbatore', icon: puneIcon} ,
  { name: 'Manipur', icon: manipurIcon},// Assuming mumbaiIcon is used for Delhi
  { name: 'Mumbai', icon: mumbaiIcon },
  { name: 'Sikkim', icon: sikkimIcon },
  { name: 'Mizoram', icon: mizoIcon },
  { name: 'Pune', icon: puneIcon },
  { name: 'Kolkata', icon: kolkataIcon },
  { name: 'Delhi', icon: delhiIcon },
  { name: 'Goa', icon: goaIcon },
  { name: 'Tripura', icon: tripuraIcon },
  { name:'Leh', icon: lehIcon },
  { name:'Agartala', icon: agarIcon},
  
  
];

  const popularSports = [
    { name: 'Cricket', icon: cricketIcon },
    { name: 'Football', icon: footballIcon },
    { name: 'Tennis', icon: tennisIcon },
    { name: 'Half Marathon', icon: halfIcon },
    { name: 'Table Tennis', icon: ttIcon },
    { name: 'Carrom & Chess', icon: carromIcon },
    { name: 'Throwball', icon: throwballIcon },
    
    { name: 'Badminton', icon: BadmintonIcon },
    { name: 'Swimming', icon: swimmingIcon },
    { name: 'Basketball', icon: basketballIcon },
    { name: 'Squash', icon: squashIcon },
    { name: 'Golf', icon: golfIcon },
    { name: 'Athletics', icon: athIcon },
    { name: 'Volleyball', icon: volleyballIcon },
    { name: 'Pickleball', icon: pbIcon },
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