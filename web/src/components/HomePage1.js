import React, { Component } from "react";
import "./HomePage1.scss";
import homepagepic from "../assets/images/bg3.svg";
import { BackTop } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

const HomePage1 = () => {
  return (
    <>
      <div className="HomePic">
        <div className="Home">
          <div className="text">
            <span className="circle1"></span> {/* 問題2 */}
            <h1 className="title">
              Hyperspectral Signal and Image Processing Laboratory
            </h1>{" "}
            {/* 問題1 */}
            <h3 className="content" id="content">
              Learn more about <br /> hyperspectral imaging system
            </h3>
            <h3 className="more">
              <Link id="lm" to="/LearnMore">
                Learn more
              </Link>
              <span className="circle2"></span>
            </h3>
            <span className="circle3"></span>
          </div>
        </div>
        <img src={homepagepic} alt="homepagepic img"></img>
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
