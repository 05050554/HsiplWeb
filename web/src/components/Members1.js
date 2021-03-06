import React from 'react'
import "./Members1.scss";
import WEI from "../img/members/M10917009.jpg"
import YEE from "../img/members/M10917016.jpg"
import HONG from "../img/members/M10917030.jpg"
import HAN from "../img/members/M10917042.jpg"
import GI from "../img/members/M10917044改.jpg"
import YUN from "../img/members/M10917048.jpg"
import JUN from "../img/members/134316.jpg"
import FENG from "../img/members/S__7741515.jpg"
import XUN from "../img/members/2591aw-1.jpg"
import ZHI from "../img/members/14122121.jpg"
import TI from "../img/members/S__7741513改.jpg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




const Members1 = () => {

//     window.onload=function(){
//          const buttonrt = document.getElementById("slide1");
//     buttonrt.onclick=function(){
//             // document.getElementById("masterpic").scrollLeft += 330;
//         document.getElementById("masterpic").scrollBy ({
//             top: 0,
//             left: +400,
//             behavior: 'smooth'
//         })
//     };




//     const buttonlf = document.getElementById("slide");
//     buttonlf.onclick=function(){
//         // document.getElementById("masterpic").scrollLeft -=340;
//         document.getElementById("masterpic").scrollBy ({
//             top: 0,
//             left: -400,
//             behavior: 'smooth'
//         })
    
//     };

    


//     const buttonlf1 = document.getElementById("slide2");
//     buttonlf1.onclick=function(){
//         // document.getElementById("masterpic1").scrollLeft -= 330;
//         document.getElementById("masterpic1").scrollBy ({
//             top: 0,
//             left: -400,
//             behavior: 'smooth'
//         })
//     };

//     const buttonrt1 = document.getElementById("slide3");
//     buttonrt1.onclick=function(){
//         // document.getElementById("masterpic1").scrollLeft += 330;
//         document.getElementById("masterpic1").scrollBy ({
//             top: 0,
//             left: +400,
//             behavior: 'smooth'
//         })
//     };

// }

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        
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
        
        <div className="members" id="members">
            <div className="Title">
                <h1>Members</h1>
            </div>
            <div className="master2">
                <h2>碩士二年級</h2>
            </div>
            <div className="picborder" id="picborder">
            {/* <span className="arrow1"><i id="slide"  class="fas fa-angle-left" ></i></span> */}
            
                <Slider className="masterpic" id="masterpic" {...settings} nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}>
                    <div className="pic" id="firstpic">
                        {/* <div className="detail" id="firstdetail">
                            <h3>徐仕勳</h3><span>研究方向 :  影像處理</span>
                            <a href="/#"><i class="fas fa-envelope mail1"></i></a>
                            <p>M10817039@yuntech.edu.tw</p>
                        </div> */}
                        <img  className="img" id="firstimg"  src={XUN} alt="XUN"></img>

                        <div className="detail2" id="firstdetail2">
                        <h4>徐仕勳</h4>
                        <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10817039@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>

                    <div className="pic" id="secondpic">

                        {/* <div className="detail" >
                            <h3>邱明豐</h3><span>研究方向 :  影像處理</span>
                            <a href="/#"><i class="fas fa-envelope mail1"></i></a>
                            <p>M10817046@yuntech.edu.tw</p>
                        </div> */}

                        <img src={FENG} alt="FENG"></img>
                        <div className="detail2">
                        <h4>邱明豐​</h4>
                        <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10817046@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic" id="thirdpic">
                        {/* <div className="detail" >
                            <h3>鄭友智</h3><span>研究方向 :  影像處理</span>
                            <a href="/#"><i class="fas fa-envelope mail1"></i></a>
                            <p>M10817038@yuntech.edu.tw</p>
                        </div> */}
                        <img src={ZHI} alt="ZHI"></img>
                        <div className="detail2">
                        <h4>鄭友智​</h4>
                        <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10817038@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic" id="fourthpic">
                        {/* <div className="detail">
                            <h3>鄭才毅</h3><span>研究方向 :  影像處理</span>
                            <a href="/#"><i class="fas fa-envelope mail1"></i></a>
                            <p>M10817024@yuntech.edu.tw</p>
                        </div> */}
                        <img src={TI} alt="TI"></img>
                        <div className="detail2">
                        <h4>鄭才毅</h4>
                        <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10817024@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic" id="lastpic">
                        {/* <div className="detail">
                            <h3>許寓鈞</h3><span>研究方向 :  影像處理</span>
                            <a href="/#"><i class="fas fa-envelope mail1"></i></a>
                            <p>M10817021@yuntech.edu.tw</p>
                        </div> */}
                        <img src={JUN} alt="JUN"></img>
                        <div className="detail2">
                        <h4>許寓鈞</h4>
                        <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10817021@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>

                </Slider>
                
                {/* <span className="arrow1"><i id="slide1"  class="fas fa-angle-right" ></i></span> */}
            </div>

            {/* <button  id="slide" type="button">Slide left</button>    */}
            {/* <button  id="slide1" type="button">Slide right</button> */}




            <div className="master2">
                <h2>碩士一年級</h2>
            </div>
            
            <div className="picborder1" id="picborder1">
            {/* <span className="arrow"><i id="slide2"  class="fas fa-angle-left "></i></span>     */}
               
                < Slider className="masterpic1" id="masterpic1" {...settings} nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}>
                
                    <div className="pic1" id="firstpic1">
                    
                    {/* <button id="slide" type="button">Slide right</button> */}
                        {/* <div id="firstdetail" className="detail3">
                            <h3>Members</h3><span>研究方向 :  影像處理</span>
                            <a href="/#"><i class="fas fa-envelope mail1"></i></a>
                            <p>abcdefg@gmail.com</p>
                        </div> */}
                        <img id="firstpicture" src={WEI} alt="WEI"></img>

                        <div id="firstdetail2"  className="detail4">
                            <h4>鄒學緯</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10917009@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>

                    <div className="pic1" id="secondpic1">
                        {/* <div className="detail3">
                            <h3>Members</h3><span>研究方向 :  影像處理</span>
                            <a href="/#"><i class="fas fa-envelope mail1"></i></a>
                            <p>abcdefg@gmail.com</p>
                        </div> */}
                        <img src={YEE} alt="YEE"></img>
                        <div className="detail4">
                        <h4>柯祉伊</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10917016@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="thirdpic1">
                        {/* <div className="detail3">
                            <h3>Members</h3><span>研究方向 :  影像處理</span>
                            <a href="/#"><i class="fas fa-envelope mail1"></i></a>
                            <p>abcdefg@gmail.com</p>
                        </div> */}
                        <img src={HONG} alt="HONG"></img>
                        <div className="detail4">
                        <h4>張瑞鴻</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10917030@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fourthpic1">
                        {/* <div className="detail3">
                            <h3>Members</h3><span>研究方向 :  影像處理</span>
                            <a href="/#"><i class="fas fa-envelope mail1"></i></a>
                            <p>abcdefg@gmail.com</p>
                        </div> */}
                        <img src={HAN} alt="HAN"></img>
                        <div className="detail4">
                        <h4>楊宗翰</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10917042@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="fifthpic1">
                    {/* <div className="detail3">
                            <h3>Members</h3><span>研究方向 :  影像處理</span>
                            <a href="/#"><i class="fas fa-envelope mail1"></i></a>
                            <p>abcdefg@gmail.com</p>
                        </div> */}
                        <img src={GI} alt="GI"></img>
                        <div className="detail4">
                        <h4>蔡逢記</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10917044@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic1" id="lastpic1">
                        {/* <div className="detail3">
                            <h3>Members</h3><span>研究方向 :  影像處理</span>
                            <a href="/#"><i class="fas fa-envelope mail1"></i></a>
                            <p>abcdefg@gmail.com</p>
                        </div> */}
                        <img src={YUN} alt="YUN"></img>
                        <div className="detail4">
                        <h4>王美雲</h4>
                            <span>研究方向 :  影像處理</span>
                            <div className="Email">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10917048@yuntech.edu.tw</span>
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