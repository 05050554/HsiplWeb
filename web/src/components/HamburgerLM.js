import React, { useState } from "react";
import "./HamburgerLM.scss";
import logo from "../img/LOGO/LOGO_1.png";
import {Link} from "react-router-dom";


const HamburgerLM = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar_LM">
      
      <h2>HSIPL</h2>
      {open === false ? (
        <i onClick={() => setOpen(!open)} className="fas fa-bars fa-2x ham_LM"></i>
      ) : (
        <i
          className="fas fa-times fa-2x ham_LM"
          onClick={() => setOpen(!open)}
        ></i>
      )}
      <div className="ham_list_LM">
      <Link  to="/" ><img className="logo1_LM" src={logo}></img></Link> 
        <ul className={open === false ? "nav close" : "nav open"}>
          <li><Link onClick={() => setOpen(!open)}  to="/">Home</Link></li>
          <li><a onClick={() => setOpen(!open)}  href="#Alumnus">Alumnus</a></li>
          <li><a onClick={() => setOpen(!open)} href="#Research_Posters">Posters</a></li>
          <li><a onClick={() => setOpen(!open)} href="#Equipment">Equipment</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default HamburgerLM;
