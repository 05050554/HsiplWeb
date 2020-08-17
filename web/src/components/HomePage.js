import React from "react";
import "./HomePage.scss";
import homepagepic from "../assets/images/homepage.svg";
const HomePage = () => {
    return (
        <> 
            <div className="top">
                <div className="mark">Hsipl</div>
                <div className="list">
                    <ul>
                        <li><a id="p1" href='#' style={{ color: "black" }}>Lab Director</a></li>
                        <li><a id="p1" href='#' style={{ color: "black" }}>Introduction</a></li>
                        <li><a id="p1" href='#' style={{ color: "black" }}>Professor</a></li>
                        <li><a id="p1" href='#' style={{ color: "black" }}>Members</a></li>
                        <li><a id="p1" href='#' style={{ color: "black" }}>Equipment</a></li>
                    </ul>
                </div>
            </div>

            <div className="HomePic">
                <img src={homepagepic} alt="homepagepic img"></img>
            </div>


            <div className="title">Hyperspectral Imaging System</div>

            <div className="content">Learn more about <br /> hyperspectral imaging system</div>

            <div className="more">< a id="lm" href="/">Learn more</a></div>
            <span className="circle1"></span>
            <span className="circle3"></span>
            <span className="circle2"></span>


        </>
    );
};

export default HomePage;



