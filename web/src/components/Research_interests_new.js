import React from "react";
import "./Research_interests_new.scss";
// import leaf from "../img/Research interests/leaf.png";
// import img1 from "../img/Research interests/Research interests_圖一.png";
// import img2 from "../img/Research interests/Research interests_圖二.png";
// import img4 from "../img/Research interests/工地圖1.png";
// import peanuts from "../img/Research interests/peanuts.png";
// import flowers from "../img/Research interests/flowers.png";
// import leather from "../img/Research interests/leather.png";
// import meat from "../img/Research interests/meat.png";
// import mango from "../img/Research interests/mango.png";
// import coffee from "../img/Research interests/coffee.png";
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
import life10 from "../img/Photos of life/2020.9月聚餐-改.jpg";


import { BackTop } from "antd";
import { Carousel } from "antd";
import "antd/dist/antd.css";


import CHUN from "../img/Alumnus/10616358_820759444612090_23748230943619158_n.jpg"
import HAN from "../img/Alumnus/10363382_799772786714016_8090633848080665429_n.jpg"
import HUI from "../img/Alumnus/11899141_10206347515145296_1944611839_o.jpg"
import MING from "../img/Alumnus/mmm.jpg"
import YU from "../img/Alumnus/12092413_1051573314882736_1562622761_n.jpg"
import ZHONG from "../img/Alumnus/IMG_62151.jpg"
import RU from "../img/Alumnus/10802017_850184675001565_1431670467203614850_n.jpg"
import YUAN from "../img/Alumnus/17991225_1371888229525465_1133383873462092592_n.jpg"
import DIAN from "../img/Alumnus/10436329_864352043593410_8108478475509244139_n.jpg"
import CHENG from "../img/Alumnus/B10117012.jpg"
import JIE from "../img/Alumnus/28170361_1565896336826751_50997770_o_edited.jpg"
import OU from "../img/Alumnus/40325558_1807635766017799_4000352030055989248_n.jpg"
import LONG from "../img/Alumnus/5351545-2.JPG.jpg"

import { Descriptions } from 'antd';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import logo from "../img/LOGO/LOGO_1.png";

const Research_interests_new = () => {

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
    <>
      <div className="top">
        <Link id="p1" to="/">
          <img className="logo" src={logo}></img>
        </Link>
        {/* <div className="mark">Hsipl</div> */}

        <div className="list">
          <ul>
            <li>
              <Link id="p1" to="/">
                Back To Home
              </Link>
            </li>
            <li>
              <a id="p1" href="#Research_interests">
                Research Interests
              </a>
            </li>
            <li>
              <a id="p1" href="#Research_Posters">
                Research Posters
              </a>
            </li>
            <li>
              <a id="p1" href="#Honor and Awards">
                Honor and Awards
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
        <div>
          <img id="life" src={life10} alt="life10" />
        </div>
      </Carousel>

      <div>
        <BackTop>
          <i class="fas fa-chevron-up">
            <div className="top_button"> TOP</div>
          </i>
        </BackTop>
      </div>

      <div className="members_Al" id="members_Al">
            <div className="Title_Al">
                <h1>Alumnus</h1>
            </div>
            <div className="master2_Al">
                <h2>畢業校友</h2>
            </div>
            <div className="picborder_Al" id="picborder_Al">
            
                <Slider className="masterpic_Al" id="masterpic_Al" {...settings} nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}>
                    <div className="pic_Al" id="firstpic_Al">

                        <img  className="img_Al" id="firstimg_Al"  src={CHUN} alt="CHUN"></img>

                        <div className="detail2_Al" id="firstdetail2_Al">
                        <h4>陳嘉純</h4>
                        <div className="Al_content">
                        <Descriptions column={1}>
                        <Descriptions.Item label="研究方向 ">醫學影像,高光譜影像處理</Descriptions.Item>
                        <Descriptions.Item label="論文題目​ ">​高光譜技術於多光譜影像之新應用-以新生葉芽檢測為例</Descriptions.Item>
                        </Descriptions>
                        </div>
                            <div className="Email_Al">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10317006@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>

                    <div className="pic_Al" id="secondpic_Al">

                        <img src={HAN} alt="HAN"></img>
                        <div className="detail2_Al">
                        <h4>林力瀚​</h4>
                        <div className="Al_content">
                        <Descriptions column={1}>
                        <Descriptions.Item label="研究方向 ">遙測影像處理</Descriptions.Item>
                        <Descriptions.Item label="論文題目​ ">​由圓盤影像提取年輪的技術開發</Descriptions.Item>
                        </Descriptions>
                        </div>
                            <div className="Email_Al">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10317032@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic_Al" id="thirdpic_Al">

                        <img src={HUI} alt="HUI"></img>
                        <div className="detail2_Al">
                        <h4>戴嘉輝</h4>
                        <div className="Al_content">
                        <Descriptions column={1}>
                        <Descriptions.Item label="研究方向 ">高光譜影像處理</Descriptions.Item>
                        <Descriptions.Item label="論文題目​ ">​自適應變動視窗濾波最小能量限制法之目標物檢測技術</Descriptions.Item>
                        </Descriptions>
                        </div>
                            <div className="Email_Al">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10417038@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic_Al" id="fourthpic_Al">

                        <img src={MING} alt="MING"></img>
                        <div className="detail2_Al">
                        <h4>楊富名</h4>
                        <div className="Al_content">
                        <Descriptions column={1}>
                        <Descriptions.Item label="研究方向 ">深度學習</Descriptions.Item>
                        <Descriptions.Item label="論文題目​ ">​基於稀疏矩陣之強化目標偵測</Descriptions.Item>
                        </Descriptions>
                        </div>
                            <div className="Email_Al">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10417036@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>
                    <div className="pic_Al" id="lastpic_Al">

                        <img src={YU} alt="YU"></img>
                        <div className="detail2_Al">
                        <h4>簡澤宇</h4>
                        <div className="Al_content">
                        <Descriptions column={1}>
                        <Descriptions.Item label="研究方向 ">遙測影像處理</Descriptions.Item>
                        <Descriptions.Item label="論文題目​ ">​自動化偵測崩塌地</Descriptions.Item>
                        </Descriptions>
                        </div>
                            <div className="Email_Al">
                                <a href="/#"><i class="fas fa-envelope mail"></i></a>
                                <span>M10417028@yuntech.edu.tw</span>
                            </div>
                        </div>
                    </div>

                  <div className="pic_Al" id="fourthpic_Al">
                      <img src={ZHONG} alt="ZHONG"></img>
                      <div className="detail2_Al">
                      <h4>陳彥中​</h4>
                      <div className="Al_content">
                        <Descriptions column={1}>
                        <Descriptions.Item label="研究方向 ">深度學習,​高光譜影像處理</Descriptions.Item>
                        <Descriptions.Item label="論文題目​ ">​高光譜訊號處理技術應用於藥物分類</Descriptions.Item>
                        </Descriptions>
                        </div>
                          <div className="Email_Al">
                              <a href="/#"><i class="fas fa-envelope mail"></i></a>
                              <span>M10517008@yuntech.edu.tw</span>
                          </div>
                    </div>
                  </div>

                  <div className="pic_Al" id="fourthpic_Al">
                    <img src={RU} alt="RU"></img>
                    <div className="detail2_Al">
                    <h4>莊尚儒</h4>
                    <div className="Al_content">
                        <Descriptions column={1}>
                        <Descriptions.Item label="研究方向 ">高光譜影像處理</Descriptions.Item>
                        <Descriptions.Item label="論文題目​ ">​基於強大的主成分分析法於權重最小能量限制法之目標檢測</Descriptions.Item>
                        </Descriptions>
                        </div>
                        <div className="Email_Al">
                          <a href="/#"><i class="fas fa-envelope mail"></i></a>
                          <span>M10517016@yuntech.edu.tw</span>
                        </div>
                    </div> 
                  </div>

                  <div className="pic_Al" id="fourthpic_Al">
                      <img src={YUAN} alt="YUAN"></img>
                      <div className="detail2_Al">
                      <h4>高哲元</h4>
                      <div className="Al_content">
                        <Descriptions column={1}>
                        <Descriptions.Item label="研究方向 ">高光譜影像處理</Descriptions.Item>
                        <Descriptions.Item label="論文題目​ ">​利用高光譜技術發展農業 4.0─以 評估火鶴花切花之瓶插壽命為例</Descriptions.Item>
                        </Descriptions>
                        </div>
                          <div className="Email_Al">
                              <a href="/#"><i class="fas fa-envelope mail"></i></a>
                              <span>M10617003@yuntech.edu.tw</span>
                          </div>
                    </div>
                  </div>

                  <div className="pic_Al" id="fourthpic_Al">
                    <img src={DIAN} alt="DIAN"></img>
                    <div className="detail2_Al">
                    <h4>練周典</h4>
                    <div className="Al_content">
                        <Descriptions column={1}>
                        <Descriptions.Item label="研究方向 ">高光譜影像處理</Descriptions.Item>
                        <Descriptions.Item label="論文題目​ ">​應用高光譜技術發展農業4.0-以咖啡豆品質管理為例</Descriptions.Item>
                        </Descriptions>
                        </div>
                        <div className="Email_Al">
                          <a href="/#"><i class="fas fa-envelope mail"></i></a>
                          <span>M10617013@yuntech.edu.tw</span>
                        </div>
                    </div> 
                  </div>

                  <div className="pic_Al" id="fourthpic_Al">
                    <img src={CHENG} alt="CHENG"></img>
                    <div className="detail2_Al">
                    <h4>張育誠</h4>
                    <div className="Al_content">
                        <Descriptions column={1}>
                        <Descriptions.Item label="研究方向 ">高光譜影像處理</Descriptions.Item>
                        <Descriptions.Item label="論文題目​ ">​衛星遙測影像去雜訊分類樹林區域監測紅樹林</Descriptions.Item>
                        </Descriptions>
                        </div>
                        <div className="Email_Al">
                          <a href="/#"><i class="fas fa-envelope mail"></i></a>
                          <span>M10517002@yuntech.edu.tw</span>
                        </div>
                    </div> 
                  </div>

                  <div className="pic_Al" id="fourthpic_Al">
                    <img src={JIE} alt="JIE"></img>
                    <div className="detail2_Al">
                    <h4>李冠杰​</h4>
                    <div className="Al_content">
                        <Descriptions column={1}>
                        <Descriptions.Item label="研究方向 ">高光譜影像處理</Descriptions.Item>
                        <Descriptions.Item label="論文題目​ ">​基於影像增強之深度學習方法進行遙測影像新生葉芽檢測</Descriptions.Item>
                        </Descriptions>
                        </div>
                        <div className="Email_Al">
                          <a href="/#"><i class="fas fa-envelope mail"></i></a>
                          <span>M10717003@yuntech.edu.tw</span>
                        </div>
                    </div> 
                  </div>

                  <div className="pic_Al" id="fourthpic_Al">
                    <img src={OU} alt="OU"></img>
                    <div className="detail2_Al">
                    <h4>歐承學</h4>
                    <div className="Al_content">
                        <Descriptions column={1}>
                        <Descriptions.Item label="研究方向 ">高光譜影像處理</Descriptions.Item>
                        <Descriptions.Item label="論文題目​ ">​高光譜自動化咖啡生豆瑕疵檢測系統 - 以蟲蛀豆為例</Descriptions.Item>
                        </Descriptions>
                        </div>
                        <div className="Email_Al">
                          <a href="/#"><i class="fas fa-envelope mail"></i></a>
                          <span>M10717033@yuntech.edu.tw</span>
                        </div>
                    </div> 
                  </div>

                  <div className="pic_Al" id="fourthpic_Al">
                    <img src={LONG} alt="LONG"></img>
                    <div className="detail2_Al">
                    <h4>楊雯隆</h4>
                    <div className="Al_content">
                        <Descriptions column={1}>
                        <Descriptions.Item label="研究方向 ">高光譜影像處理</Descriptions.Item>
                        <Descriptions.Item label="論文題目​ ">​自動化高光譜皮革瑕疵檢測技術</Descriptions.Item>
                        </Descriptions>
                        </div>
                        <div className="Email_Al">
                          <a href="/#"><i class="fas fa-envelope mail"></i></a>
                          <span>M10717038@yuntech.edu.tw</span>
                        </div>
                    </div> 
                  </div>

                </Slider>
              
            </div>



      {/* <div className="Research_interests" id="Research_interests">
        <h1 className="Title">Research interests</h1>
        <span>
          My main research has been focused on designing and developing
          algorithms for multi/hyperspectral image and medical image processing,
          specifically for image classification, endmember finding and virtually
          dimensionality (VD). For hyperspectral image, this field is considered
          as a fast growing area and its related technologies have been widely
          used in many applications, such as food safety and inspection in
          agriculture, mineral mapping in geology, land use/cover
          classification, ecology monitoring, chemical defense, law enforcement,
          military defense, and medical imaging, etc. The main themes of my
          Ph.D. dissertation are algorithm design and analysis for hyperspectral
          endmember finding.
        </span>
        <span className="Ch">
          陳士煜老師近五年執行科技部計畫之研究成果在高光譜遙測影像技術發展上成果豐碩，其相關SCI
          期刊論文已有13 篇，
          尤其發表11篇於遙測領域期刊，多數IF都超過3以上，其中2018 發表的ISPRS
          JOURNAL更是IF高達7.31之期刊， 2018-2019 發表三篇於Remote
          Sensing，其IF也是高達4.50之期刊。
        </span>
        <div className="article">
          <div className="Item">
            <h1>智慧農業與智慧製造</h1>
            <img src={img1} alt="img1"></img>
            <h3>
                除研算法的研發外，陳士煜老師也致力推廣高光譜的應用面並與產業界結合，目前與五鈴光學合作以「手持式近紅外和拉曼光譜儀」
                為工具，結合手機、APP應用程式、演算法與資料庫，進行水果、穀物、塑料、藥品、膚質、液態等快篩檢測，同時可依需求調整而應用於
                製程分析技術 PAT（Process Analytical
                Technology）與工業4.0領域，對民生用品與工業快篩檢測技術發掘更多市場商機，
                目前成功技術轉移金額20萬與產學合作金額140萬元，未來也會持續與五鈴光學共同合作開發新技術在智慧農業與智慧製造的產業升級。
            </h3>
          </div>
          <div className="Item">
            <h1>行動版高光譜資料收集系統</h1>
            <img src={img2} alt="img2"></img>
            <h3>
              與諾錡有限公司合作開發行動版高光譜資料收集系統此系統整合資料庫、雲端演算法、APP、物聯網、大數據等技術，
              可即時彙整並處理高光譜訊號，整合數據資訊提供使用者在高光譜資料蒐集的數位化與智慧化。
            </h3>
          </div>
          <div className="Item">
            <h1>道路施工檢測系統</h1>
            <img src={img4} alt="img3"></img>
            <h3>
              與坤眾科技股份有限公司開發道路挖掘監視系統，可於道路挖掘當下錄影存證，也試驗於道路挖掘透過攝影建置傾斜攝影建模，
              所得的模型可成為道路挖掘之地底管線的現況紀錄，提供日後補正與量測使用，透過影像辨識技術，其辨識成果將協助提升施工品質或竣工文件品質。
              目前成功技術轉移金額5萬與產學合作金額35萬元。
            </h3>
          </div>
          <div className="Item">
            <h1>智慧森林新生葉偵測技術</h1>
            <img src={leaf} alt="leaf"></img>
            <h3>
              研發智慧森林新生葉偵測新技術發表三篇論文於遙測領域SCI期刊 :
              有效量化新生葉芽數量，此項新技術為環境監控與全球暖化議題提供重要訊息與幫助。
            </h3>
          </div>
          <div className="Item">
            <h1>咖啡瑕疵豆檢測</h1>
            <img src={coffee} alt="coffee"></img>
            <h3>
              實際品質：前三排品質良好，後三排品質不良
              預測品質：綠色為好豆選中，紅色為好豆沒選中，藍色為壞豆選中，黃色為壞豆沒選中
              預測結果約在95%
            </h3>
          </div>
          <div className="Item">
            <h1>花生品質檢測</h1>
            <img src={peanuts} alt="peanuts"></img>
            <h3>
              實際品質：前三排品質良好，後三排品質不良
              預測品質：米色品質良好，洋紅色品質不良 預測結果約在85~90%
            </h3>
          </div>
          <div className="Item">
            <h1>皮革瑕疵檢測</h1>
            <img src={leather} alt="leather"></img>
            <h3>
              實際品質：左邊為烙印瑕疵，右邊為爛珠面 預測品質：
              紅色為選中瑕疵點，黃色為未選中瑕疵點 藍色為非瑕疵卻選為瑕疵點
              預測結果烙印約在91~93%，爛珠面約在97~99%
            </h3>
          </div>
          <div className="Item">
            <h1>漢堡肉排異物檢測</h1>
            <img src={meat} alt="meat"></img>
            <h3>
              漢堡排在生產過程中，在少數的情況下會參雜一些異物(如頭髮、塑膠片、沒有煮熟的肉塊)，因此使用影像檢測技術檢測異物。
            </h3>
          </div>
          <div className="Item">
            <h1>蝴蝶蘭疫病檢測</h1>
            <img src={flowers} alt="flowers"></img>
            <h3>
              實際品質：左邊為有病毒之植株，右邊為健康植株 預測品質：
              紅色為含有病毒，綠色為無病毒 預測結果約在71~75%
            </h3>
          </div>
          <div className="Item">
            <h1>芒果受傷區域檢測</h1>
            <img src={mango} alt="mango"></img>
            <h3>
              上圖為原始高光譜圖在第150波段下的影像<br/>
              下圖為經過SAM演算法找到的瑕疵區域
            </h3>
          </div>
        </div>
      </div>*/}
      </div> 
    </>
  );
};

export default Research_interests_new;
