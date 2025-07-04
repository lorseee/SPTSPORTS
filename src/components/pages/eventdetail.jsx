import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageHeader from '../layout/PageHeader';
import '../styles/eventdetail.css';

const EventDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const eventData = location.state?.eventData;

  if (!eventData) {
    return (
      <div className="event-detail-page">
        <PageHeader title="Event Not Found" />
        <div className="event-not-found">
          <p>Event not found. Please go back to events page.</p>
          <button onClick={() => navigate('/events')}>Back to Events</button>
        </div>
      </div>
    );
  }

  const getImagePath = (folder, index) => {
    const imageNumber = index + 1;
    const extension = folder === 'sunfeast' ? 'jpg' : 'jpeg';
    return `/projects/${folder}/${imageNumber}.${extension}`;
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

  const generateImages = () => {
    const images = [];
    for (let i = 0; i < eventData.imageCount; i++) {
      images.push(getImagePath(eventData.folder, i));
    }
    return images;
  };

  const images = generateImages();

  return (
    <div className="event-detail-page">
      <PageHeader title="EVENTS" />
      
      <div className="event-detail-container">
        <div className="event-header">
          <h1 className="event-title">{eventData.title}</h1>
          <div className="event-meta">
            <span className="event-date">{eventData.date}</span>
            
          </div>
        </div>

        <div className="event-content">
          <div className="event-description">
            <h2>RUNNING COURSE ARTICLES & VIDEO TUTORIALS ABOUT RUNNING</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
              ullamcorper suscipit lobortis nisl ut aliquip ex ea.
            </p>
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
      </div>

      {/* Full-size image modal */}
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

export default EventDetail;