// info.jsx
import React from "react";
import "./info.css";

const Info = () => {
  return (
    <section className="zunzo-hero">
      <div className="zunzo-images">
        <div className="img img1" />
        <div className="img img2" />
      </div>
      <div className="zunzo-content">
        <div className="checkerboard" />
        <p className="welcome-text">WELCOME TO SPT SPORTS!</p>
        <h1 className="subheading">
          SPT SPORTS - YOUR ULTIMATE <br />
          SPORTS COMMUNITY
        </h1>
        <p className="description">
          Welcome to our vibrant running community, where we organize
          exciting running events, provide helpful running tutorials, and keep
          you informed with the latest running news.
        </p>
        <hr />
        <div className="cta">
          <button className="find-more">FIND OUT MORE</button>
          
        </div>
      </div>
    </section>
  );
};

export default Info;
