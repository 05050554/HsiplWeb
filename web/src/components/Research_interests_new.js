import React from "react";
import "./Research_interests_new.scss";
import leaf from "../img/Research interests/leaf.png";
import img1 from "../img/Research interests/Research interests_圖一.png";
import img2 from "../img/Research interests/Research interests_圖二.png";
import img3 from "../img/Research interests/工地圖.png";
import img4 from "../img/Research interests/工地圖1.png";
import peanuts from "../img/Research interests/peanuts.png";
import flowers from "../img/Research interests/flowers.png";
import leather from "../img/Research interests/leather.png";
import meat from "../img/Research interests/meat.png";
import mango from "../img/Research interests/mango.png";
import coffee from "../img/Research interests/coffee.png";
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

const Research_interests_new = () => {
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
      </Carousel>

      <div>
        <BackTop>
          <i class="fas fa-chevron-up">
            <div className="top_button"> TOP</div>
          </i>
        </BackTop>
      </div>

      <div className="Research_interests" id="Research_interests">
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
      </div>
    </>
  );
};

export default Research_interests_new;
