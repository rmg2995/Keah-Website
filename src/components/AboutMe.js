import React from "react";
import Keah from "./images/Gutierrez_Keah copy.jpg";
import "../styles/aboutme.scss";
const AboutMe = () => {
  // const ColoredLine = ({ color }) => (
  //   <hr
  //     style={{
  //       color: color,
  //       backgroundColor: color,
  //       height: 20,
  //     }}
  //   />
  // );
  return (
    <div id="yourAnchorTag">
      <section className="top-about-me">
        <h2>Profile</h2>
        <p>I'm a future Pharmacist</p>
        {/* <ColoredLine color="red" /> */}
        <hr
          style={{
            color: "rgb(5, 207, 207)",
            backgroundColor: "#000000",
            width: 1000,
            borderColor: "black",
          }}
        />
      </section>
      <div className="about-me">
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
    </div>
  );
};

export default AboutMe;
