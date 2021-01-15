import React, { useState } from "react";
import "./Hamburger.scss";
import logo from "../img/LOGO/LOGO_1.png";
import {Link} from "react-router-dom";


const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar_HP">
      
      <h2>HSIPL</h2>
      {open === false ? (
        <i onClick={() => setOpen(!open)} className="fas fa-bars fa-2x ham_HP"></i>
      ) : (
        <i
          className="fas fa-times fa-2x ham_HP"
          onClick={() => setOpen(!open)}
        ></i>
      )}
      <div className="ham_list_HP">
      <a href="#" rel="noopener noreferrer"><img className="logo1_HP" src={logo} alt="logo"/></a>
        <ul className={open === false ? "nav close" : "nav open"}>
          <li><a onClick={() => setOpen(!open)}  href="/">Home</a></li>
          <li><a onClick={() => setOpen(!open)} href="/#LabDirector">About HSIPL</a></li>
          {/* <li><a onClick={() => setOpen(!open)} href="/#Introduction">Introduction</a></li> */}
          <li><a onClick={() => setOpen(!open)} href="/#Professor">Professor</a></li>
          <li><a onClick={() => setOpen(!open)} href="/#members">Members</a></li>
          <li><a onClick={() => setOpen(!open)} href="/#Research_interests">Research</a></li>
          <li><a onClick={() => setOpen(!open)} href="/#News">News</a></li>
          <li><a onClick={() => setOpen(!open)} href="/#Honor_and_Awards">Awards</a></li>
          <li><Link onClick={() => setOpen(!open)}  to="/LearnMore">Alumnus</Link></li>
          <li><Link onClick={() => setOpen(!open)}  to="/LearnMore">Posters</Link></li>
          <li><Link onClick={() => setOpen(!open)}  to="/LearnMore">Equipment</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Hamburger;
