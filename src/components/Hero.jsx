import React from 'react';
import "./Hero.css"
import Line from "../images/Rectangle 27.png"
import Big from "../images/toa-heftiba-FV3GConVSss-unsplash.png"

function Hero() {
    return (
        <div>
            <div data-aos="fade-down" className="container">
                <div className="hero__inner row">
                    <div className="left col">
                        <div className="text">
                            <h5>MODERN INTERIOR</h5>
                            <h2>Create Your Interior Design.</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation.
                            </p>
                            <a href="#">
                                <button className="home-btn" type="submit">CONTACT</button>
                            </a>
                        </div>
                    </div>
                    <div className="right col">
                        <div className="image">
                            <img
                                className="home__line"
                                src={Line}
                                alt="line"
                            />
                            <img
                                className="home__picture"
                                src={Big}
                                alt="home"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hero;