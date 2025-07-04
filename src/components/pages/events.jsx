import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../layout/PageHeader';
import '../styles/eventspg.css';

const Events = () => {
  const navigate = useNavigate();

  const cardsData = [
    {
      id: 1,
      image: "/projects/golf/1.jpeg",
      title: "N.A Muttanna 2020",
      date: "Saturday, 11 January 2020",
      imageCount: 5,
      type: "golf",
      folder: "golf"
    },
    {
      id: 2,
      image: "/projects/5c/1.jpeg",
      date: "Friday, 5 February 2016",
      title: "Cadence 5cs Bangalore 2016",
      imageCount: 7,
      type: "football",
      folder: "5c"
    },
    {
      id: 3,
      image: "/projects/sunfeast/1.jpg",
      date: "Monday, 19 August 2019",
      title: "Sunfeast Cup",
      imageCount: 10,
      type: "tournament",
      folder: "sunfeast"
    },
    {
      id: 4,
      image: "/projects/cgi/1.jpeg",
      date: "Monday, 04 August 2014",
      title: "Intra CGI Bangalore Sports Fest 2014",
      imageCount: 9,
      type: "tournament",
      folder: "cgi"
    },
    {
      id: 5,
      image: "/projects/kingfisher/1.jpeg",
      date: "Thursday, 09 May 2013",
      title: "Kingfisher Corporate 5's Tournament",
      imageCount: 8,
      type: "tournament",
      folder: "kingfisher"
    },
    {
      id: 6,
      image: "/projects/golf/2.jpeg",
      title: "JSW Marathon",
      date: "Date not specified",
      imageCount: 5,
      type: "marathon",
      folder: "golf" // Note: This might need to be changed to "jsw" if images are in a different folder
    }
  ];

  const handleCardClick = (card) => {
    // Define specific routes for each event
    const eventRoutes = {
      1: '/pages/golf',           // N.A Muttanna 2020
      2: '/pages/cadence',            // Cadence 5cs Bangalore 2016
      3: '/pages/sunfeast',       // Sunfeast Cup
      4: '/pages/cgi',            // Intra CGI Bangalore Sports Fest 2014
      5: '/pages/kingfisher',     // Kingfisher Corporate 5's Tournament
      6: '/pages/jsw-marathon'    // JSW Marathon
    };

    const route = eventRoutes[card.id] || `/events/${card.folder}`;
    navigate(route, { state: { eventData: card } });
  };

  return (
    <div className="about-page"
      style={{
        backgroundImage: "url('/imgs/bg-8.jpg')",
        backgroundRepeat: 'no-repeat'
      }}>
      <PageHeader title="EVENTS" />
      
      <div className="sports-cards-container">
        <div className="cards-grid">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="card"
              onClick={() => handleCardClick(card)}
            >
              <div className="card-image-container">
                <img
                  src={card.image}
                  alt={card.title}
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <div className="card-title">{card.title}</div>
                <div className="card-date">{card.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;