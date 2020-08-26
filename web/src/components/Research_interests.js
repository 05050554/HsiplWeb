import React from 'react'
import './Research_interests.scss'
import article1 from '../img/article1.webp'


const Research_interests = () => {
    return (
        <div className="Research_interests">
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
            <div className="Article1">
                <span>2018-2019年研發智慧森林新生葉偵測新技術發表三篇論文於遙測領域SCI期刊 : 
                    有效量化新生葉芽數量，此項新技術為環境監控與全球暖化議題提供重要訊息與幫助。
                </span>
                <img src={article1}></img>
            </div>
            
        </div>
    )
}

export default Research_interests;
