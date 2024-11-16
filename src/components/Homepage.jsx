import React from "react";
import Navbar from "./Navbar";
import bgImage from "../assets/background.jpg";
import Footer from "./Footer";
import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
const PortfolioPage = () => {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center overflow-y-auto">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />s
      <Footer />
    </div>
  );
};

export default PortfolioPage;
