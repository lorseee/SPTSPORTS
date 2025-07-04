import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../layout/PageHeader';
import '../styles/eventdetail.css';

const FootballEvent = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const eventData = {
    title: "Cadence 5cs Bangalore 2016",
    date: "Friday, 5 February 2016",
    type: "Football Tournament",
    description: "An exciting 5-a-side football tournament featuring teams from various tech companies in Bangalore. The event showcased incredible teamwork, skill, and sportsmanship.",
    imageCount: 7,
    folder: "5c"
  };

  const getImagePath = (index) => {
    return `/projects/5c/${index + 1}.jpeg`;
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
      <PageHeader title="EVENTS" backgroundImage="/imgs/bg-8.jpg"/>
      
      <div className="event-detail-container">
        <div className="event-header">
          <h1 className="event-title">{eventData.title}</h1>
          <div className="event-meta">
            <span className="event-date">{eventData.date}</span>
            
          </div>
        </div>

        <div className="event-content">
          <div className="event-description">
            <h2>FOOTBALL TOURNAMENT HIGHLIGHTS & ACTION SHOTS</h2>
            <p>{eventData.description}</p>
          </div>

          {/* Football-specific layout: Masonry grid */}
          
          <div className="event-images-grid">
             {images.map((imagePath, index) => (
               <div
                 key={index}
                 className="event-image-item"
                 onClick={() => openImageModal(imagePath)}
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

export default FootballEvent;