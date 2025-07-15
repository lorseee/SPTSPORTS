import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../layout/PageHeader';
import '../styles/eventdetail.css';

const KingfisherEvent = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const eventData = {
    title: "Kingfisher Corporate 5's Tournament",
    date: "Thursday, 09 May 2013",
    type: "Corporate Tournament",
    description: "An exciting corporate 5-a-side tournament sponsored by Kingfisher. This event brought together teams from various companies for an intense day of football competition, fostering corporate networking and sportsmanship in a professional yet fun environment.",
    imageCount: 8,
    folder: "kingfisher"
  };

  const getImagePath = (index) => {
    return `/projects/kingfisher/${index + 1}.jpeg`;
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
            onClick={() => navigate('/pages/jsw-marathon')}
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

export default KingfisherEvent;