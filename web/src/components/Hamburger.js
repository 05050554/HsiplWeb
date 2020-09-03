import React, { useState } from "react";
import "./Hamburger.scss";
import logo from "../img/LOGO/LOGO_1.png";
const Hamburger = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <img className="logo1" src={logo} ></img>
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
        <li><a href="#">Home</a></li>
        <li><a href="#LabDirector">Lab Director</a></li>
        <li><a href="#Introduction">Introduction</a></li>
        <li><a href="#Professor">Professor</a></li>
        <li><a href="#members">Members</a></li>
        <li><a href="#Equipment">Equipment</a></li>
      </ul>
    </nav>
  );
};

export default Hamburger;
