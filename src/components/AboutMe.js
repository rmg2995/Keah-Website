import React from "react";
import Keah from "./images/Gutierrez_Keah copy.jpg";
import "../styles/aboutme.scss";
const AboutMe = () => {
  return (
    <div>
      <h2>Profile</h2>
      <p>I'm a future Pharmacist</p>
      <h3>About Me</h3>
      <p>For Keah to write</p>
      <img src={Keah} alt="Keah professional photo" />
      <h3>Details</h3>
      <p>
        <strong>Name:</strong> Keah Gutierrez
      </p>
      <p>
        <strong>Age:</strong> 25
      </p>
      <p>
        <strong>Location:</strong> Miami, Fl, USA
      </p>
    </div>
  );
};

export default AboutMe;
