import React from 'react'
import "./Members1.scss";
import WEI from "../img/members/M10917009.jpg"
import YEE from "../img/members/M10917016.jpg"
import HONG from "../img/members/M10917030.jpg"
import HAN from "../img/members/M10917042.jpg"
import GI from "../img/members/M10917044改.jpg"
import YUN from "../img/members/M10917048.jpg"




import LIN from "../img/members/M11017002.png"
import Jay from "../img/members/M11017015.jpeg"
import Kai from "../img/members/M11017040.png"
import Yu from "../img/members/M11017054.png"
import Jia from "../img/members/M11017057.png"


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




const Members1 = () => {

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 2000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              // initialSlide: 2
            }
          },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // initialSlide: 2
          }
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 670,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
      ]
    
  };

//   const teststy ={
//       slidesToShow:2,
//       slidesToScroll:1
//   }
function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? <i class="fas fa-chevron-circle-right" style={{alignSelf:"center"}}></i> : <i class="fas fa-chevron-circle-left" style={{alignSelf:"center"}}></i>;
    return (
      <span style={{alignSelf:"center"}} className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }

    return (
        
        <div className="members" id ="members">
            <div className="Title"id="Senior">
                <h1>Current Master Students</h1>
            </div>
            <div className="master2" >
                <h2>Senior Students</h2>
            </div>
            <div className="picborder" id="picborder">
            
                <Slider className="masterpic" id="masterpic" {...settings} nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}>
                    <div className="pic" id="firstpic">
                        <img  className="img" id="firstimg" src={WEI} alt="WEI"></img>

                        <div className="detail2" id="firstdetail2">
                        <h4>鄒學緯</h4>
                        <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10917009@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>

                    <div className="pic" id="secondpic">


                        <img src={YEE} alt="YEE"></img>
                        <div className="detail2">
                        <h4>柯祉伊​</h4>
                        <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10917016@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic" id="thirdpic">
                        <img src={HONG} alt="HONG"></img>
                        <div className="detail2">
                        <h4>張瑞鴻​</h4>
                        <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10917030@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic" id="fourthpic">
                        <img className="detail4" src={HAN} alt="HAN"></img>
                        <div className="detail2">
                        <h4>楊宗翰</h4>
                        <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10917042@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic" id="lastpic">
                        <img src={GI} alt="GI"></img>
                        <div className="detail2">
                        <h4>蔡逢記</h4>
                        <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span id="Junior">M10917044@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>

                    <div className="pic" id="lastpic">
                        <img src={YUN} alt="YUN"></img>
                        <div className="detail2">
                        <h4>王美雲</h4>
                        <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span id="Junior">M10917048@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                </Slider>
                
            </div>



            <div className="master2">
                <h2>Junior Students</h2>
            </div>
            
            <div className="picborder1">
               
                < Slider className="masterpic1" id="masterpic1" {...settings} nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}>
                
                    <div className="pic1" id="firstpic1">
                    
                        <img id="firstpicture" src={LIN} alt="LIN"></img>

                        <div id="firstdetail2"  className="detail4">
                            <h4>李浩麟</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M11017002@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>

                    <div className="pic1" id="secondpic1">

                        <img src={Jay} alt="Jay"></img>
                        <div className="detail4">
                        <h4>李昱杰</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M11017015@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="thirdpic1">
                        {/* <div className="detail3">
                            <h3>Members</h3><span>研究方向 :  影像處理</span>
                            <a href="/#"><i class="fas fa-envelope mail1"></i></a>
                            <p>abcdefg@gmail.com</p>
                        </div> */}
                        <img src={Kai} alt="Kai"></img>
                        <div className="detail4">
                        <h4>徐楷勛</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M11017040@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fourthpic1">
                        {/* <div className="detail3">
                            <h3>Members</h3><span>研究方向 :  影像處理</span>
                            <a href="/#"><i class="fas fa-envelope mail1"></i></a>
                            <p>abcdefg@gmail.com</p>
                        </div> */}
                        <img src={Yu} alt="Yu"></img>
                        <div className="detail4">
                        <h4>朱博裕</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M11017054@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                        <img src={Jia} alt="Jia"></img>
                        <div className="detail4">
                        <h4>詹育嘉</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10917044@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                </ Slider>
               
                {/* <span className="arrow"><i id="slide3"  class="fas fa-angle-right" ></i></span> */}
            </div>
            
                
        
        </div>
        
    )
}

export default Members1;