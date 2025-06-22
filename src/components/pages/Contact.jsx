// ContactSection.jsx
import React from "react";
import PageHeader from '../layout/PageHeader';
import "../styles/Contact.css";

const ContactForm = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="contact-hero">
        {/* You can set the background image in CSS for .contact-hero or use inline style below: */}
        {/* <div className="contact-hero" style={{ backgroundImage: "url('/imgs/bg.jpg')" }}></div> */}
        <PageHeader title="Contact Us" subtitle="We'd love to hear from you!" />
      </div>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-form">
            <h2>Have something to tell us?</h2>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Name" />

              <label>Email</label>
              <input type="email" placeholder="Email" />

              <label>Subject</label>
              <input type="text" placeholder="Subject" />

              <label>Message</label>
              <textarea placeholder="Please include as much detail as possible." />

              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Our Office</h2>
            <div className="info-block">
              <strong>SPT Sports Management Pvt. Ltd</strong>
              <p><em>(Head Office)</em></p>
              <p>
                10 Sports House, 1st Main<br />
                1st Block Koramangala<br />
                Bangalore - 560034<br />
                Phone: +91 80 41475441<br />
                Mobile: +91 95453 23200
              </p>
            </div>
            <div className="info-block">
              <strong>SPT Sports Academy</strong>
              <p>
                Mullur, Sarjapur Road<br />
                Bangalore - 560 035<br />
                Phone: +91 81470 72726<br />
                Email: <a href="mailto:frontoffice@sptindia.com">frontoffice@sptindia.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
