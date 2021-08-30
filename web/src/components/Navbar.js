import React from 'react'
import "./Navbar.scss";
import logo from "../img/LOGO/LOGO_1.png";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
    <div className="contain">
      <div className="top_HP" id="HomePage">
        <div className="list_HP">
          <a href="/">
            <img className="logo_HP" src={logo}></img>
          </a>

          <ul>
            <li>
              <a id="p1_HP" href="/">
                Home
              </a>
            </li>

            <li>
              <a id="p1_HP" href="/#LabDirector">
                About HSIPL
              </a>
            </li>

            <li>
              <a id="p1_HP" href="/#News" >
                News
              </a>
            </li>
            <li>
              <a id="p1_HP" href="/#honor">Awards</a>
            </li>

            <li ><a id="p1_HP" href="/#Professor">Lab Director</a>
              <ul  className="secondNav">
                <li><a href="/ProfessorDetail#Education">Education</a></li>
                <li><a href="/ProfessorDetail#Experience">Experience</a></li>
                <li><a href="/ProfessorDetail#Journal">Publication</a></li>
                <li><a  href="/ProfessorDetail#Talks">Talks</a></li>
                <li><a href="/ProfessorDetail#Service">Service</a></li>
                <li><a href="/ProfessorDetail#Conference">Conference</a></li>
                <li><a href="/ProfessorDetail#pf_Award">Awards</a></li>
                <li><a href={'https://scholar.google.com/citations?user=0LxRRawAAAAJ&hl=zh-TW'}>Google</a></li>
              </ul>
            </li>
            
            <li><a id="p1_HP" href="/#members">Members</a>
              <ul className="secondNav">
                  <li><a href="/#Senior">Senior</a></li>
                  <li><a href="/#Junior">Junior</a></li>
                  <li><a href="/#Alumnus">Alumnus</a></li>
              </ul>
            </li>
            <li><a id="p1_HP" href="/LearnMore#Research_interests">Research</a>
              <ul className="secondNav">
              <li><a href="/LearnMore#Research_interests">Interests</a></li>
              <li><a href="/LearnMore#Research_Posters">Posters</a></li>
              <li><a href="/LearnMore#Projects">Projects</a></li>

              </ul>
            </li>

 
            <li>
              <a id="p1_HP" href="/LearnMore#Equipment">Equipment</a>
                <ul className="secondNav">
                <li><a href="/LearnMore#Pushbloom">Pushbroom</a></li>
                <li><a href="/LearnMore#SnapShot">SnapShot</a></li>
                <li><a href="/LearnMore#Protable">Protable</a></li>
                  
                </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Navbar
