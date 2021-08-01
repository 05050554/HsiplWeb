import React, { useState } from "react";
import "./Honor.scss";
import Modal from "@material-ui/core/Modal";

import img20201103 from "../img/Honor/2020-1103.jpg";
import img20191204 from "../img/Honor/2019-1204.jpg";
import img20191108 from "../img/Honor/2019-1108.jpg";
import img20191031 from "../img/Honor/2019-1031.jpg";
import img20191031_1 from "../img/Honor/2019-1031-1.jpg";
import img20190713 from "../img/Honor/2019-0713.png";
import img20181212 from "../img/Honor/2018-1212.png";
import img20181212_1 from "../img/Honor/2018-1212-1.png";
import img20181123 from "../img/Honor/2018-1123.png";
import img20181123_1 from "../img/Honor/2018-1123-1.png";
import img20180628 from "../img/Honor/2018-0628.png";
import img2017 from "../img/Honor/2017.jpg";
import img20170624 from "../img/Honor/2017-0624.jpg";
import img20170513 from "../img/Honor/2017-0513.jpg";
import img20170426 from "../img/Honor/2017-0426.jpg";
import img20170329 from "../img/Honor/2017-0329.jpg";
import img201703 from "../img/Honor/2017-03.jpeg";
import img20161215 from "../img/Honor/2016-1215.jpg";
import img20161214 from "../img/Honor/2016-1214.jpeg";
import img20160426 from "../img/Honor/2016-0426.jpg";
import img20151216 from "../img/Honor/2015-1216.jpg";
import img20151120 from "../img/Honor/2015-1120.jpg";
import img20151105 from "../img/Honor/2015-1105.jpg";
// import Zmage from "react-zmage";
import 'antd/dist/antd.css';
import { Image } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Fade } from "@material-ui/core";

const Honer = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //   const teststy ={
  //       slidesToShow:2,
  //       slidesToScroll:1
  //   }
  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <i
          class="fas fa-chevron-circle-right"
          style={{ alignSelf: "center" }}
        ></i>
      ) : (
        <i
          class="fas fa-chevron-circle-left"
          style={{ alignSelf: "center" }}
        ></i>
      );
    return (
      <span
        style={{ alignSelf: "center" }}
        className={className}
        onClick={props.onClick}
      >
        {char}
      </span>
    );
  }

  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div className="honor" id="honor">
      <div className="Title_Honor">
        <h1>Honor and Awards</h1>
      </div>

      <div className="picborder" id="picborder">
        {/* <span className="arrow1"><i id="slide"  class="fas fa-angle-left" ></i></span> */}

        <Slider
          className="H_A_div"
          id="H_A_div"
          {...settings}
          nextArrow={<Arrow type="next" />}
          prevArrow={<Arrow type="prev" />}
        >
          <div className="pic_hon" id="secondpic">
              <div className="all">
            {/* <img src={img20201103} alt="img20201103"  onClick={()=>Zmage.browsing({src:img20201103})}></img> */}
            <Image src={img20201103} alt="img20201103"/>
            <div className="detail_hon">
              <h4>2020-11/03​</h4>
              <h3>
                本實驗室鄭才毅、鄭友智、鄒學緯、王美雲
                參與2020雲創盃智慧生活創意應用競賽 決賽入選
                <br /> 
                題目：<span className="name">高光譜花生瑕疵檢測分類</span>
                <br />
                新聞採訪：
                <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/6qvTLNq84AU?t=87">
                  雲創盃創新競賽
                </a>
              </h3>
            </div>
            </div>
          </div>
          <div className="pic_hon" id="thirdpic">
            <div className="all">
              {/* <img src={img20191204} alt="img20191204" onClick={()=>Zmage.browsing({src:img20191204})}></img> */}
              <Image src={img20191204} alt="img20191204"/>
              <div className="detail_hon">
                <h4>2019-12/04​</h4>
                <h3>
                  本實驗室專題生張晴凱、朱育承榮獲2019年專題競賽暨成果發表觀摩會
                  <span className="red">第三名</span>
                  <br></br>
                  題目：<span className="name">臺灣好所在</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="pic_hon" id="fourthpic">
            <div className="all">
              {/* <img
                className="big_pic"
                src={img20191108}
                alt="img20191108"
                onClick={()=>Zmage.browsing({src:img20191108})}
              ></img> */}
               <Image  className="big_pic" src={img20191108} alt="img20191108"/>
              <div className="detail_hon">
                <h4>2019-11/08</h4>
                <h3>
                  本實驗室獲政大大學報採訪與報導​，華視新聞台轉發<br></br>主題：
                  <span className="name">
                    蟲蛀咖啡豆外觀難辨 高光譜提升檢測品質
                  </span>
                  <br></br>連結：
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://news.cts.com.tw/unews/campus/201911/201911081980476.html"
                  >
                    華視新聞台
                  </a>
                  ，
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://unews.nccu.edu.tw/unews/%ef%bc%88f%ef%bc%89%e9%81%8b%e7%94%a8%e9%ab%98%e5%85%89%e8%ad%9c%e5%bd%b1%e5%83%8f%e6%99%ba%e6%85%a7%e8%be%a8%e8%ad%98%e6%8a%80%e8%a1%93%e6%96%bc%e5%92%96%e5%95%a1%e8%b1%86%e7%91%95%e7%96%b5%e6%aa%a2/"
                  >
                    政大大學報
                  </a>
                </h3>
              </div>
            </div>
          </div>
          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img
                className="big_pic"
                src={img20191031}
                alt="img20191031"
                onClick={()=>Zmage.browsing({src:img20191031})}
              ></img> */}
              <Image  className="big_pic" src={img20191031} alt="img20191031"/>
              <div className="detail_hon">
                <h4>2019-10/31</h4>
                <h3>
                  本實驗室歐承學同學、許寓鈞同學榮獲<br></br>
                  2019雲科智慧生活創新應用競賽<span className="red">佳作</span>
                  <br></br>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img
                className="big_pic"
                src={img20191031_1}
                alt=" img20191031_1"
                onClick={()=>Zmage.browsing({src:img20191031_1})}
              ></img> */}
              <Image  className="big_pic" src={img20191031_1} alt=" img20191031_1"/>
              <div className="detail_hon">
                <h4>2019-10/31</h4>
                <h3>
                  本實驗室王津澤同學、邱明豐同學、鄭友智同學榮獲2019雲科智慧生活創新應用競賽
                  <span className="red">最佳商品化獎</span>
                  <br></br>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img20190713} alt="img20190713" onClick={()=>Zmage.browsing({src:img20190713})}></img> */}
              <Image src={img20190713} alt="img20190713"/>
              <div className="detail_hon">
                <h4>2019-07/13</h4>
                <h3>
                  本實驗室陳士煜教師與實驗室研究生榮獲 2019 IEEE ICKII{" "}
                  <span className="red">BEST CONFERENCE PAPER AWARD</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img20181212} alt="img20181212"  onClick={()=>Zmage.browsing({src:img20181212})}></img> */}
              <Image src={img20181212} alt="img20181212"/>
              <div className="detail_hon">
                <h4>2018-12/12</h4>
                <h3>
                  ​本實驗室林宣昂同學、李政瑩同學榮獲2018年實務專題競賽暨成果發表觀摩會
                  <span className="red">最佳人氣獎!​​</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img20181212_1} alt="img20181212_1" onClick={()=>Zmage.browsing({src:img20181212_1})}></img> */}
              <Image src={img20181212_1} alt="img20181212_1"/>
              <div className="detail_hon">
                <h1>2018-12/12</h1>
                <h3>
                  本實驗室林宣昂同學、李政瑩同學榮獲2018年實務專題競賽暨成果發表觀摩會
                  <span className="red">佳作!</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img20181123} alt="img20181123" onClick={()=>Zmage.browsing({src:img20181123})}></img> */}
              <Image src={img20181123} alt="img20181123"/>
              <div className="detail_hon">
                <h1>2018-11/23</h1>
                <h3>
                  本實驗室陳士煜教師榮獲雲科智慧城市創意應用競賽
                  <span className="red">佳作!</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img20181123_1} alt="img20181123_1" onClick={()=>Zmage.browsing({src:img20181123_1})}></img> */}
              <Image src={img20181123_1} alt="img20181123_1" />
              <div className="detail_hon">
                <h1>2018-11/23</h1>
                <h3>
                  ​本實驗室陳士煜教師榮獲雲科智慧城市創意應用競賽
                  <span className="red">銅獎!​​</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img20180628} alt="img20180628" onClick={()=>Zmage.browsing({src:img20180628})}></img> */}
              <Image src={img20180628} alt="img20180628" />
              <div className="detail_hon">
                <h1>2018-06/28</h1>
                <h3>
                  本實驗室陳彥中同學、練周典同學榮獲2018 NCWIA{" "}
                  <span className="red">最佳論文獎</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img2017} alt="img2017" onClick={()=>Zmage.browsing({src:img2017})}></img> */}
              <Image src={img2017} alt="img2017" />
              <div className="detail_hon">
                <h1>2017</h1>
                <h3>
                  本實驗室莊尚儒同學榮獲DIGI+Talent 跨域數位人才加速躍升計畫 -
                  DIGI+ 數位新星大賞 　<span className="red">一星大賞</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img20170624} alt="img20170624" onClick={()=>Zmage.browsing({src:img20170624})}></img> */}
              <Image src={img20170624} alt="img20170624" />
              <div className="detail_hon">
                <h1>2017-06/24</h1>
                <h3>
                  ​本實驗室陳士煜教師指導簡澤宇榮獲2017數位生活科技演討會
                  <span className="red">優秀論文獎​​</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img20170513} alt="img20170513" onClick={()=>Zmage.browsing({src:img20170513})}></img> */}
              <Image src={img20170513} alt="img20170513" />
              <div className="detail_hon">
                <h1>2017-05/13~05/17</h1>
                <h3>
                  陳士煜教師榮獲2017 IEEE ICASI{" "}
                  <span className="red">Best Conference Paper Award</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img20170426} alt="img20170426" onClick={()=>Zmage.browsing({src:img20170426})}></img> */}
              <Image src={img20170426} alt="img20170426" />
              <div className="detail_hon">
                <h1>2017-04/26</h1>
                <h3>
                  本實驗室陳士煜教師指導黃柏允、黃捷楷、蔡傑翰、蕭勝榮、戴暉又同學獲得中區技專校院校際聯盟2016年研發成果網路聯合發表會
                  　<span className="red">優等</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img
                className="big_pic"
                src={img20170329}
                alt="img20170329"
                id="img20170329"
                onClick={()=>Zmage.browsing({src:img20170329})}
              ></img> */}
              <Image  className="big_pic" src={img20170329} alt="img20170329" id="img20170329"/>
              <div className="detail_hon">
                <h1>2017-03/29</h1>
                <h3>
                  本實驗室莊尚儒同學榮獲雲林縣106年度
                  <span className="red">大專優秀青年</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img201703} alt="img201703" onClick={()=>Zmage.browsing({src:img201703})}></img> */}
              <Image src={img201703} alt="img201703"/>
              <div className="detail_hon">
                <h1>2017-03</h1>
                <h3>
                  ​本實驗室莊尚儒同學榮獲雲林縣106年度
                  <span className="red">大專優秀青年</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img20161215} alt="img20161215"  onClick={()=>Zmage.browsing({src:img20161215})}></img> */}
              <Image src={img20161215} alt="img20161215"/>
              <div className="detail_hon">
                <h1>2016-12/15~12/17</h1>
                <h3>
                  本實驗室陳士煜教師共同指導榮獲2016 ICS IEEE{" "}
                  <span className="red">Outstanding Paper Award</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img20161214} alt="img20161214" onClick={()=>Zmage.browsing({src:img20161214})}></img> */}
              <Image src={img20161214} alt="img20161214" />
              <div className="detail_hon">
                <h1>2016-12/14</h1>
                <h3>
                  本實驗室陳士煜教師指導戴暉又、黃柏允同學獲得105學年度實務專題競賽
                  <span className="red">佳作</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img20160426} alt="img20160426" onClick={()=>Zmage.browsing({src:img20160426})}></img> */}
              <Image src={img20160426} alt="img20160426" />
              <div className="detail_hon">
                <h1>2016-04/26</h1>
                <h3>
                  ​本實驗室陳士煜教師指導莊尚儒、郭家禎同學獲得中區技專校院校際聯盟2015年研發成果網路聯合發表會
                  <span className="red">佳作</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img20151216} alt="img20151216" onClick={()=>Zmage.browsing({src:img20151216})}></img> */}
              <Image src={img20151216} alt="img20151216" />
              <div className="detail_hon">
                <h1>2015-12/16</h1>
                <h3>
                  本實驗室陳士煜教師指導莊尚儒、郭家禎同學獲得104學年度實務專題競賽
                  <span className="red">佳作</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img20151120} alt="img20151120" onClick={()=>Zmage.browsing({src:img20151120})}></img> */}
              <Image src={img20151120} alt="img20151120" />
              <div className="detail_hon">
                <h1>2015-11/20</h1>
                <h3>
                  本實驗室陳士煜教師指導許景翔、廖聖傑同學獲得2015創客競賽
                  <span className="red">優選</span>
                </h3>
              </div>
            </div>
          </div>

          <div className="pic_hon" id="lastpic">
            <div className="all">
              {/* <img src={img20151105} alt="img20151105" onClick={()=>Zmage.browsing({src:img20151105})}></img> */}
              <Image src={img20151105} alt="img20151105" />
              <div className="detail_hon">
                <h1>2015-11/5~11/7</h1>
                <h3>
                  本實驗室林力瀚同學參加韓國舉辦KAGIS研討會論文 A Modified
                  Watershed Algorithm for LiDAR Image Segmentation得到
                  <span className="red"> Best Paper </span>獎項!
                </h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Honer;
