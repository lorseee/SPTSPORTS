import React from 'react';
import { Calendar, Camera } from 'lucide-react';
import './events.css';

const EventsDisplay = () => {
  const events = [
    {
      id: 1,
      title: "N.A Muttanna 2020",
      date: "Saturday, 11 January 2020",
      
      image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=200&h=200&fit=crop&crop=center",
      description: "Annual golf tournament featuring top players and celebrating excellence in the sport."
    },
    {
      id: 2,
      title: "SPT Corporate Fustal 2019",
      date: "Saturday, 31 August 2019",
    
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop&crop=center",
      description: "Corporate futsal championship bringing together teams from various organizations."
    },
    {
      id: 3,
      title: "Sunfeast Cup 2019",
      date: "Monday, 19 August 2019",
      
      image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=200&h=200&fit=crop&crop=center",
      description: "Multi-city tournament featuring teams from Ladakh, Meghalaya, Arunachal Pradesh, and more."
    }
  ];

  return (
    <div className="events-container">
      {/* Header with title and View All button */}
      <div className="events-header">
        <h1 className="events-title">Our Events</h1>
        <button className="view-all-button">
          View All
        </button>
      </div>

      {/* Events Grid */}
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            {/* Event Image - Top section */}
            <div className="event-image-container">
              <img 
                src={event.image} 
                alt={event.title}
                className="event-image"
              />
            </div>
            
            {/* Content Section - Bottom section */}
            <div className="event-content">
              {/* Title */}
              <h2 className="event-title">
                {event.title}
              </h2>
              
              {/* Date */}
              <div className="event-meta event-date">
                <Calendar className="event-meta-icon" />
                <span className="event-meta-text">{event.date}</span>
              </div>
              
              {/* Images count */}
              
              
              {/* Description */}
              <p className="event-description">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsDisplay;