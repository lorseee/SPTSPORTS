import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../layout/PageHeader';
import '../styles/eventdetail.css';

const CGIEvent = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const eventData = {
    title: "Intra CGI Bangalore Sports Fest 2014",
    
    type: "Sports Tournament",
    description:(
           <ul className="event-details-list">
    <li><span>Event Name:</span> CGI Sports Tournament</li>
    <li><span>Exclusivity & Objective:</span> Organized exclusively for CGI employees to foster team spirit and engagement throughout the year</li>
    <li><span>Sports Featured:</span> Cricket, Football, Badminton, Table Tennis, and more</li>
    <li><span>Participants:</span> 1,000+ employees</li>
    <li><span>Frequency:</span> Annual event</li>
  </ul>
    ),
    imageCount: 9,
    folder: "cgi"
  };

  const getImagePath = (index) => {
    return `/projects/cgi/${index + 1}.jpeg`;
  };

  const openImageModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
    document.body.style.overflow = 'unset';
  };
  const showNextImage = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const showPrevImage = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };
   const images = Array.from({ length: eventData.imageCount }, (_, i) => getImagePath(i));
  // Keyboard shortcuts for modal navigation
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      } else if (e.key === 'Escape') {
        closeImageModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, images.length]);
 

  return (
    <div className="event-detail-page">
      <PageHeader title="EVENTS" backgroundImage="/imgs/bg-8.jpg" />
      
      <div className="event-detail-container">
        <div className="event-header">
          
        </div>

        <div className="event-content">
          <div className="event-description">
             <h2>{eventData.title}</h2>
            <span className="event-date">{eventData.date}</span>
            <div>{eventData.description}</div>
          </div>

          <div className="event-images-grid">
            {images.map((imagePath, index) => (
              <div 
                key={index} 
                className="event-image-item"
                onClick={() => openImageModal(index)}
              >
                <img
                  src={imagePath}
                  alt={`${eventData.title} - Image ${index + 1}`}
                  className="event-image"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="back-button-container">
          <button 
            className="back-button"
            onClick={() => navigate('/events')}
          >
            ← Back to Events
          </button>
        </div>
        <div className="next-button-container">
          <button 
            className="next-button"
            onClick={() => navigate('/pages/kingfisher')}
          >
            Next Event →
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen &&  selectedIndex !== null  && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal}>×</button>
    
             <button className="image-modal-prev" onClick={showPrevImage}>←</button>
            <img
              src={images[selectedIndex]}
              alt={`Full size view - ${selectedIndex + 1}`}
              className="image-modal-img"
            />
            <button className="image-modal-next" onClick={showNextImage}>→</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CGIEvent;