import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../layout/PageHeader';
import '../styles/eventdetail.css';

const FootballEvent = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const eventData = {
    title: "Cadence 5cs Bangalore 2016",
    type: "Football Tournament",
    description: (
    <ul className="event-details-list">
      <li><span>Event Name:</span> 5 C’s Cadence</li>
      
      <li><span>Participating Companies:</span> 20 companies</li>
      <li><span>Sports Featured:</span> Cricket, Football, Badminton, Table Tennis, Throwball, Basketball, Volleyball, and a 5k Run</li>
      <li><span>Organized With:</span> Concern India</li>
      <li><span>Objective:</span> Promote healthy competition and community support</li>
    </ul>
  ),

    imageCount: 21,
    folder: "5c"
  };

  const getImagePath = (index) => `/projects/5c/${index + 1}.jpeg`;
  const images = Array.from({ length: eventData.imageCount }, (_, i) => getImagePath(i));

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
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };
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
      <PageHeader title="EVENTS" backgroundImage="/imgs/bg-8.jpg"/>

      <div className="event-detail-container">
        <div className="event-content">
          <div className="event-description">
            <h2>{eventData.title}</h2>
            <span className="event-date">{eventData.date}</span>
            <p>{eventData.description}</p>
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
                  alt={`Football Tournament - Image ${index + 1}`}
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
            onClick={() => navigate('/pages/sunfeast')}
          >
            Next Event →
          </button>
        </div>
      </div>

      {isModalOpen && selectedIndex !== null && (
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

export default FootballEvent;
