import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../layout/PageHeader';
import '../styles/eventdetail.css';
const GolfEvent = () => {
const navigate = useNavigate();
const [selectedIndex, setSelectedIndex] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false); 
  
const eventData = {
title: "N.A Muttanna Golf Tournament 2020",
type: "Golf Tournament",
description:  (
    <ul className="event-details-list">
      <li><span>Event Name:</span> NA Muthanna Memorial Golf Tournament</li>
      <li><span>Audience:</span> Civil Services officers of Karnataka</li>
      <li><span>Nature:</span> Annual golf tournament in memory of Sh. NA Muthanna (IAS-IPS), a keen golfer</li>
      <li><span>Association:</span> SPT Sports associated for 13 years (since 2011)</li>
      <li><span>Title Sponsor:</span> ITC</li>
    </ul>
  ),
imageCount: 17,
folder: "golf"
  };
 
  const getImagePath = (index) => {
    return `/projects/golf/${index + 1}.jpeg`;
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
      <PageHeader title="EVENTS"  backgroundImage="/imgs/bg-8.jpg"  />
      <div className="event-detail-container">
        <div className="event-header"> 
        </div>
        <div className="event-content">
          <div className="event-description">
             <h2>{eventData.title}</h2>
            <span className="event-date">{eventData.date}</span>
            <p>{eventData.description}</p>
          </div>
          {/* Golf-specific layout: Hero image + grid */}
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
        loading="lazy"
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
      {isModalOpen &&  selectedIndex !== null  && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal}>×</button>
             <button className="image-modal-prev" onClick={showPrevImage}>←</button>
            <img
              src={images[selectedIndex]}
              alt={`Full size view - ${selectedIndex + 1}`}
              className="image-modal-img"
              loading="lazy"
            />
            <button className="image-modal-next" onClick={showNextImage}>→</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GolfEvent;