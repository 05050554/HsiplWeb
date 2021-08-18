import React, { Component } from "react";
import "./HomePage1.scss";
import homepagepic from "../assets/images/bg3.svg";
import { BackTop } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

import camera from "../img/LabDirector/camera.png";
import app from "../img/LabDirector/mobile.png";
import web from "../img/LabDirector/web.png";

const HomePage1 = () => {
  return (
    <>
      <div className="HomePic">
        <h1 className="title">
          Hyperspectral Signal and Image Processing Laboratory
        </h1>
        <div className="Home">
          <div className="text">
            <div className="Background">
              <div id="Hsipl">
                <div className="Icon" id="hsi">
                  <img
                    src={camera}
                    href="#"
                    alt="camera"
                    className="icon_img"
                  ></img>
                  <h>
                    HyperSpectral
                    <br />
                    Imaging
                  </h>
                </div>
                <div className="Content">
                  <p>
                    We dedicated to develop algorithms for
                    hyperspectral, specifically for image classification, and
                    target detection.
                  </p>
                </div>
              </div>
              <div className="App">
                <div className="Icon">
                  <img src={app} href="#" alt="app" className="icon_img"></img>
                  <h>
                    Mobile
                    <br />
                    Application
                  </h>
                </div>
                <div className="Content">

                  <p>
                    We develop the design and function implementation of mobile
                    application.
                  </p>

                </div>
              </div>
              <div className="Web">
                <div className="Icon">
                  <img src={web} href="#" alt="web" className="icon_img"></img>
                  <h>
                    Web
                    <br />
                    Development
                  </h>
                </div>
                <div className="Content">

                  <p>
                    We develop the design and function implementation of web
                    pages.
                  </p>

                </div>
              </div>
              {/* <h3 className="content" id="content">
                Learn more about <br /> hyperspectral imaging system
              </h3> */}
              {/* <h3 className="more">
                <Link id="lm" to="/LearnMore">
                  Learn more
                </Link>
              </h3> */}
            </div>
          </div>
          <img
            className="home_img"
            src={homepagepic}
            alt="homepagepic img"
          ></img>
        </div>
      </div>

      <div>
        <BackTop duration={100}>
          <i class="fas fa-chevron-up">
            <div className="top_button"> TOP</div>
          </i>
        </BackTop>
      </div>
    </>
  );
};

export default HomePage1;
