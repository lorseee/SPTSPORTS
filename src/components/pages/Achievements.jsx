import React, { useState } from 'react';
import PageHeader from '../layout/PageHeader';
import '../styles/achievements.css';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const Achievements = () => {
  const images = [
    {
      id: 1,
      title: "Mr. Amit Saran with Kapil Dev",
      url: '/imgs/ach-1.jpg',
      thumbnail: '/imgs/ach-1.jpg'
    },
    {
      id: 2,
      title: 'Supermax 8s Winning team with General Manager (State bank of India), Charu Sharma ( Indian commentator)',
      url: '/imgs/ach-2.jpg',
      thumbnail: '/imgs/ach-2.jpg'
    },
    {
      id: 3,
      title: 'Mr. Amit Saran with Milkha Singh(16-04-2014)',
      url: '/imgs/ach-3.png',
      thumbnail: '/imgs/ach-3.png'
    },
    {
      id: 4,
      title: 'Certification by All India Football Federation',
      url: '/imgs/ach-4.jpg',
      thumbnail: '/imgs/ach-4.jpg'
    },
    {
      id: 5,
      title: 'Limca Certificate',
      url: '/imgs/ach-5.png',
      thumbnail: '/imgs/ach-5.png'
    },
    {
      id: 6,
      title: 'Limca record',
      url: '/imgs/ach-6.png',
      thumbnail: '/imgs/ach-6.png'
    },
    {
      id: 7,
      title: ' SPT-NRL Football Academy-Team Captain Abhishek Saikia is shortlisted for the trials for under 15 India team',
      url: '/imgs/ach-7.png',
      thumbnail: '/imgs/ach-7.png'
    }
  ];

  // Gallery-container2 data sets by year
  const imageSetsByYear = {
    2019: [{ id: 1, url: '/press/1.png', thumbnail: '/press/1.png' },{ id: 1, url: '/press/2.png', thumbnail: '/press/2.png' },
          { id: 1, url: '/press/3.png', thumbnail: '/press/3.png' }, { id: 1, url: '/press/4.png', thumbnail: '/press/4.png' },
          { id: 1, url: '/press/5.png', thumbnail: '/press/5.png' }, { id: 1, url: '/press/6.png', thumbnail: '/press/6.png' }
          ],
    2017: [{ id: 2, url: '/press/2017-1.jpg', thumbnail: '/press/2017-1.jpg' },{ id: 2, url: '/press/2017-2.jpg', thumbnail: '/press/2017-2.jpg' },
           { id: 2, url: '/press/2017-4.jpg', thumbnail: '/press/2017-4.jpg' },{ id: 2, url: '/press/2017-5.jpg', thumbnail: '/press/2017-5.jpg' },
          ],
    2016: [{ id: 3, url: '/press/2016-1.jpg', thumbnail: '/press/2016-1.jpg' },{ id: 3, url: '/press/2016-2.jpg', thumbnail: '/press/2016-2.jpg' },
          { id: 3, url: '/press/2016-3.jpg', thumbnail: '/press/2016-3.jpg' },{ id: 3, url: '/press/2016-4.jpg', thumbnail: '/press/2016-4.jpg' },
          { id: 3, url: '/press/2016-5.jpg', thumbnail: '/press/2016-5.jpg' },{ id: 3, url: '/press/2016-6.jpg', thumbnail: '/press/2016-6.jpg' },
          { id: 3, url: '/press/2016-7.jpg', thumbnail: '/press/2016-7.jpg' },{ id: 3, url: '/press/2016-8.jpg', thumbnail: '/press/2016-8.jpg' },
          { id: 3, url: '/press/2016-9.jpg', thumbnail: '/press/2016-9.jpg' },{ id: 3, url: '/press/2016-10.jpg', thumbnail: '/press/2016-10.jpg' },
          { id: 3, url: '/press/2016-11.jpg', thumbnail: '/press/2016-11.jpg' },{ id: 3, url: '/press/2016-12.jpg', thumbnail: '/press/2016-12.jpg' },
          ],
    2015: [{ id: 4, url: '/press/2015-1.jpg', thumbnail: '/press/2015-1.jpg' },{ id: 4, url: '/press/2015-2.jpg', thumbnail: '/press/2015-2.jpg' },
          { id: 4, url: '/press/2015-3.jpg', thumbnail: '/press/2015-3.jpg' },{ id: 4, url: '/press/2015-4.jpg', thumbnail: '/press/2015-4.jpg' },
          { id: 4, url: '/press/2015-5.jpg', thumbnail: '/press/2015-5.jpg' },{ id: 4, url: '/press/2015-6.jpg', thumbnail: '/press/2015-6.jpg' },
          { id: 4, url: '/press/2015-7.jpg', thumbnail: '/press/2015-7.jpg' },{ id: 4, url: '/press/2015-8.jpg', thumbnail: '/press/2015-8.jpg' },
          { id: 4, url: '/press/2015-9.jpg', thumbnail: '/press/2015-9.jpg' },{ id: 4, url: '/press/2015-10.jpg', thumbnail: '/press/2015-10.jpg' },
          { id: 4, url: '/press/2015-11.jpg', thumbnail: '/press/2015-11.jpg' }
          ],
    2014: [{ id: 5, url: '/press/2014.jpg', thumbnail: '/press/2014.jpg' }],
    2013: [{ id: 6, url: '/press/2013-1.jpg', thumbnail: '/press/2013-1.jpg' },{ id: 6, url: '/press/2013-2.jpg', thumbnail: '/press/2013-2.jpg' }],
    2012: [{ id: 7, url: '/press/2012-1.jpg', thumbnail: '/press/2012-1.jpg' },{ id: 7, url: '/press/2012-2.jpg', thumbnail: '/press/2012-2.jpg' },
          { id: 7, url: '/press/2012-3.jpg', thumbnail: '/press/2012-3.jpg' },{ id: 7, url: '/press/2012-4.jpg', thumbnail: '/press/2012-4.jpg' },
          { id: 7, url: '/press/2012-5.jpg', thumbnail: '/press/2012-5.jpg' }
          ],
    2011: [{ id: 8, url: '/press/2011-1.jpg', thumbnail: '/press/2011-1.jpg' },{ id: 8, url: '/press/2011-2.jpg', thumbnail: '/press/2011-2.jpg' }],
    2010: [{ id: 9, url: '/press/2010-1.jpg', thumbnail: '/press/2010-1.jpg' },{ id:9, url: '/press/2010-2.jpg', thumbnail: '/press/2010-2.jpg' },
           { id: 9, url: '/press/2010-3.jpg', thumbnail: '/press/2010-3.jpg' }
    ],
    2009: [{ id: 10, url: '/press/2009-1.jpg', thumbnail: '/press/2009-1.jpg' },{id: 10, url: '/press/2009-2.jpg', thumbnail: '/press/2009-2.jpg' },
          { id: 10, url: '/press/2009-3.jpg', thumbnail: '/press/2009-3.jpg' }
    ],
    2008: [{ id: 11, url: '/press/2008.jpg', thumbnail: '/press/2008.jpg' }],
    2007: [{ id: 12, url: '/press/2007-1.jpg', thumbnail: '/press/2007-1.jpg' },{ id: 12, url: '/press/2007-2.jpg', thumbnail: '/press/2007-2.jpg' },
          { id: 12, url: '/press/2007-3.jpg', thumbnail: '/press/2007-3.jpg' }],
    2006: [{ id: 13, url: '/press/2006-1.jpg', thumbnail: '/press/2006-1.jpg' },{ id: 13, url: '/press/2006-2.jpg', thumbnail: '/press/2006-2.jpg' }],
    2002: [{ id: 14, url: '/press/2002-1.jpg', thumbnail: '/press/2002-1.jpg' },{ id: 14,url: '/press/2002-2.jpg', thumbnail: '/press/2002-2.jpg' },
    ]
  };

  const [currentImage, setCurrentImage] = useState(0);

  // Section 2 states
  const [activeYear, setActiveYear] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  const currentYearImages = imageSetsByYear[activeYear] || [];

  const nextImage2 = () => {
    setCurrentImage2((prev) => (prev + 1) % currentYearImages.length);
  };

  const prevImage2 = () => {
    setCurrentImage2((prev) => (prev - 1 + currentYearImages.length) % currentYearImages.length);
  };

  const goToImage2 = (index) => {
    setCurrentImage2(index);
  };

  const changeYear = (year) => {
    setActiveYear(year);
    setCurrentImage2(0); // reset image index when year changes
  };

  return (
    <div className="about-page">
      <PageHeader title="Achievements" />

      {/* Section Heading + Description */}
      

      {/* Gallery Section 1 */}
      <div className="gallery-container">
        <div className="main-image-container">
          <div className="main-image-wrapper">
            <div className="image-title">
              {images[currentImage].title}
            </div>
            <img
              src={images[currentImage].url}
              alt={`Gallery image ${currentImage + 1}`}
              className="main-image"
            />
          </div>
        </div>

        <div className="thumbnails-section">
          <button className="nav-arrow nav-arrow-left" onClick={prevImage}>
            <ChevronLeft size={24} />
          </button>

          <div className="thumbnails-container">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`thumbnail ${index === currentImage ? 'active' : ''}`}
                onClick={() => goToImage(index)}
              >
                <img src={image.thumbnail} alt={`Thumbnail ${index + 1}`} />
                {index === currentImage && (
                  <div className="thumbnail-play">
                    <Play size={12} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="nav-arrow nav-arrow-right" onClick={nextImage}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <h2 className="press-heading">Press/Media</h2>
      {/* Gallery Section 2: With Tabs for Years */}
      <div className="gallery-tabs">
        {Object.keys(imageSetsByYear).map((year) => (
          <button
            key={year}
            className={`tab-button ${activeYear === year ? 'active' : ''}`}
            onClick={() => changeYear(year)}
          > 
            {year}
          </button>
        ))}
      </div>

      <div className="gallery-container2">
        <div className="main-image-container2">
          <div className="main-image-wrapper2">
            <img
              key={currentImage2}
              src={currentYearImages[currentImage2]?.url}
              alt={`Gallery image2 ${currentImage2 + 1}`}
              className="main-image2"
            />
          </div>
        </div>

        <div className="thumbnails-section2">
          <button className="nav-arrow2 nav-arrow-left2" onClick={prevImage2}>
            <ChevronLeft size={24} />
          </button>

          <div className="thumbnails-container2">
            {currentYearImages.map((image, index) => (
              <div
                key={index}
                className={`thumbnail2 ${index === currentImage2 ? 'active' : ''}`}
                onClick={() => goToImage2(index)}
              >
                <img src={image.thumbnail} alt={`Thumbnail2 ${index + 1}`} />
                {index === currentImage2 && (
                  <div className="thumbnail2-play">
                    <Play size={12} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="nav-arrow2 nav-arrow-right2" onClick={nextImage2}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Achievements;