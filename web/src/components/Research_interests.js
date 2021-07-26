import React from "react";
import "./Research_interests.scss";
import leaf from "../img/Research interests/leaf.png";
import light50 from "../img/Research interests/Research interests_圖一.png";
import norchi from "../img/Research interests/Research interests_圖二.png";
import gis from "../img/Research interests/吉普斯1.png";
import peanuts from "../img/Research interests/peanuts.png";
import flowers from "../img/Research interests/flowers.png";
import leather from "../img/Research interests/leather.png";
import meat from "../img/Research interests/meat.png";
import mango from "../img/Research interests/mango.png";
import coffee from "../img/Research interests/coffee.png";
 
import 'antd/dist/antd.css';
import Zmage from "react-zmage";

import roadmp4 from "../img/Research interests/road.mp4";

import "antd/dist/antd.css";

const Research_interests = () => {
    return (
        
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
        {/* <span className="Ch">
          陳士煜老師近五年執行科技部計畫之研究成果在高光譜遙測影像技術發展上成果豐碩，其相關SCI
          期刊論文已有13 篇，
          尤其發表11篇於遙測領域期刊，多數IF都超過3以上，其中2018 發表的ISPRS
          JOURNAL更是IF高達7.31之期刊， 2018-2019 發表三篇於Remote
          Sensing，其IF也是高達4.50之期刊。
        </span> */}
        <div className="article">
          <div className="Item">
            <h1>智慧農業與智慧製造</h1>
            <img src={light50} alt="light50" onClick={()=>Zmage.browsing({src:light50,backdrop:" hsla(0, 0%, 38%, 0.911)"})} ></img>
            <h3>
                除演算法的研發外，陳士煜老師也致力推廣高光譜的應用面並與產業界結合，於2018年起與五鈴光學合作以「高光譜影像技術」
                為工具，結合手機、APP應用程式、演算法與資料庫，進行水果、穀物、塑料、藥品、膚質、液態等快篩檢測，同時可依需求調整而應用於
                製程分析技術 PAT（Process Analytical Technology）與工業4.0領域，對民生用品與工業快篩檢測技術發掘更多市場商機，
                目前成功技術轉移金額25萬與產學合作金額210萬元，未來也會持續與五鈴光學共同合作開發新技術在智慧農業與智慧製造的產業升級。
            </h3>
          </div>
          <div className="Item">
            <h1>行動版高光譜資料收集系統</h1>
            <img src={norchi} alt="norchi" onClick={()=>Zmage.browsing({src:norchi,backdrop:" hsla(0, 0%, 38%, 0.911)"})}></img>
            <h3>
              2020年與諾錡有限公司合作開發行動版高光譜資料收集系統此系統整合資料庫、雲端演算法、APP等技術，可即時彙整並處理高光譜訊號，
              目前成功技術轉移金額5萬與產學合作金額20萬元，目前也繼續與該公司合作開發智慧農業相關計畫加速產業升級。
            </h3>
          </div>
          <div className="Item">
            <h1>道路施工檢測系統</h1>
            <video muted autoPlay controls width="90%">
            <source
              src={roadmp4}
              type="video/mp4"

            />
          </video>
            <h3>
              2020年與坤眾科技股份有限公司開發道路挖掘監視系統，可於道路挖掘當下錄影存證，也試驗於道路挖掘透過攝影建置傾斜攝影建模，
              所得的模型可成為道路挖掘之地底管線的現況紀錄，提供日後補正與量測使用，透過影像辨識技術，其辨識成果協助提升施工品質或竣工文件品質。
              目前成功技術轉移金額5萬與產學合作金額35萬元。
            </h3>
          </div>

          <div className="Item">
            <h1>人工智慧遙測地形圖辨識</h1>
            <img src={gis} alt="gis" onClick={()=>Zmage.browsing({src:gis,backdrop:" hsla(0, 0%, 38%, 0.911)"})}></img>
            <h3>
              2021年與吉普司科技公司合作開發人工智慧遙測地形圖的辨識，以Google衛星影像/農航所影像等更新頻率較快之公開影像來源為根據，透過深度學習技術進行差異化AI比對研究。
            </h3>
          </div>

          <div className="Item">
            <h1>智慧森林新生葉偵測技術</h1>
            <img src={leaf} alt="leaf" onClick={()=>Zmage.browsing({src:leaf,backdrop:" hsla(0, 0%, 38%, 0.911)"})}></img>
            <h3>
              2018-2021年研發智慧森林新生葉偵測新技術發表三篇論文於遙測領域SCI期刊。
              有效量化新生葉芽數量，此項新技術為環境監控與全球暖化議題提供重要訊息與幫助。
            </h3>
          </div>
          <div className="Item">
            <h1>咖啡瑕疵豆檢測</h1>
            <img src={coffee} alt="coffee" onClick={()=>Zmage.browsing({src:coffee,backdrop:" hsla(0, 0%, 38%, 0.911)"})}></img>
            <h3>
              實際品質：前三排品質良好，後三排品質不良
              預測品質：綠色為好豆選中，紅色為好豆沒選中，藍色為壞豆選中，黃色為壞豆沒選中
              預測結果約在95%
            </h3>
          </div>
          <div className="Item">
            <h1>花生品質檢測</h1>
            <img src={peanuts} alt="peanuts" onClick={()=>Zmage.browsing({src:peanuts,backdrop:" hsla(0, 0%, 38%, 0.911)"})}></img>
            <h3>
              實際品質：前三排品質良好，後三排品質不良
              預測品質：米色品質良好，洋紅色品質不良 預測結果約在85~90%
            </h3>
          </div>
          <div className="Item">
            <h1>皮革瑕疵檢測</h1>
            <img src={leather} alt="leather" onClick={()=>Zmage.browsing({src:leather,backdrop:" hsla(0, 0%, 38%, 0.911)"})}></img>
            <h3>
              實際品質：左邊為烙印瑕疵，右邊為爛珠面 預測品質：
              紅色為選中瑕疵點，黃色為未選中瑕疵點 藍色為非瑕疵卻選為瑕疵點
              預測結果烙印約在91~93%，爛珠面約在97~99%
            </h3>
          </div>
          <div className="Item">
            <h1>漢堡肉排異物檢測</h1>
            <img src={meat} alt="meat" onClick={()=>Zmage.browsing({src:meat,backdrop:" hsla(0, 0%, 38%, 0.911)"})}></img>
            <h3>
              漢堡排在生產過程中，在少數的情況下會參雜一些異物(如頭髮、塑膠片、沒有煮熟的肉塊)，因此使用影像檢測技術檢測異物。
            </h3>
          </div>
          <div className="Item">
            <h1>蝴蝶蘭疫病檢測</h1>
            <img src={flowers} alt="flowers" onClick={()=>Zmage.browsing({src:flowers,backdrop:" hsla(0, 0%, 38%, 0.911)"})}></img>
            <h3>
              實際品質：左邊為有病毒之植株，右邊為健康植株 預測品質：
              紅色為含有病毒，綠色為無病毒 預測結果約在71~75%
            </h3>
          </div>
          <div className="Item">
            <h1>芒果受傷區域檢測</h1>
            <img src={mango} alt="mango" onClick={()=>Zmage.browsing({src:mango,backdrop:" hsla(0, 0%, 38%, 0.911)"})}></img>
            <h3>
              上圖為原始高光譜圖在第150波段下的影像<br/>
              下圖為經過SAM演算法找到的瑕疵區域
            </h3>
          </div>
        </div>
      </div>

  );
};

export default Research_interests;
