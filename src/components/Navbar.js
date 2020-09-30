import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { slide as Menu } from "react-burger-menu";
import "../styles/navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <Menu right>
        <Link className="menu-item" to="/#top">
          Home
        </Link>
        <Link className="menu-item" to="/about#yourAnchorTag">
          About Me
        </Link>
        {/* <Link to="/about">About Me</Link> */}
        <Link className="menu-item" to="/licenses#licenses">
          Licenses
        </Link>
        <Link className="menu-item" to="/education#education">
          Education
        </Link>
        <Link className="menu-item" to="/experience#experience">
          Experience
        </Link>
        <Link className="menu-item" to="/professional#professional">
          Professional Organizations
        </Link>
        <Link className="menu-item" to="/contact#contact">
          Contact
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
