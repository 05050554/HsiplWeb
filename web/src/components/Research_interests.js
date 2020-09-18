import React from 'react'
import './Research_interests.scss'
import leaf from '../img/Research interests/新生葉偵測結果示意圖.png'
import img1 from '../img/Research interests/Research interests_圖一.png'
import img2 from '../img/Research interests/Research interests_圖二.png'
import img3 from '../img/Research interests/工地圖.png'
import life1 from '../img/Photos of life/2017-6-30口試聚餐.jpg'
import life2 from '../img/Photos of life/2018畢業口試聚餐.jpg'
import life3 from '../img/Photos of life/2018實驗室聚餐.jpg'
import life4 from '../img/Photos of life/109504.jpg'
import life5 from '../img/Photos of life/291816.jpg'
import {Link} from "react-router-dom";

import logo from "../img/LOGO/LOGO_1.png";

const Research_interests = () => {
    return (
        <>
        <div className="top" >
            <a href="HomePage"><img className="logo" src={logo}></img></a> 
            {/* <div className="mark">Hsipl</div> */}
        
            <div className="list">
                <ul>
                    <li><Link id="p1" to="/">Back To Home</Link></li>
                    <li><a id="p1" href='#Research_interests'  style={{ color: "black" }}>Research Interests</a></li>
                    <li><a id="p1" href='#Research_Posters' style={{ color: "black" }}>Research Posters</a></li>
                    <li><a id="p1" href='#Honor and Awards' style={{ color: "black" }}>Honor and Awards</a></li>

                </ul>
            </div>
        </div>

        <div className="slider">
            <div className="slider_container">          
                    <div >
                        <img id="life" src={life1}  />
                        <span className="info">2017-6-30口試聚餐</span>
                    </div>
                    <div >
                        <img id="life" src={life2}  />
                        <span className="info">2018畢業口試聚餐</span>
                    </div>
                    <div>
                        <img id="life" src={life3}  />
                        <span className="info">2018實驗室聚餐</span>
                    </div>
                    <div >
                        <img id="life" src={life4}  />
                        <span className="info">109504</span>
                    </div>
                    <div >
                        <img id="life" src={life5} alt="pure css3 slider" />
                        <span className="info">291816交流會</span>
                    </div>            
            </div>
        </div>
        <div  className="button-borderM">
                <button  type="button" className="top-buttonM"><a id="p3" href="#" >
                <i class="fas fa-chevron-up"></i>
                <span><br></br>top</span>
                </a></button>
            </div>

        <div className="Research_interests" id="Research_interests">
            <h1 className="Title">Research interests</h1>
            <span>My main research has been focused on designing and developing algorithms for 
                multi/hyperspectral image and medical image processing, specifically for image classification, 
                endmember finding and virtually dimensionality (VD). For hyperspectral image, 
                this field is considered as a fast growing area and its related technologies have been widely used in many applications, 
                such as food safety and inspection in agriculture, mineral mapping in geology, land use/cover classification, 
                ecology monitoring, chemical defense, law enforcement, military defense, and medical imaging, etc. 
                The main themes of my Ph.D. dissertation are algorithm design and analysis for hyperspectral endmember finding.
            </span>
            <span className="Ch">陳士煜老師近五年執行科技部計畫之研究成果在高光譜遙測影像技術發展上成果豐碩，其相關SCI 期刊論文已有13 篇，
                尤其發表11篇於遙測領域期刊，多數IF都超過3以上，其中2018 發表的ISPRS JOURNAL更是IF高達7.31之期刊，
                2018-2019 發表三篇於Remote Sensing，其IF也是高達4.50之期刊。
            </span>

            <div className="Article">
                <div className="content">
                    <span>除研算法的研發外，陳士煜老師也致力推廣高光譜的應用面並與產業界結合，目前與五鈴光學合作以「手持式近紅外和拉曼光譜儀」
                        為工具，結合手機、APP應用程式、演算法與資料庫，進行水果、穀物、塑料、藥品、膚質、液態等快篩檢測，同時可依需求調整而應用於
                        製程分析技術 PAT（Process Analytical Technology）與工業4.0領域，對民生用品與工業快篩檢測技術發掘更多市場商機，
                        目前成功技術轉移金額20萬與產學合作金額140萬元，未來也會持續與五鈴光學共同合作開發新技術在智慧農業與智慧製造的產業升級。
                    </span>
                    <span><img src={img1}></img></span>
                </div>
                
            </div>

            <div className="Article">
                <h1>2020年</h1>
                <div className="content">
                    <span>與諾錡有限公司合作開發行動版高光譜資料收集系統此系統整合資料庫、雲端演算法、APP、物聯網、大數據等技術，
                        可即時彙整並處理高光譜訊號，整合數據資訊提供使用者在高光譜資料蒐集的數位化與智慧化。
                    </span>
                    <span><img src={img2}></img></span>
                </div>
                <div className="content">
                    <span>與坤眾科技股份有限公司開發道路挖掘監視系統，可於道路挖掘當下錄影存證，也試驗於道路挖掘透過攝影建置傾斜攝影建模，
                        所得的模型可成為道路挖掘之地底管線的現況紀錄，提供日後補正與量測使用，透過影像辨識技術，其辨識成果將協助提升施工品質或竣工文件品質。
                        目前成功技術轉移金額5萬與產學合作金額35萬元。
                    </span>
                    <span><img src={img3}></img></span>
                </div>
            </div>

            <div className="Article" id="article_leaf">
                <h1>2018-2019年</h1>
                <div className="content">
                    
                    <span>研發智慧森林新生葉偵測新技術發表三篇論文於遙測領域SCI期刊 : 
                        有效量化新生葉芽數量，此項新技術為環境監控與全球暖化議題提供重要訊息與幫助。
                    </span>
                    <span><img src={leaf}></img></span>
                </div>
                
            </div>


            <div className="Article">
                <h1>2015-2016年</h1>
                <div className="content"  id="content_1516">
                    <span>2015年發展滑動視窗異物偵測技術(Anomaly Detection Usin Causal Sliding Windows)，此項新技術對未來發展即時系統以及
                        即時訊號傳輸將有創新性突破。
                    </span>
                    <span>另外 2015 年也發展遞迴式自動化目標物產生過程(Recursive Automatic Target Generation Process)
                        有效降低 計算複雜度及訊號傳輸時間。
                    </span>
                    <span>2015年與農業試驗所合作發展運用高光譜技術檢測農藥殘留之研究，以高光譜感測器掃描果實，取得果實的光譜資訊，
                        透過高光譜分析技術來辨別果實上的農藥殘留情形，此項新技術將為食品安全問題帶來另一套新的解決辦法。
                    </span>
                    <span>2016年發展高光譜端元擷取技術(Comparative Study and Analysis Among ATGP, VCA, 
                        and SGA for Finding Endmembers in Hyperspectral Imagery)在非監督式影像偵測和分類技術上帶來重要影響。
                    </span>
                </div>
            </div>
            
            
        </div>
        </>
    )
}

export default Research_interests;
