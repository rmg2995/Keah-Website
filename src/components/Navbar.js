import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div>
      <h1>This is the Navbar</h1>
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
