import React, { useState } from "react";
import "./Hamburger.scss";
import logo from "../img/LOGO/LOGO_1.png";
import {Link} from "react-router-dom";

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  //const [open, setOpen] = useState(false);

  const handleDrawerOpen = () =>{
    setOpen(true);
  };

  const handleDrawerClose = () =>{
    setOpen(false);
  };

  return (
    
    
    <div className="contain_Ham">
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
            <li><a onClick={() => setOpen(!open)} href="/#News">News</a></li>
            <li><a onClick={() => setOpen(!open)} href="/#LabDirector">About HSIPL</a></li>
            {/* <li><a onClick={() => setOpen(!open)} href="/#Introduction">Introduction</a></li> */}
            <li><a onClick={() => setOpen(!open)} href="/#Professor">Professor</a></li>
            <li><a onClick={() => setOpen(!open)} href="/#members">Members</a></li>
            <li><a onClick={() => setOpen(!open)} href="/#Research_interests">Research</a></li>
            <li><a onClick={() => setOpen(!open)} href="/#honor">Awards</a></li>
            <li><Link onClick={() => setOpen(!open)}  to="/LearnMore">Alumnus</Link></li>
            <li><Link onClick={() => setOpen(!open)}  to="/LearnMore">Posters</Link></li>
            <li><Link onClick={() => setOpen(!open)}  to="/LearnMore">Equipment</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  // <Toolbar>
  //   <IconButton className="contain_Ham" onClick={handleDrawerOpen}>HSIPL....</IconButton>
  // </Toolbar>
  );
};
  
export default Hamburger;
