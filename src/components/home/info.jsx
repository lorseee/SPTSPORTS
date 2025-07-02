// info.jsx
import React from "react";
import "./info.css";
import { Link } from "react-router-dom";

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
          PIONEERS IN SPORTS MANAGEMENT<br />
          SINCE 1998
        </h1>
        <p className="description">
        SPT Sports is a leading sports management company with a nationwide presence. We promote sports through high-quality events, our own academies, and infrastructure development. Known for our professionalism and efficiency, we organize corporate tournaments across cricket, football, tennis, throwball, and more.
        </p>
        <div className="cta">
          <Link to="/about">
            <button className="find-more">FIND OUT MORE</button>
          </Link>
        </div>
        </div>
    </section>
  );
};

export default Info;
