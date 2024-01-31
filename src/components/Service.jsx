import React from "react";
import "./Service.css";
import firstImg from ".././images/sr.svg";
import secondImg from ".././images/ere.svg";
import thirdImg from ".././images/sd.svg";

const Service = () => {
  return (
    <div className="service">
      <div className="text">
        <div className="left">
          <p>WHAT WE DO</p>
          <h3>Our Service</h3>
        </div>
        <div className="right">
          <svg
            className="our-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="98"
            height="50"
            viewBox="0 0 98 50"
            fill="none"
          >
            <g filter="url(#filter0_d_0_39)">
              <ellipse cx="26" cy="21.5" rx="15" ry="14.5" fill="white" />
            </g>
            <g filter="url(#filter1_d_0_39)">
              <ellipse cx="74" cy="22.5" rx="15" ry="14.5" fill="#37806B" />
            </g>
            <path d="M28 18L24 22L28 26" stroke="#646464" stroke-width="2" />
            <path d="M72 18L76 22.5L72 27" stroke="white" stroke-width="2" />
            <defs>
              <filter
                id="filter0_d_0_39"
                x="0"
                y="0"
                width="50"
                height="49"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" dy="3" />
                <feGaussianBlur stdDeviation="5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_39"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_39"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_0_39"
                x="48"
                y="1"
                width="50"
                height="49"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-1" dy="3" />
                <feGaussianBlur stdDeviation="5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_39"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_39"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="list">
        <div id="first" className="item">
          <div className="left">
            <img src={firstImg} alt="" />
          </div>
          <div className="right">
            <h5>Interior Design</h5>
            <p>
              Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
              tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <div id="second" className="item">
          <img src={secondImg} alt="" />
        </div>
        <div id="third" className="item">
          <img src={thirdImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Service;
