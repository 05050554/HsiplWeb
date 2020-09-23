import React, { useState } from "react";
import "./HamburgerLM.scss";
import logo from "../img/LOGO/LOGO_1.png";
import {Link} from "react-router-dom";


const HamburgerLM = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link  to="/" ><img className="logo1" src={logo}></img></Link> 
      <h2>HSIPL</h2>
      {open === false ? (
        <i onClick={() => setOpen(!open)} className="fas fa-bars fa-2x ham"></i>
      ) : (
        <i
          className="fas fa-times fa-2x ham"
          onClick={() => setOpen(!open)}
        ></i>
      )}
 
      <ul className={open === false ? "nav close" : "nav open"}>
        <li><Link onClick={() => setOpen(!open)}  to="/">Home</Link></li>
        <li><a onClick={() => setOpen(!open)}  href="#Research_interests">Interests</a></li>
        <li><a onClick={() => setOpen(!open)} href="#Research_Posters">Posters</a></li>
        <li><a onClick={() => setOpen(!open)} href="#Honor and Awards">Honor and Awards</a></li>
      </ul>
    </nav>
  );
};

export default HamburgerLM;
