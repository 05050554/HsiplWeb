import React from 'react'
import "./Professor1.scss"
import Professor_img from "../img/Professor/Professor_img.jpg"
import logo from "../img/LOGO/LOGO_1.png";
import Mail_img from "../img/Professor/Mail_img.png"
import Call_img from "../img/Professor/Call_img.png"
import { BackTop } from 'antd';
// import 'antd/dist/antd.css';
import { Link } from "react-router-dom";



const Professor1 = () => {
    return (
        <>
            <div className="top_P" >
            
                <div className="list_P">
                <Link id="p1_P" to="/" ><img className="logo_P" src={logo}></img></Link> 
                    <ul>
                        <li><Link id="p1_P" to="/" >Back To Home</Link></li>
                        <li><a id="p1_P" href='#Projects' >Projects</a></li>
                        <li><a id="p1_P" href='#Talks'>Talks</a></li>
                        <li><a id="p1_P" href='#Service' >Service</a></li>
                        <li><a id="p1_P" href='#Conference' >Conference</a></li>
                        <li><a id="p1_P" href='#Awards' >Awards</a></li>
                    </ul>
                </div>
            </div>
            <div className="Professor1" id="Professor">
                <div className="content">
                    <div className="Pic">
                        <span>Professor</span>
                        <img src={Professor_img} width={'60%'} height={'auto'} ></img>
                    </div>
                    <div className="Info">
                        <div className="Name">
                            <span>Associate Professor</span>
                            <span>Chen, Shih-Yu 陳士煜</span>
                        </div>
                        <span>Department of Computer Science and Information Engineering</span>
                        <span>National Yunlin University of Science and Technology</span>
                        <br></br>
                        <span style={{fontSize:'1.25rem'}}>成立 SPIE National Yuntech Univ. Chapter 分會並擔任指導老師</span>
                        <span style={{fontSize:'1.25rem'}}>成立雲科大高光譜遙測工程科技中心，並聘請遙測領域學術大師 Chien-I Chang 擔任講座教授與主持人共同領導研究團隊發展高光譜遙測技術</span>
                        <div className="Mail">
                            <img src={Mail_img} alt="Mail_img"></img>
                            <span >sychen@yuntech.edu.tw</span>
                        </div>
                        <div className="Phone">
                            <img src={Call_img} alt="Call_img"></img>
                            <span className="Number">(work) +886-5-5342601 ext 4514
                            <br></br>(lab) +886-5-5342601 ext 4598</span>
                            <a className="Btn-more" href={'https://scholar.google.com/citations?user=0LxRRawAAAAJ&hl=zh-TW'} target="_blank" rel="noopener noreferrer" >Google Scholar</a>
                        </div>
                    </div>
                </div>

            </div>
            <div>
            <BackTop>
            <i class="fas fa-chevron-up" ><div className="top_button"> TOP</div></i>
            </BackTop>
            </div>

        </>
    )
}

export default Professor1;
