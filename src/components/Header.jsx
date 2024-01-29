// MyComponent.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Header.css"
import Logo from "../images/logo.svg"

const Header = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <header data-aos="fade-down" className="header">
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <ul>
                            <li>
                                <a href="#" className="active">HOME</a>
                            </li>
                            <li>
                                <a href="#">PROJECT</a>
                            </li>
                            <li>
                                <a href="#">SERVICES</a>
                            </li>
                            <li>
                                <a href="#">ABOUT</a>
                            </li>
                            <li>
                                <a href="#">BLOG</a>
                            </li>
                            <li>
                                <a href="#">SHOP</a>
                            </li>
                            <li>
                                <a href="#">CONTACT</a>
                            </li>
                            <button className="navbar-btn" type="submit">Sign Up</button>
                        </ul>
                        <div className="burger">
                            <span id="line"></span>
                            <span id="line"></span>
                            <span id="line"></span>
                        </div>
                    </div>
                </div>

            </header>

            <section data-aos="fade-down" className="hero">
                {/* Hero section content */}
            </section>

        </div>
    );
};

export default Header;
