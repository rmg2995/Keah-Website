import React from "react";
import Keah from "./images/Gutierrez_Keah copy.jpg";
import "../styles/aboutme.scss";
const AboutMe = () => {
  return (
    <div id="yourAnchorTag" className="about-me">
      <section>
        <h2>Profile</h2>
        <p>I'm a future Pharmacist</p>
      </section>
      <section>
        <h3>About Me</h3>
        <p>For Keah to write</p>
      </section>
      <img src={Keah} alt="Keah professional photo" />
      <section>
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
      </section>
    </div>
  );
};

export default AboutMe;
