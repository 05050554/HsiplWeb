import React from "react";
import "./HomePage1.scss";
import homepagepic from "../assets/images/homepage.svg";
import logo from "../img/LOGO/LOGO_1.png";
import { BackTop } from 'antd';
import {Link} from "react-router-dom";



const HomePage1 = () => {
    return (
        <>
            
            <div className="top" id="HomePage">
                <Link  to="/"><img className="logo" src={logo}></img></Link> 

                <div className="list">
                    <ul>
                        <li><Link id="p1" to="/" >Home</Link></li>
                        <li><a id="p1" href='/#LabDirector'   >Lab Director</a></li>
                        <li><a id="p1" href='/#Introduction'  >Introduction</a></li>
                        <li><a id="p1" href='/#Professor'  >Professor</a></li>
                        <li><a id="p1" href='/#members'  >Members</a></li>
                        <li><a id="p1" href='/#Equipment'  >Equipment</a></li>
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
                            <Link id="lm" to="/LearnMore" sc>Learn more</Link><span className="circle2"></span></h2>
                        <span className="circle3"></span>
                    </div>

                </div>

                <img src={homepagepic} alt="homepagepic img"></img>
                
            </div>
            {/* <div  className="button-border">
                <button  type="button" className="top-button"><a id="p2" href="/#" >
                <i class="fas fa-chevron-up"></i>
                <span><br></br>top</span>
                </a></button>
            </div> */}
            <div>
            <BackTop>
                <i class="fas fa-chevron-up"> </i>
                <div className="top_button">TOP</div>
            </BackTop>
            </div>
        </>
        
    )
}

export default HomePage1;

