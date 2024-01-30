import React from "react";
import "./Hero.css";
import Logo from ".././images/logo.svg";
import Line from ".././images/Rectangle 27.png";
import Home from ".././images/toa-heftiba-FV3GConVSss-unsplash.png";

function Hero() {
  return (
    <div data-aos="fade-down" className="hero__inner">
      <div className="left">
        <div className="text">
          <h5>MODERN INTERIOR</h5>
          <h1>Create Your Interior Design.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <button className="hero-btn">CONTACT</button>
        </div>
      </div>
      <div className="right">
        <div className="image">
          <img className="linee" src={Line} alt="" />
          <img className="homee" src={Home} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
