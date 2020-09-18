import React, { useState } from "react";
import "./HamburgerDT.scss";
import logo from "../img/LOGO/LOGO_1.png";



const HamburgerDT = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="HomePage"><img className="logo1" src={logo} alt="logo"/></a>
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
        <li><a onClick={() => setOpen(!open)}  href="HomePage">Home</a></li>
        <li><a onClick={() => setOpen(!open)}  href="#Projects">Projects</a></li>
        <li><a onClick={() => setOpen(!open)} href="#Talks">Talks</a></li>
        <li><a onClick={() => setOpen(!open)} href="#Service">Service</a></li>
        <li><a onClick={() => setOpen(!open)} href="#Conference">Conference</a></li>
        <li><a onClick={() => setOpen(!open)} href="#Awards">Awards</a></li>
      </ul>
    </nav>
  );
};

export default HamburgerDT;
