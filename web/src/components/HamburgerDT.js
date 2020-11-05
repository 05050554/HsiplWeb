import React, { useState } from "react";
import "./HamburgerDT.scss";
import logo from "../img/LOGO/LOGO_1.png";
import {Link} from "react-router-dom";


const HamburgerDT = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar_DT">
       
      <h2>HSIPL</h2>
      {open === false ? (
        <i onClick={() => setOpen(!open)} className="fas fa-bars fa-2x ham_DT"></i>
      ) : (
        <i
          className="fas fa-times fa-2x ham_DT"
          onClick={() => setOpen(!open)}
        ></i>
      )}
      <div className="ham_list_DT">
      <Link  to="/" ><img className="logo1_DT" src={logo}></img></Link>
        <ul className={open === false ? "nav close" : "nav open"}>
          <li><Link onClick={() => setOpen(!open)}  to="/">Home</Link></li>
          <li><a onClick={() => setOpen(!open)}  href="#Projects">Projects</a></li>
          <li><a onClick={() => setOpen(!open)} href="#Talks">Talks</a></li>
          <li><a onClick={() => setOpen(!open)} href="#Service">Service</a></li>
          <li><a onClick={() => setOpen(!open)} href="#Conference">Conference</a></li>
          <li><a onClick={() => setOpen(!open)} href="#Awards">Awards</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default HamburgerDT;
