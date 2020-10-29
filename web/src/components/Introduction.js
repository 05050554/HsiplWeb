import React from "react";
import "./Introduction.scss";

const Introduction = () => {
  return (
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
          <span>
            The Hyperspectral Signal and Image Processing Laboratory (HSIPL),
            founded in Sept. 2014, is under the direction of Dr. Shih-Yu Chen.
            HSIPL is dedicated to design and develop algorithms for
            multi/hyperspectral, medical and satellite images, specifically for
            image classification, endmember finding and target detection. In
            particular, we have wide interests in various research topics for
            multi/hyperspectral applications.
          </span>
        </div>
        <span className="title">About HSIPL</span>
      </div>
    </div>
  );
};

export default Introduction;
