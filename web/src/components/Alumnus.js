import React from "react";
import "./Alumnus.scss";
import { Link } from "react-router-dom";
import life1 from "../img/Photos of life/2017-6-30口試聚餐改.jpg";
import life2 from "../img/Photos of life/2018畢業口試聚餐改.jpg";
import life3 from "../img/Photos of life/2018實驗室聚餐改.jpg";
import life4 from "../img/Photos of life/109504改.jpg";
import life5 from "../img/Photos of life/img5.jpg";
import life6 from "../img/Photos of life/S__1335453改.jpg";
import life7 from "../img/Photos of life/畢業照2020_06_03改.jpg";
import life8 from "../img/Photos of life/畢業照2020_06_03(2)改.jpg";
import life9 from "../img/Photos of life/S__21143570改.jpg";
import { BackTop } from "antd";
import { Carousel } from "antd";
import "antd/dist/antd.css";

import logo from "../img/LOGO/LOGO_1.png";

const Alumnus = () => {
  
  return (
    <>
      <div className="top">
        <Link id="p1" to="/">
          <img className="logo" src={logo}></img>
        </Link>
        {/* <div className="mark">Hsipl</div> */}

        <div className="list">
          <ul>
            <li>
              <Link id="p1" to="/" >
                Back To Home
              </Link>
            </li>
            <li>
              <a id="p1" href="#Alumnus">
                Alumnus
              </a>
            </li>
            <li>
              <a id="p1" href="#Research_Posters">
              Research Posters
              </a>
            </li>
            <li>
              <a id="p1" href="#Equipment">
                Equipment
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Carousel autoplay>
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
      </Carousel>

      <div>
        <BackTop>
          <i class="fas fa-chevron-up">
            <div className="top_button"> TOP</div>
          </i>
        </BackTop>
      </div>
    </>
  );
};

export default Alumnus;
