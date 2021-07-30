import React from 'react'
import "./Navbar.scss";
import logo from "../img/LOGO/LOGO_1.png";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="top_HP" id="HomePage">
        <div className="list_HP">
          <a href="/">
            <img className="logo_HP" src={logo}></img>
          </a>

          <ul>
            <li>
              <a id="p1_HP" href="/#LabDirector">
                About HSIPL
              </a>
            </li>

            <li>
              <a id="p1_HP" href="#News" >
                News
              </a>
            </li>
            <li ><a id="p1_HP" href="/#Professor">Professor</a>
              <ul  className="secondNav">
                <li><a href="#Education">Education</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Journal">Journal</a></li>
                <li><a  href="/ProfessorDetail#Talks">Talks</a></li>
                <li><a href="/ProfessorDetail#Service">Service</a></li>
                <li><a href="/ProfessorDetail#Conference">Conference</a></li>
              </ul>
            </li>
            
            <li><a id="p1_HP" href="/#members">Members</a>
              <ul className="secondNav">
                  <li><a href="#Senior">Senior</a></li>
                  <li><a href="#Junior">Junior</a></li>
                  <li><a href="/LearnMore#Alumnus">Alumnus</a></li>
              </ul>
            </li>
            <li><a id="p1_HP" href="#Research_interests">Research</a>
              <ul className="secondNav">
              <li><a href="#Research_interests">Interests</a></li>
              <li><a href="/ProfessorDetail#Projects">Projects</a></li>
              <li><a href="/LearnMore#Research_Posters">Posters</a></li>
              </ul>
            </li>

            <li>
              <a id="p1_HP" href="#honor">Awards</a>
            </li>

            <li>
              <Link id="p1_HP" to="/LearnMore">Equipment</Link>
                <ul className="secondNav">
                  <li><a href="#">Protable</a></li>
                  <li><a href="#">Linescan</a></li>
                </ul>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Navbar
