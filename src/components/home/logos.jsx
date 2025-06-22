import React, { useRef, useEffect } from "react";

const Logos = () => {
  const marqueeRef = useRef(null);
  const logos = [
    "/brands/1.png", "/brands/2.png", "/brands/3.png", "/brands/4.png", "/brands/5.png",
    "/brands/6.png", "/brands/7.png", "/brands/8.png", "/brands/9.png", "/brands/10.png",
    "/brands/11.png", "/brands/12.png", "/brands/13.png", "/brands/14.png", "/brands/15.png",
    "/brands/16.png", "/brands/17.png", "/brands/18.png", "/brands/19.png", "/brands/20.png",
    "/brands/21.png", "/brands/22.png",
  ];

  useEffect(() => {
    const updateMarqueeVars = () => {
      if (marqueeRef.current) {
        const screenWidth = window.innerWidth;
        let logoWidth, logoSpacing;
        
        if (screenWidth <= 480) {
          logoWidth = 80;
          logoSpacing = 30;
        } else if (screenWidth <= 768) {
          logoWidth = 100;
          logoSpacing = 35;
        } else {
          logoWidth = 150;
          logoSpacing = 40;
        }
        
        const totalItemWidth = logoWidth + logoSpacing;
        
        marqueeRef.current.style.setProperty('--logo-count', logos.length);
        marqueeRef.current.style.setProperty('--logo-width', `${logoWidth}px`);
        marqueeRef.current.style.setProperty('--logo-spacing', `${logoSpacing}px`);
        marqueeRef.current.style.setProperty('--total-item-width', `${totalItemWidth}px`);
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
      padding: '1.35rem 0 0',
      overflowX: 'hidden',
      color: '#f5f5f5',
      justifyContent: 'center'
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: 800,
        display: 'block',
        justifyContent: 'center',
        lineHeight: 1,
        marginTop: '-0.5rem',
        marginBottom: '0.9rem',
        fontFamily: "'Oswald', system-ui, Helvetica, Arial, sans-serif"
      }}>
        OUR PATRONS
      </h2>

      <div
        ref={marqueeRef}
        style={{
          width: '100%',
          backgroundColor: 'white',
          overflowX: 'hidden',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        }}
      >
        <div style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          width: 'calc(var(--total-item-width, 190px) * var(--logo-count, 22) * 2)',
          animation: 'marquee 60s linear infinite',
          willChange: 'transform'
        }}>
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} style={{
              flexShrink: 0,
              padding: '0 calc(var(--logo-spacing, 40px) / 2)',
              boxSizing: 'border-box'
            }}>
              <div style={{
                width: 'var(--logo-width, 150px)',
                height: '4rem',
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
                    objectFit: 'contain'
                  }}
                  onError={(e) => {
                    // Fallback for missing images - show a placeholder
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
              padding: '0 calc(var(--logo-spacing, 40px) / 2)',
              boxSizing: 'border-box'
            }}>
              <div style={{
                width: 'var(--logo-width, 150px)',
                height: '4rem',
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
                    objectFit: 'contain'
                  }}
                  onError={(e) => {
                    // Fallback for missing images - show a placeholder
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMTAwIDUwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZjBmMGYwIiBzdHJva2U9IiNkZGQiLz4KPHR4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk5OSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEycHgiPkxvZ288L3R4dD4KPC9zdmc+';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(var(--total-item-width, 190px) * var(--logo-count, 22) * -1));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-content {
            animation-duration: 180s !important;
          }
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Logos;