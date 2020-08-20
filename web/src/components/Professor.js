import React from 'react'
import "./Professor.scss"
import Professor_img from "../img/Professor_img.jpg"
import Mail_img from "../img/Mail_img.png"
import Call_img from "../img/Call_img.png"

const Professor = () => {
    return (
        <div className="Professor">
            <div className="Pic">
                <span>Professor</span>
                <img src={Professor_img} width={'60%'} height={'auto'} ></img>
            </div>
            <div className="Info">
                <div  className="Name"><span>Associate Professor</span><span>Chen, Shih-Yu</span><span>陳士煜</span></div>
                <span>Department of Computer Science and Information Engineering</span>
                <span>National Yunlin University of Science and Technology</span>
                <span className="Mail"><img src={Mail_img} width={'7%'} height={'7%'}></img>sychen@yuntech.edu.tw</span>
                <div className="Phone">
                    <span className="Number"><img src={Call_img} width={'8%'} height={'8%'}></img>
                        (work)   +886-5-5342601 ext 4514
                        <br></br>(lab)      +886-5-5342601 ext 4598    
                    </span>
                    <p className="Btn-more" href="#">More</p>
                </div>
            </div>
            {/* <div className="More">
                    <span className="Btn-more" href="#">More</span>
            </div> */}
            
        </div>
    )
}

export default Professor;
