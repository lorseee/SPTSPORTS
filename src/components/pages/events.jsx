import React, { useState } from 'react';
import PageHeader from '../layout/PageHeader';
import '../styles/eventspg.css';
import { useLocation } from 'react-router-dom';

const Events = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

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
      imageCount: 5,
      type: "golf",
      folder: "golf"
    }
  ];

  const openModal = (card) => {
    setSelectedCard(card);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent body scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset'; // Restore body scroll
  };

  const nextImage = () => {
    if (selectedCard) {
      setCurrentImageIndex((prev) => 
        prev === selectedCard.imageCount - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCard) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedCard.imageCount - 1 : prev - 1
      );
    }
  };

  const getImagePath = (folder, index) => {
    const imageNumber = index + 1;
    const extension = folder === 'sunfeast' ? 'jpg' : 'jpeg';
    return `/projects/${folder}/${imageNumber}.${extension}`;
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isModalOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          closeModal();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, selectedCard]);

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    if (id) {
      const card = cardsData.find(card => String(card.id) === String(id));
      if (card) {
        openModal(card);
      }
    }
    // eslint-disable-next-line
  }, [location.search]);

    return (
      <div className="about-page"
      style={{ backgroundImage: "url('/imgs/bg-8.jpg')",
        backgroundRepeat: 'no-repeat'
       }}>
        <PageHeader 
          title="EVENTS"        
        />
      
      <div className="sports-cards-container">
        <div className="cards-grid">
          {cardsData.map((card) => (
            <div 
              key={card.id} 
              className="card"
              onClick={() => openModal(card)}
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

      {/* Image Modal */}
      {isModalOpen && selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            
            <div className="modal-header">
              <h3>{selectedCard.title}</h3>
              
            </div>

            <div className="modal-image-container">
              <button className="nav-arrow nav-arrow-left" onClick={prevImage}>
                ❮
              </button>
              
              <img
                src={getImagePath(selectedCard.folder, currentImageIndex)}
                alt={`${selectedCard.title} - Image ${currentImageIndex + 1}`}
                className="modal-image"
              />
              
            <button className="nav-arrow nav-arrow-right" onClick={nextImage}>
               ❯
              </button>

            </div>

            
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;