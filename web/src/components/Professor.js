import React from 'react'
import "./Professor.scss"
import Professor_img from "../img/Professor/Professor_img.jpg"
import Mail_img from "../img/Professor/Mail_img.png"
import Call_img from "../img/Professor/Call_img.png"

const Professor = () => {
    return (
        <div className="Professor" id="Professor">
            <div className="Pic">
                <span>Professor</span>
                <img src={Professor_img} width={'60%'} height={'auto'} ></img>
            </div>
            <div className="Info">
                <div  className="Name">
                    <span>Associate Professor</span>
                    <span>Chen, Shih-Yu 陳士煜</span>
                </div>
                <span>Department of Computer Science and Information Engineering</span>
                <span>National Yunlin University of Science and Technology</span>
                <div className="Mail">
                    <img src={Mail_img} ></img>
                    <span >sychen@yuntech.edu.tw</span>
                </div>
                <div className="Phone">
                    <img src={Call_img} ></img>
                    <span className="Number">(work) +886-5-5342601 ext 4514
                        <br></br>(lab) +886-5-5342601 ext 4598    
                    </span>
                    <a className="Btn-more" href="/" style={{color:"black"}}>More</a>
                </div>
            </div>
        </div>
    )
}

export default Professor;
