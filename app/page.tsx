import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Title from "./components/Title";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="animate-fade-in-left">
      <Title />
      </div>
      
      <div id="about" className="animate-fade-in-left">
        <About />
      </div>
      <div id="experience" className="animate-fade-in-left">
        <Experience />
      </div>
      <div id="projects" className="animate-fade-in-left">
        <Projects />
      </div>
      <div id="contact" className="animate-fade-in-left">
        <Contact />
      </div>
    </>
  );
}
