import React, { Component } from "react";
import "./HomePage1.scss";
import homepagepic from "../assets/images/bg.svg";
import logo from "../img/LOGO/LOGO_1.png";
import { BackTop } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import Alumnus from "./Alumnus";
import Research_Posters from "./Research_Posters";
import Item from "antd/lib/list/Item";

// window.location.reload("HomePage1")
// window.location.reload(true);
// location.reload([true])
// function refresh()
// {
// history.go(0);
// }
// setTimeout(refresh(),1000);
// window.location.reload(true)

// window.location.href=document.referrer
// const style = {
//     height: 40,
//     width: 40,
//     lineHeight: '40px',
//     borderRadius: 4,
//     backgroundColor: '#1088e9',
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 14,

//   }


const HomePage1 = () => {

  return (
    

    <>
      {/* <head>
            <meta http-equiv="refresh" content="2"/>
            </head> */}

      <div className="top_HP" id="HomePage">


        <div className="list_HP">
            <a href="/">
                  <img className="logo_HP" src={logo}></img>
            </a>
          <ul>
            <li>
              <a id="p1_HP" href="/#LabDirector">
                About HSIPL
              </a>
            </li>
            {/* <li><a id="p1" href='/#Introduction'  >Introduction</a></li> */}
            <li>
              <a id="p1_HP" href="/#Professor">
                Professor
              </a>
            </li>
            <li>
              <a id="p1_HP" href="/#members">
                Members
              </a>
            </li>
            <li>
              <a id="p1_HP" href="#Research_interests">
                Research
              </a>
            </li>
            <li>
              <a id="p1_HP" href="#Honor_and_Awards">
                Awards
              </a>
            </li>
            <li>
              <Link id="p1_HP" to="/LearnMore" >
                Alumnus
              </Link>
            </li>
            <li>
              <Link id="p1_HP" to='/LearnMore'   >
                Posters
              </Link>
            </li>
            <li>
              <Link id="p1_HP" to="/LearnMore">
                Equipment
              </Link>
            </li>
          </ul>
        </div>
      </div>

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
      {/* <div  className="button-border">
                <button  type="button" className="top-button"><a id="p2" href="/#" >
                <i class="fas fa-chevron-up"></i>
                <span><br></br>top</span>
                </a></button>
            </div> */}
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

export default HomePage1
