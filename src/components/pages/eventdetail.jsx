import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageHeader from '../layout/PageHeader';
import '../styles/eventdetail.css';

const EventDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null); // store index instead of just image path
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
  
  const generateImages = () => {
    return Array.from({ length: eventData.imageCount }, (_, i) =>
      getImagePath(eventData.folder, i)
    );
  };

  const images = generateImages();
  
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
      <PageHeader title="EVENTS" />
      
      <div className="event-detail-container">
        <div className="event-header">
          <h1 className="events-titles">{eventData.title}</h1>
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
      </div>

      {/* Full-size image modal with navigation arrows */}
      {isModalOpen && selectedIndex !== null && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal}>×</button>
            
            {/* Previous Button */}
            <button className="image-modal-prev" onClick={showPrevImage}>←</button>

            <img
              src={images[selectedIndex]}
              alt={`Full size view - ${selectedIndex + 1}`}
              className="image-modal-img"
            />

            {/* Next Button */}
            <button className="image-modal-next" onClick={showNextImage}>→</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
