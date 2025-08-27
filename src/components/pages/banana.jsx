import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../layout/PageHeader';
import '../styles/eventdetail.css';

const BananaEvent = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null); // store only modal image

  const eventData = {
    title: "Banana Sports Pickleball Open",
    type: "Corporate Tournament",
    description: (
    <ul className="event-details-list">
      <li><span>Event Name:</span> The Banana Sports Pickleball Tournament 1.0</li>
      <li><span>Organizers:</span> SPT Sports & Pi-play</li>
      <li><span>Categories:</span> Open Singles, Beginners Doubles, Intermediate Doubles</li>
      <li><span>Participants:</span> ~16 individuals & 16+ teams</li>
      <li><span>Sponsors:</span> Hello Tempayy, Grainie, Mossant Craft Kombucha, Nuvie</li>
    </ul>
  ),
    imageCount: 7,
    folder: "banana"
  };
   
  // Use same files for grid (scaled visually)
  const getImagePath = (index) => {
    return `/projects/banana/${index + 1}.png`;
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
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
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
            onClick={() => navigate('/pages/kabaddi')}
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

export default BananaEvent;