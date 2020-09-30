import React from "react";
import Home from "./components/home";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Licenses from "./components/Licenses";
import Contact from "./components/contact";
import ProfessionalOrg from "./components/ProfessionalOrg";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import { Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Licenses />
      <Education />
      <Experience />
      <ProfessionalOrg />
      <Contact />
      {/* <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/experience" render={() => <Experience />} />
        <Route exact path="/licenses" render={() => <Licenses />} />
        <Route exact path="/professional" render={() => <ProfessionalOrg />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/about" render={() => <AboutMe />} />
      </Switch> */}
    </div>
  );
};

export default App;
