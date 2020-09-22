import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/about#yourAnchorTag">About Me</Link>
      <Link to="/#top">Home</Link>
      {/* <Link to="/about">About Me</Link> */}
      <Link to="/licenses#licenses">Licenses</Link>
      <Link to="/experience#experience">Experience</Link>
      <Link to="/professional#professional">Professional Organizations</Link>
      <Link to="/contact#contact">Contact Information</Link>
    </div>
  );
};

export default Navbar;
