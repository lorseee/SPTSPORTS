import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../layout/PageHeader';
import '../styles/eventdetail.css';

const GolfEvent = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const eventData = {
    title: "N.A Muttanna Golf Tournament 2020",
    date: "Saturday, 11 January 2020",
    type: "Golf Tournament",
    description: "A prestigious golf tournament held at the beautiful N.A Muttanna Golf Course. This event brought together golf enthusiasts from across the region for a day of competitive play and networking.",
    imageCount: 5,
    folder: "golf"
  };

  const getImagePath = (index) => {
    return `/projects/golf/${index + 1}.jpeg`;
  };

  const openImageModal = (imagePath) => {
    setSelectedImage(imagePath);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const images = Array.from({ length: eventData.imageCount }, (_, i) => getImagePath(i));

  return (
    <div className="event-detail-page">
      <PageHeader title="EVENTS"  backgroundImage="/imgs/bg-8.jpg"  />
      
      <div className="event-detail-container">
        <div className="event-header">
          <h1 className="event-title">{eventData.title}</h1>
          <div className="event-meta">
            <span className="event-date">{eventData.date}</span>
           
          </div>
        </div>

        <div className="event-content">
          <div className="event-description">
            <h2>GOLF TOURNAMENT HIGHLIGHTS & MEMORIES</h2>
            <p>{eventData.description}</p>
          </div>

          {/* Golf-specific layout: Hero image + grid */}
          <div className="event-images-grid">
  {images.map((imagePath, index) => (
    <div 
      key={index} 
      className="event-image-item"
      onClick={() => openImageModal(imagePath)}
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
            onClick={() => navigate('/pages/cadence')}
          >
            Next Event →
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal}>×</button>
            <img
              src={selectedImage}
              alt="Full size view"
              className="image-modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GolfEvent;