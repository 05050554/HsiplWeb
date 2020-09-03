import React from "react";
import "./HomePage1.scss";
import homepagepic from "../assets/images/homepage.svg";



// var body = document.body;
// var html = document.documentElement;
// html.scrollTop -=100;
// body.scrollTop -=100;
const HomePage1 = () => {
    return (
        <>
            <div className="top" >
                <div className="mark">Hsipl</div>
                

                <div className="list">
                    <ul>
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
                        <h2 className="more"><a id="lm" href="/test">Learn more</a><span className="circle2"></span></h2>
                        <span className="circle3" ></span>
                    </div>

                </div>

                <img src={homepagepic} alt="homepagepic img"></img>
                
            </div>

        </>
        
    )
}

export default HomePage1;

