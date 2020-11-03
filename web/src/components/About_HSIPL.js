import React from "react";
import "./About_HSIPL.scss";
import camera from "../img/LabDirector/camera.png";
import app from "../img/LabDirector/mobile.png";
import web from "../img/LabDirector/web.png";

export const About_HSIPL = () => {
  return (
    <>
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
          <div className="content">
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
