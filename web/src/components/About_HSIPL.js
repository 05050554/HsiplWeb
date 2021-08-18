import React from "react";
import "./About_HSIPL.scss";
import camera from "../img/LabDirector/camera.png";
import app from "../img/LabDirector/mobile.png";
import web from "../img/LabDirector/web.png";
import life1 from "../img/Photos of life/2017-6-30口試聚餐改.jpg";
import life2 from "../img/Photos of life/2018畢業口試聚餐改.jpg";
import life3 from "../img/Photos of life/2018實驗室聚餐改.jpg";
import life4 from "../img/Photos of life/109504改.jpg";
import life5 from "../img/Photos of life/img5.jpg";
import life6 from "../img/Photos of life/S__1335453改.jpg";
import life7 from "../img/Photos of life/畢業照2020_06_03改.jpg";
import life8 from "../img/Photos of life/畢業照2020_06_03(2)改.jpg";
import life9 from "../img/Photos of life/S__21143570改.jpg";
import life10 from "../img/Photos of life/2020.9月聚餐-改.jpg";
import life11 from "../img/Photos of life/尾牙.jpg";
import life12 from "../img/Photos of life/Alumu.jpg";
import life13 from "../img/Photos of life/iris2020.jpg";
import life14 from "../img/Photos of life/birth.jpg";
import life15 from "../img/Photos of life/2021.08.17畢業聚餐.jpeg";
import "antd/dist/antd.css";

import Slider from "react-slick";

export const About_HSIPL = () => {
  const settings_slider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <>
    <div className="all_life">
      <Slider className="life_Slider" autoplay {...settings_slider} >
          
          <div>
            <img id="life" src={life15} alt="life1" />
          </div>
          <div>
            <img id="life" src={life14} alt="life1" />
          </div>
          <div>
            <img id="life" src={life13} alt="life1" />
          </div>
          <div>
            <img id="life" src={life12} alt="life1" />
          </div>
          <div>
            <img id="life" src={life11} alt="life1" />
          </div>
          <div>
            <img id="life" src={life1} alt="life1" />
          </div>
          <div>
            <img id="life" src={life2} alt="life2" />
          </div>
          <div>
            <img id="life" src={life3} alt="life3" />
          </div>
          <div>
            <img id="life" src={life4} alt="life4" />
          </div>
          <div>
            <img id="life" src={life5} alt="life5" />
          </div>
          <div>
            <img id="life" src={life6} alt="life6" />
          </div>
          <div>
            <img id="life" src={life7} alt="life7" />
          </div>
          <div>
            <img id="life" src={life8} alt="life8" />
          </div>
          <div>
            <img id="life" src={life9} alt="life9" />
          </div>
          <div>
            <img id="life" src={life10} alt="life10" />
          </div>
        </Slider>
      </div>
      <div className="LabDirector" id="LabDirector">
        <div className="Background">
          <span className="title">About HSIPL</span>
          <div className="Hsipl">
            <div className="Icon">
              <img src={camera} href="#" alt="camera"></img>
              <h>
                HyperSpectral
                <br />
                Imaging
              </h>
            </div>
            <div className="Content">
              <p>
                We dedicated to design and develop algorithms for multi or
                hyperspectral, specifically for image classification, and target
                detection.
              </p>
            </div>
          </div>
          <div className="App">
            <div className="Icon">
              <img src={app} href="#" alt="app"></img>
              <h>
                Mobile
                <br />
                Application
              </h>
            </div>
            <div className="Content">
              <span>specifically for for image amd classification, and </span>
              <p>
                We develop the design and function implementation of mobile
                application.
              </p>
              {/* <span>specifically for for image amd classification, and </span> */}
            </div>
          </div>
          <div className="Web">
            <div className="Icon">
              <img src={web} href="#" alt="web"></img>
              <h>
                Web
                <br />
                Development
              </h>
            </div>
            <div className="Content">
              <span>specifically for for image amd classification, and </span>
              <p>
                We develop the design and function implementation of web pages.
                {/* <span>specifically for for image amd classification, and </span> */}
              </p>
            </div>
          </div>
        </div>
        <span className="title1">About HSIPL</span>
        <div className="Introduction" id="Introduction">
          <div className="content_AH">
            <video muted autoPlay controls>
              <source
                src={
                  "https://video.wixstatic.com/video/096150_1449a5a33d164b1a9b2a81f95b734c82/1080p/mp4/file.mp4"
                }
                type="video/mp4"
              />
            </video>

            <div className="about">
              <p className="videocontent">
                　The Hyperspectral Signal and Image Processing Laboratory
                (HSIPL), founded in Sept. 2014, is under the direction of Dr.
                Shih-Yu Chen. HSIPL is dedicated to design and develop
                algorithms for multi or hyperspectral, medical and satellite
                images, specifically for image classification, endmember finding
                and target detection. In particular, we have wide interests in
                various research topics for multi or hyperspectral applications.
              </p>
            </div>
          </div>
          <div className="red">
            <span>
              希望找指導教授之學生請注意:
              Email請註明正取或備取名次，並附上個人基本資料履歷(包含熟悉之語言、曾做過之專題題目等)以及成績單，謝謝。
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
