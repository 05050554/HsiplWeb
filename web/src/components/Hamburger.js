import React, { useState } from "react";
import "./Hamburger.scss";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="navbar">
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
        <li><a href="/">Home</a></li>
        <li><a href="/">Lab Director</a></li>
        <li><a href="/">Introduction</a></li>
        <li><a href="/">Professor</a></li>
        <li><a href="/">Members</a></li>
        <li><a href="/">Equipment</a></li>
      </ul>
    </nav>
  );
};

export default Hamburger;
