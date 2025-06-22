import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';
import PageHeader from '../layout/PageHeader';
import '../styles/about.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <PageHeader 
        title="About SPT Sports" 
        subtitle="Transforming lives through sports and fitness excellence"
      />
      
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                SPT Sports was founded with a vision to create a platform where aspirations 
                transform into accomplishments. We believe that sports and fitness are not 
                just activities, but pathways to personal growth, community building, and 
                excellence.
              </p>
              <p>
                With state-of-the-art facilities, expert coaching, and a commitment to 
                fostering talent at every level, we've become a trusted name in the sports 
                and fitness industry.
              </p>
            </div>
            <div className="about-image">
              <img src="/imgs/gallery-1.png" alt="About SPT Sports" />
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Target size={40} />
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do, from training programs to facility maintenance.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Users size={40} />
              </div>
              <h3>Community</h3>
              <p>Building strong communities through sports and fostering connections that last a lifetime.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Award size={40} />
              </div>
              <h3>Achievement</h3>
              <p>Celebrating every milestone and supporting our members in reaching their goals.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Heart size={40} />
              </div>
              <h3>Passion</h3>
              <p>Our passion for sports and fitness drives us to provide the best experience for our members.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;