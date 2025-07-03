import React from 'react';
import { Calendar, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import './events.css';

const EventsDisplay = () => {
  const events = [
    {
      id: 1,
      title: "N.A Muttanna 2020",
      date: "Saturday, 11 January 2020",
      
      image: "/projects/golf/1.jpeg",
      description: "Annual golf tournament featuring top players and celebrating excellence in the sport."
    },
    {
      id: 2,
      title: "Cadence 5cs 2016",
      date: "Friday, 5 February 2016",
    
      image: "/projects/5c/1.jpeg",
      description: "Corporate futsal championship bringing together teams from various organizations."
    },
    {
      id: 3,
      title: "Sunfeast Cup 2019",
      date: "Monday, 19 August 2019",
      
      image: "/projects/sunfeast/1.jpg",
      description: "Multi-city tournament featuring teams from Ladakh, Meghalaya, Arunachal Pradesh, and more."
    }
  ];

  return (
    <div className="events-container">
      {/* Header with title and View All button */}
      <div className="events-header">
        <h1 className="events-title">OUR EVENTS</h1>
        <Link to="/events" className="view-all-button">
          View All
        </Link>
      </div>

      {/* Events Grid */}
      <div className="events-grid">
        {events.map((event) => (
          <Link key={event.id} to={`/events?id=${event.id}`} className="event-card-link">
            <div className="event-card">
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsDisplay;