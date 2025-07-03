import React from 'react';
import '../styles/page-header.css';

const PageHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <section
      className="page-header"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              
            }
          : {}
      }
    >
      <div className="container">
        <div className="page-header-content">
          <h1 className="page-title">{title}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
