import React from "react";
import "./HomePage1.scss";
import homepagepic from "../assets/images/homepage.svg";
import logo from "../img/LOGO/LOGO_1.png";


import {
    BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const HomePage1 = () => {
    return (
        <>
            <div className="top" >
                <a href="#"><img className="logo" src={logo}></img></a> 
                {/* <img className="logo" src={logo} ></img> */}
                {/* <div className="mark">Hsipl</div> */}
                

                <div className="list">
                    <ul>
                        <li><a id="p1" href='#'  style={{ color: "black" }}>Home</a></li>
                        <li><a id="p1" href='#LabDirector'  style={{ color: "black" }}>Lab Director</a></li>
                        <li><a id="p1" href='#Introduction' style={{ color: "black" }}>Introduction</a></li>
                        <li><a id="p1" href='#Professor' style={{ color: "black" }}>Professor</a></li>
                        <li><a id="p1" href='#members' style={{ color: "black" }}>Members</a></li>
                        <li><a id="p1" href='#Equipment' style={{ color: "black" }}>Equipment</a></li>
                    </ul>
                </div>
            </div>


            <div className="HomePic">
                <div className="Home">
                    <div className="text" >
                        <span className="circle1"></span> {/* 問題2 */}
                        <h1 className="title">Hyperspectral Imaging System</h1> {/* 問題1 */}
                        <h2 className="content">Learn more about <br /> hyperspectral imaging system</h2>
                        <h2 className="more">
                            <Link id="lm" to="/LearnMore">Learn more</Link><span className="circle2"></span></h2>
                        <span className="circle3"></span>
                    </div>

                </div>

                <img src={homepagepic} alt="homepagepic img"></img>
                
            </div>
            <div  className="button-border">
                <button  type="button" className="top-button"><a id="p2" href="#" >
                <i class="fas fa-chevron-up"></i>
                <span><br></br>top</span>
                </a></button>
            </div>
        </>
        
    )
}

export default HomePage1;

