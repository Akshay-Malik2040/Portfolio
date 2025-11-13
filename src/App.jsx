import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
// import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import { useState } from "react";
// import {moon,sun} from "lucide-react"

function App() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <Hero/>
      <Projects/>
      <Skills/>
      <Certificates/>
      <About/>
      <Footer/>     
     
    </div>
  );
}

export default App;
