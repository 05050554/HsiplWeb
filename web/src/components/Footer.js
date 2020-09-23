import React from 'react'
import "./Footer.scss"
import { Descriptions } from 'antd';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="content">
                <Descriptions column={1}>
                
                    <Descriptions.Item label="信箱">sychen@yuntech.edu.tw</Descriptions.Item>
                    <Descriptions.Item label="電話">(work) +886-5-5342601 ext 4514 / (lab) +886-5-5342601 ext 4598</Descriptions.Item>
                    <Descriptions.Item label="地址">國立雲林科技大學 工程五館 EB206</Descriptions.Item>
                    <Descriptions.Item ><i class="far fa-copyright"></i>本網站著作權屬於 國立雲林科技大學 資訊工程學系 高光譜實驗室</Descriptions.Item>
                </Descriptions>
                {/* <span>聯絡信箱：sychen@yuntech.edu.tw<br />聯絡電話：(work) +886-5-5342601 ext 4514 / (lab) +886-5-5342601 ext 4598<br />
                    地址：雲林縣斗六市大學路三段123號 工程五館 EB206<br />本網站著作權屬於 國立雲林科技大學 資訊工程學系 高光譜實驗室</span> */}
            </div>
        </div>
    )
}

export default Footer;