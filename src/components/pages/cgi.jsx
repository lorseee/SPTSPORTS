import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../layout/PageHeader';
import '../styles/eventdetail.css';

const CGIEvent = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const eventData = {
    title: "Intra CGI Bangalore Sports Fest 2014",
    date: "Monday, 04 August 2014",
    type: "Sports Tournament",
    description: "A comprehensive sports festival organized within CGI Bangalore, featuring multiple sporting events and activities. This intra-company tournament promoted team spirit, healthy competition, and employee engagement through various sports disciplines.",
    imageCount: 9,
    folder: "cgi"
  };

  const getImagePath = (index) => {
    return `/projects/cgi/${index + 1}.jpeg`;
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
      <PageHeader title="EVENTS" backgroundImage="/imgs/bg-8.jpg" />
      
      <div className="event-detail-container">
        <div className="event-header">
          
        </div>

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
            onClick={() => navigate('/pages/kingfisher')}
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

export default CGIEvent;