import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <h1>This is the Navbar</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/licenses">Licenses</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/professional">Professional Organizations</Link>
      <Link to="/contact">Contact Information</Link>
    </div>
  );
};

export default Navbar;
