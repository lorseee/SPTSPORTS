import React from 'react';
import '../styles/page-header.css';

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="page-header">
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