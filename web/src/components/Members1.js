import React from 'react'
import "./Members1.scss";
import girl1 from "../img/members/girl1.jpg"
import girl2 from "../img/members/girl2.jpg"
import girl3 from "../img/members/girl3.jpg"
import girl4 from "../img/members/girl4.jpg"

// var elmnt = document.getElementById("members");

// elmnt.scrollTop = 1000;

// window.scrollTo(0,-1000)

// const button = document.getElementById('slide');

// button.onclick = function () {
//   document.getElementById('container').scrollLeft += 20;
// };


const Members1 = () => {
    window.onload=function(){
    const buttonlf = document.getElementById("slide");
    buttonlf.onclick=function(){
        // document.getElementById("masterpic").scrollLeft -=340;
        document.getElementById("masterpic").scrollBy ({
            top: 0,
            left: -320,
            behavior: 'smooth'
        })
    
    };

    const buttonrt = document.getElementById("slide1");
    buttonrt.onclick=function(){
        // document.getElementById("masterpic").scrollLeft += 330;
        document.getElementById("masterpic").scrollBy ({
            top: 0,
            left: +320,
            behavior: 'smooth'
        })
    };
    
    const buttonlf1 = document.getElementById("slide2");
    buttonlf1.onclick=function(){
        // document.getElementById("masterpic1").scrollLeft -= 330;
        document.getElementById("masterpic1").scrollBy ({
            top: 0,
            left: -340,
            behavior: 'smooth'
        })
    };

    const buttonrt1 = document.getElementById("slide3");
    buttonrt1.onclick=function(){
        // document.getElementById("masterpic1").scrollLeft += 330;
        document.getElementById("masterpic1").scrollBy ({
            top: 0,
            left: +330,
            behavior: 'smooth'
        })
    };

}

// function slide(){
//     var elmnt = document.getElementById("masterpic1");
//     elmnt.scrollLeft += 50;
//     elmnt.scrollTop +=50;

// }

    return (
        
        <div className="members" id="members">
            <div className="Title">
                <h1>Members</h1>
            </div>
            <div className="master2">
                <h2>碩士二年級</h2>
            </div>
            <div className="picborder" id="picborder">
            <span className="arrow1"><i id="slide"  class="fas fa-angle-left" ></i></span>
                <div className="masterpic" id="masterpic">
                    <div className="pic" id="firstpic">
                        <div className="detail" id="firstdetail">
                            <span>Members<br />Developer</span>
                            <span className="mail"><a href="#"><i class="fas fa-envelope mail1"></i></a>abcdefg@gmail.com</span>
                        </div>
                        <img  className="img" id="firstimg" src={girl1} ></img>

                        <div className="detail2" id="firstdetail2">
                            <p3>Members<br /><span>Developer<br /></span>
                                <a href="#"><i class="fas fa-envelope mail"></i></a>
                                <p>abcdefg@gmail.com</p>
                            </p3>
                        </div>
                    </div>

                    <div className="pic">
                        <div className="detail">
                            <span>Members<br />Developer</span>
                            <span className="mail"><a href="#"><i class="fas fa-envelope mail1"></i></a>abcdefg@gmail.com</span>
                        </div>
                        <img src={girl2} ></img>
                        <div className="detail2">
                            <p3>Members<br /><span>Developer<br /></span>
                                <a href="#"><i class="fas fa-envelope mail"></i></a>
                                <p>abcdefg@gmail.com</p>
                            </p3>
                        </div>
                    </div>
                    <div className="pic">
                        <div className="detail">
                            <span>Members<br />Developer</span>
                            <span className="mail"><a href="#"><i class="fas fa-envelope mail1"></i></a>abcdefg@gmail.com</span>
                        </div>
                        <img src={girl3} ></img>
                        <div className="detail2">
                            <p3>Members<br /><span>Developer<br /></span>
                                <a href="#"><i class="fas fa-envelope mail"></i></a>
                                <p>abcdefg@gmail.com</p>
                            </p3>
                        </div>
                    </div>
                    <div className="pic">
                        <div className="detail">
                            <span>Members<br />Developer</span>
                            <span className="mail"><a href="#"><i class="fas fa-envelope mail1"></i></a>abcdefg@gmail.com</span>
                        </div>
                        <img src={girl4} ></img>
                        <div className="detail2">
                            <p3>Members<br /><span>Developer<br /></span>
                                <a href="#"><i class="fas fa-envelope mail"></i></a>
                                <p>abcdefg@gmail.com</p>
                            </p3>
                        </div>
                    </div>
                    <div className="pic">
                        <div className="detail">
                            <span>Members<br />Developer</span>
                            <span className="mail"><a href="#"><i class="fas fa-envelope mail1"></i></a>abcdefg@gmail.com</span>
                        </div>
                        <img src={girl4} ></img>
                        <div className="detail2">
                            <p3>Members<br /><span>Developer<br /></span>
                                <a href="#"><i class="fas fa-envelope mail"></i></a>
                                <p>abcdefg@gmail.com</p>
                            </p3>
                        </div>
                    </div>

                </div>
                <span className="arrow1"><i id="slide1"  class="fas fa-angle-right" ></i></span>
            </div>

            {/* <button  id="slide" type="button">Slide left</button>    */}
            {/* <button  id="slide1" type="button">Slide right</button> */}




            <div className="master2">
                <h2>碩士一年級</h2>
            </div>
            
            <div className="picborder1" id="picborder1">
            <span className="arrow"><i id="slide2"  class="fas fa-angle-left "></i></span>    

                <div className="masterpic1" id="masterpic1">
                
                    <div className="pic1">
                    
                    {/* <button id="slide" type="button">Slide right</button> */}
                        <div id="firstdetail" className="detail3">
                            <span>Members<br />Developer</span>
                            <span className="mail3"><a href="#"><i class="fas fa-envelope mail1"></i></a>abcdefg@gmail.com</span>
                        </div>
                        <img id="firstpicture" src={girl1} ></img>

                        <div id="firstdetail2"  className="detail4">
                            <p3>Members<br /><span>Developer<br /></span>
                                <a href="#"><i class="fas fa-envelope mail4"></i></a>
                                <p>abcdefg@gmail.com</p>
                            </p3>
                        </div>
                    </div>

                    <div className="pic1">
                        <div className="detail3">
                            <span>Members<br />Developer</span>
                            <span className="mail3"><a href="#"><i class="fas fa-envelope mail1"></i></a>abcdefg@gmail.com</span>
                        </div>
                        <img src={girl2} ></img>
                        <div className="detail4">
                            <p3>Members<br /><span>Developer<br /></span>
                                <a href="#"><i class="fas fa-envelope mail4"></i></a>
                                <p>abcdefg@gmail.com</p>
                            </p3>
                        </div>
                    </div>
                    <div className="pic1">
                        <div className="detail3">
                            <span>Members<br />Developer</span>
                            <span className="mail3"><a href="#"><i class="fas fa-envelope mail1"></i></a>abcdefg@gmail.com</span>
                        </div>
                        <img src={girl3} ></img>
                        <div className="detail4">
                            <p3>Members<br /><span>Developer<br /></span>
                                <a href="#"><i class="fas fa-envelope mail4"></i></a>
                                <p>abcdefg@gmail.com</p>
                            </p3>
                        </div>
                    </div>
                    <div className="pic1">
                        <div className="detail3">
                            <span>Members<br />Developer</span>
                            <span className="mail3"><a href="#"><i class="fas fa-envelope mail1"></i></a>abcdefg@gmail.com</span>
                        </div>
                        <img src={girl4} ></img>
                        <div className="detail4">
                            <p3>Members<br /><span>Developer<br /></span>
                                <a href="#"><i class="fas fa-envelope mail4"></i></a>
                                <p>abcdefg@gmail.com</p>
                            </p3>
                        </div>
                    </div>
                    <div className="pic1">
                        <div className="detail3">
                            <span>Members<br />Developer</span>
                            <span className="mail3"><a href="#"><i class="fas fa-envelope mail1"></i></a>abcdefg@gmail.com</span>
                        </div>
                        <img src={girl4} ></img>
                        <div className="detail4">
                            <p3>Members<br /><span>Developer<br /></span>
                                <a href="#"><i class="fas fa-envelope mail4"></i></a>
                                <p>abcdefg@gmail.com</p>
                            </p3>
                        </div>
                    </div>
                    <div className="pic1">
                        <div className="detail3">
                            <span>Members<br />Developer</span>
                            <span className="mail3"><a href="#"><i class="fas fa-envelope mail1"></i></a>abcdefg@gmail.com</span>
                        </div>
                        <img src={girl4} ></img>
                        <div className="detail4">
                            <p3>Members<br /><span>Developer<br /></span>
                                <a href="#"><i class="fas fa-envelope mail4"></i></a>
                                <p>abcdefg@gmail.com</p>
                            </p3>
                        </div>
                    </div>
                </div>
                <span className="arrow"><i id="slide3"  class="fas fa-angle-right" ></i></span>
            </div>
            
                
        
        </div>
        
    )
}

export default Members1;
