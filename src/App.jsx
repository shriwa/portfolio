import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";

const App = () => {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Experience />
      <Skills />
      {/* <Hireme /> */}
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
