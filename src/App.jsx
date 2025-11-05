import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <Projects/>
      <Skills/>
      <Certificates/>
      <Footer/>
      {/* <Hero/>
      <Projects/>
      <About/>
      <Contact/> */}
      
     
    </div>
  );
}

export default App;
