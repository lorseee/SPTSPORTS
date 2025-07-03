import React, { useRef, useEffect } from "react";

const Logos = () => {
  const marqueeRef = useRef(null);
  const logos = [
    "/brands/1.png", "/brands/2.png", "/brands/3.png", "/brands/4.png", "/brands/5.png",
    "/brands/6.png", "/brands/7.png", "/brands/8.png","/brands/12.png","/brands/9.png", "/brands/10.png",
    "/brands/11.png", "/brands/13.png", "/brands/14.png", "/brands/15.png",
    "/brands/16.png", "/brands/17.png", "/brands/18.png", "/brands/19.png", "/brands/20.png",
  ];

  useEffect(() => {
    const updateMarqueeVars = () => {
      if (marqueeRef.current) {
        const screenWidth = window.innerWidth;
        let logoWidth, logoSpacing, logoHeight, animationDuration;
        
        // Enhanced responsive breakpoints
        if (screenWidth <= 320) {
          // Very small phones
          logoWidth = 80;
          logoSpacing = 10;
          logoHeight = '3rem';
          animationDuration = 45;
        } else if (screenWidth <= 480) {
          // Small phones
          logoWidth = 100;
          logoSpacing = 12;
          logoHeight = '3.5rem';
          animationDuration = 50;
        } else if (screenWidth <= 768) {
          // Tablets
          logoWidth = 140;
          logoSpacing = 16;
          logoHeight = '4rem';
          animationDuration = 55;
        } else if (screenWidth <= 1024) {
          // Small laptops
          logoWidth = 180;
          logoSpacing = 20;
          logoHeight = '5rem';
          animationDuration = 60;
        } else if (screenWidth <= 1440) {
          // Medium laptops
          logoWidth = 220;
          logoSpacing = 25;
          logoHeight = '5.5rem';
          animationDuration = 65;
        } else {
          // Large screens/desktop
          logoWidth = 260;
          logoSpacing = 30;
          logoHeight = '6rem';
          animationDuration = 70;
        }
        
        const totalItemWidth = logoWidth + logoSpacing;
        
        marqueeRef.current.style.setProperty('--logo-count', logos.length);
        marqueeRef.current.style.setProperty('--logo-width', `${logoWidth}px`);
        marqueeRef.current.style.setProperty('--logo-spacing', `${logoSpacing}px`);
        marqueeRef.current.style.setProperty('--logo-height', logoHeight);
        marqueeRef.current.style.setProperty('--total-item-width', `${totalItemWidth}px`);
        marqueeRef.current.style.setProperty('--animation-duration', `${animationDuration}s`);
      }
    };

    updateMarqueeVars();
    window.addEventListener('resize', updateMarqueeVars);
    return () => window.removeEventListener('resize', updateMarqueeVars);
  }, [logos.length]);

  return (
    <div style={{
      width: '100%',
      textAlign: 'center',
      backgroundColor: 'black',
      padding: 'clamp(0.8rem, 2vw, 1.5rem) 0 0',
      overflow: 'hidden',
      color: '#f5f5f5',
      justifyContent: 'center'
    }}>
      <h2 style={{
        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
        fontWeight: 800,
        display: 'block',
        justifyContent: 'center',
        lineHeight: 1,
        marginTop: 'clamp(-0.5rem, -1vw, -0.1rem)',
        marginBottom: 'clamp(1rem, 3vw, 2.5rem)',
        fontFamily: "'Oswald', system-ui, Helvetica, Arial, sans-serif",
        letterSpacing: '0.05em'
      }}>
        OUR PATRONS
      </h2>

        <div
        ref={marqueeRef}
        className="marquee-container"
        style={{
          width: '100%',
          backgroundColor: 'white',
          overflow: 'hidden',
          marginTop: 'clamp(20px, 5vw, 40px)',
          paddingTop: 'clamp(5px, 1.5vw, 10px)',
          paddingBottom: 'clamp(5px, 1.5vw, 10px)',
          boxSizing: 'border-box',
          position: 'relative'
        }}
      >
          <div 
            className="marquee-content"
            style={{
              display: 'flex',
              whiteSpace: 'nowrap',
              width: 'calc(var(--total-item-width, 190px) * var(--logo-count, 22) * 2)',
              animation: 'marquee var(--animation-duration, 60s) linear infinite',
              willChange: 'transform'
            }}
          >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} style={{
              flexShrink: 0,
              padding: '0 calc(var(--logo-spacing, 20px) / 2)',
              boxSizing: 'border-box'
            }}>
              <div style={{
                width: 'var(--logo-width, 200px)',
                height: 'var(--logo-height, 5rem)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZjBmMGYwIiBzdHJva2U9IiNkZGQiLz4KPHR4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEycHgiPkxvZ288L3R4dD4KPC9zdmc+';
                  }}
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} style={{
              flexShrink: 0,
              padding: '0 calc(var(--logo-spacing, 20px) / 2)',
              boxSizing: 'border-box'
            }}>
              <div style={{
                width: 'var(--logo-width, 200px)',
                height: 'var(--logo-height, 5rem)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZjBmMGYwIiBzdHJva2U9IiNkZGQiLz4KPHR4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEycHgiPkxvZ288L3R4dD4KPC9zdmc+';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Hide scrollbars completely */
        * {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* Internet Explorer 10+ */
        }
        
        *::-webkit-scrollbar { /* WebKit */
          display: none;
        }

        .marquee-container {
          scrollbar-width: none !important; /* Firefox */
          -ms-overflow-style: none !important; /* Internet Explorer 10+ */
        }
        
        .marquee-container::-webkit-scrollbar { /* WebKit */
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          background: transparent !important;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(var(--total-item-width, 190px) * var(--logo-count, 20) * -1));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-content {
            animation-duration: 120s !important;
          }
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

        /* Enhanced responsive breakpoints */
        @media (max-width: 320px) {
          .logos-heading {
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .logos-heading {
            font-size: 1.8rem !important;
            margin-bottom: 1.2rem !important;
          }
        }

        @media (max-width: 768px) {
          .logos-heading {
            font-size: 2.2rem !important;
            margin-bottom: 1.5rem !important;
          }
        }

        @media (min-width: 1024px) {
          .logos-heading {
            font-size: 2.8rem !important;
            margin-bottom: 2rem !important;
          }
        }

        @media (min-width: 1440px) {
          .logos-heading {
            font-size: 3.2rem !important;
            margin-bottom: 2.5rem !important;
          }
        }

        @media (min-width: 1920px) {
          .logos-heading {
            font-size: 3.5rem !important;
            margin-bottom: 3rem !important;
          }
        }

        /* Smooth scrolling for better performance */
        .marquee-content {
          backface-visibility: hidden;
          perspective: 1000px;
          transform: translateZ(0);
        }

        /* Remove any potential greyscale effects */
        .marquee-content img {
          filter: none !important;
        }

        /* Ensure container doesn't create scrollbars */
        html, body {
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default Logos;