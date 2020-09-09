import React from "react";
import Home from "./components/home";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Licenses from "./components/Licenses";
import Contact from "./components/contact";
import ProfessionalOrg from "./components/ProfessionalOrg";
const App = () => {
  return (
    <div>
      <Home />
      <AboutMe />
      <Licenses />
      <Experience />
      <ProfessionalOrg />
      <Contact />
    </div>
  );
};

export default App;
