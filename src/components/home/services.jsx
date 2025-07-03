import React, { useState, useEffect } from 'react';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState(0);
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  const benefits = [
    {
      id: 1,
      number: "01",
      title: "Sports Events",
      description: "Creating Sports IP’s for brands and corporates. Specialists in Intra company events and PAN India Sports Events",
      position: "left-1"
    },
    {
      id: 2,
      number: "02", 
      title: "Sports Facility Management",
      description: " Expertise in set up, managing operations, driving revenue and building brands",
      position: "left-2"
    },
    {
      id: 3,
      number: "03",
      title: "Sports Infrastructure Development",
      description: "Building sporting arenas and facilities since 1998 across various sports",
      position: "right-1"
    },
    {
      id: 4,
      number: "04",
      title: "Sports Equipment Distribution",
      description: "Official distributors for Joola India and other sports brands",
      position: "right-2"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        if (prev < benefits.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  const handleBenefitClick = (benefit) => {
    setSelectedBenefit(selectedBenefit?.id === benefit.id ? null : benefit);
  };

  const styles = {
    runningBenefits: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      pointerEvents: 'none'
    },
    mainTitle: {
      textAlign: 'center',
      fontFamily: 'Oswald, sans-serif',
      fontSize: 'clamp(2rem, 4vw, 3.5rem)',
      fontWeight: 900,
      letterSpacing: '0.5px',
      marginBottom: '4rem',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      position: 'relative',
      zIndex: 2
    },
    contentContainer: {
      maxWidth: '1400px',
      width: '100%',
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    horizontalLayout: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6rem',
      width: '100%',
      position: 'relative'
    },
    leftBenefits: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4rem',
      flex: 1,
      maxWidth: '350px',
      alignItems: 'flex-end',
      textAlign: 'right'
    },
    rightBenefits: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4rem',
      flex: 1,
      maxWidth: '350px',
      alignItems: 'flex-start',
      textAlign: 'left'
    },
    benefitItem: {
      cursor: 'pointer',
      position: 'relative',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      opacity: 0,
      transform: 'translateY(30px)',
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      maxWidth: '400px'
    },
    benefitItemVisible: {
      opacity: 1,
      transform: 'translateY(0)',
      animation: 'slideInUp 0.15s cubic-bezier(0.4, 0, 0.2, 1) forwards'
    },
    benefitItemHover: {
      transform: 'translateY(-3px) scale(1.02)',
    },
    benefitItemSelected: {
      transform: 'translateY(-3px) scale(1.05)',
    },
    leftBenefitItem: {
      flexDirection: 'row-reverse'
    },
    benefitContent: {
      flex: 1
    },
    benefitNumber: {
      fontSize: '4rem',
      fontFamily: 'Oswald, sans-serif',
      fontWeight: 900,
      color: '#da251d',
      lineHeight: '0.8',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      flexShrink: 0,
      transition: 'all 0.2s ease',
      position: 'relative'
    },
    numberBorder: {
      position: 'absolute',
      right: '-25px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '2px',
      height: '80px',
      background: 'linear-gradient(to bottom, transparent, #2f1d6d, transparent)',
      transition: 'all 0.2s ease'
    },
    numberBorderLeft: {
      position: 'absolute',
      left: '80px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '2px',
      height: '80px',
      background: 'linear-gradient(to bottom, transparent, #2f1d6d, transparent)',
      transition: 'all 0.2s ease'
    },
    benefitTitle: {
      fontSize: '1.8rem',
      fontFamily: 'Oswald, sans-serif',
      fontWeight: 700,
      marginBottom: '0.8rem',
      color: '#fff',
      transition: 'color 0.2s ease'
    },
    benefitDescription: {
      fontSize: '1rem',
      fontFamily: 'Jost, sans-serif',
      lineHeight: 1.6,
      color: 'rgba(255, 255, 255, 0.8)',
      transition: 'color 0.2s ease'
    },
    centerImage: {
      position: 'relative',
      flexShrink: 0
    },
    imageContainer: {
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      overflow: 'hidden',
      position: 'relative',
      border: '8px solid rgba(43, 23, 110, 0.8)',
      boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)'
    },
    runnerImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center'
    },
    imageOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, transparent 30%, rgba(180, 255, 0, 0.1) 100%)'
    },
    arrow: {
      position: 'absolute',
      stroke: '#2f1d6d',
      strokeWidth: '3',
      fill: 'none',
      opacity: 0.8,
      filter: 'drop-shadow(0 0 8px rgba(12, 36, 145, 0.6))',
      animation: 'arrowPulse 2s ease-in-out infinite'
    },
    arrowTopLeft: {
      top: '60px',
      left: '-80px',
      width: '60px',
      height: '60px'
    },
    arrowBottomLeft: {
      bottom: '60px',
      left: '-80px',
      width: '60px',
      height: '60px'
    },
    arrowTopRight: {
      top: '60px',
      right: '-80px',
      width: '60px',
      height: '80px'
    },
    arrowBottomRight: {
      bottom: '60px',
      right: '-80px',
      width: '60px',
      height: '60px'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      animation: 'fadeIn 0.3s ease-out'
    },
    modalContent: {
      background: 'linear-gradient(135deg, #2d2d2d, #1a1a1a)',
      padding: '3rem',
      borderRadius: '20px',
      maxWidth: '500px',
      width: '90%',
      position: 'relative',
      border: '1px solid rgba(0, 8, 255, 0.3)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
    },
    closeBtn: {
      position: 'absolute',
      top: '1rem',
      right: '1.5rem',
      background: 'none',
      border: 'none',
      color: '#2f1d6d',
      fontSize: '2rem',
      cursor: 'pointer',
      transition: 'transform 0.3s'
    },
    modalNumber: {
      fontSize: '5rem',
      fontWeight: 900,
      color: '#2f1d6d',
      lineHeight: '0.8',
      marginBottom: '1rem'
    },
    modalTitle: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
      color: '#fff'
    },
    modalDescription: {
      fontSize: '1.2rem',
      lineHeight: 1.6,
      color: 'rgba(255, 255, 255, 0.9)',
      marginBottom: '2rem'
    },
    modalExtra: {
      paddingTop: '1.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'rgba(255, 255, 255, 0.7)',
      fontStyle: 'italic'
    }
  };

  return (
    <div style={styles.runningBenefits}>
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes arrowPulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .benefit-item:hover .benefit-number {
          color: #ffffff !important;
          text-shadow: 0 0 15px rgba(170, 34, 34, 0.8) !important;
        }

        .benefit-item:hover .benefit-number .number-border,
        .benefit-item:hover .benefit-number .number-border-left {
          background: linear-gradient(to bottom, transparent, #ffffff, transparent) !important;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5) !important;
        }

        .benefit-item:hover .benefit-title {
          color:rgb(164, 24, 24) !important;
        }

        .benefit-item:hover .benefit-description {
          color: rgba(255, 255, 255, 1) !important;
        }

        .benefit-item:hover {
          transform: translateY(-3px) scale(1.02) !important;
        }

        .close-btn:hover {
          transform: scale(1.2);
        }

        @media (max-width: 1024px) {
          .horizontal-layout {
            flex-direction: column !important;
            gap: 3rem !important;
          }
          
          .left-benefits, .right-benefits {
            flex-direction: row !important;
            justify-content: center !important;
            align-items: center !important;
            text-align: center !important;
            max-width: none !important;
            width: 100% !important;
          }
          
          .arrow { display: none !important; }
        }

        @media (max-width: 768px) {
          .left-benefits, .right-benefits {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
      
      <div style={styles.backgroundPattern}></div>
      
      <h1 style={styles.mainTitle}>OUR SERVICES</h1>
      
      <div style={styles.contentContainer}>
        <div style={styles.horizontalLayout} className="horizontal-layout">
          {/* Left Side Benefits */}
          <div style={styles.leftBenefits} className="left-benefits">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div
                key={benefit.id}
                className="benefit-item"
                style={{
                  ...styles.benefitItem,
                  ...styles.leftBenefitItem,
                  ...(index < visibleItems ? styles.benefitItemVisible : {}),
                  ...(selectedBenefit?.id === benefit.id ? styles.benefitItemSelected : {}),
                  animationDelay: `${index * 0.3}s`
                }}
                onClick={() => handleBenefitClick(benefit)}
              >
                <div style={styles.benefitContent}>
                  <h3 style={styles.benefitTitle} className="benefit-title">{benefit.title}</h3>
                  <p style={styles.benefitDescription} className="benefit-description">{benefit.description}</p>
                </div>
                <div style={styles.benefitNumber} className="benefit-number">
                  {benefit.number}
                  <div style={styles.numberBorder} className="number-border"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image with L-shaped Arrows */}
          <div style={styles.centerImage}>
            <div style={styles.imageContainer}>
              <img 
                src="/imgs/5.jpg" 
                alt="Runner in action"
                style={styles.runnerImage}
              />
              <div style={styles.imageOverlay}></div>
            </div>

            {/* L-shaped Arrows */}
            <svg style={{...styles.arrow, ...styles.arrowTopLeft}} className="arrow">
              <path d="M50 50 L50 10 L10 10" strokeLinecap="round" strokeLinejoin="round" />
              <polygon points="5,5 15,10 5,15" fill="#b4ff00" />
            </svg>

            <svg style={{...styles.arrow, ...styles.arrowBottomLeft}} className="arrow">
              <path d="M50 10 L50 50 L10 50" strokeLinecap="round" strokeLinejoin="round" />
              <polygon points="5,45 15,50 5,55" fill="#b4ff00" />
            </svg>

            <svg style={{...styles.arrow, ...styles.arrowTopRight}} className="arrow">
              <path d="M10 50 L10 10 L50 10" strokeLinecap="round" strokeLinejoin="round" />
              <polygon points="55,5 45,10 55,15" fill="#b4ff00" />
            </svg>

            <svg style={{...styles.arrow, ...styles.arrowBottomRight}} className="arrow">
              <path d="M10 10 L10 50 L50 50" strokeLinecap="round" strokeLinejoin="round" />
              <polygon points="55,45 45,50 55,55" fill="#b4ff00" />
            </svg>
          </div>

          {/* Right Side Benefits */}
          <div style={styles.rightBenefits} className="right-benefits">
            {benefits.slice(2, 4).map((benefit, index) => (
              <div
                key={benefit.id}
                className="benefit-item"
                style={{
                  ...styles.benefitItem,
                  ...((index + 2) < visibleItems ? styles.benefitItemVisible : {}),
                  ...(selectedBenefit?.id === benefit.id ? styles.benefitItemSelected : {}),
                  animationDelay: `${(index + 2) * 0.3}s`
                }}
                onClick={() => handleBenefitClick(benefit)}
              >
                <div style={styles.benefitNumber} className="benefit-number">
                  {benefit.number}
                  <div style={styles.numberBorderLeft} className="number-border-left"></div>
                </div>
                <div style={styles.benefitContent}>
                  <h3 style={styles.benefitTitle} className="benefit-title">{benefit.title}</h3>
                  <p style={styles.benefitDescription} className="benefit-description">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      
      
    </div>
  );
};

export default Services;