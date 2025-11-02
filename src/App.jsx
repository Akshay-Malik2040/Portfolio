import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Projects from "./components/Projects";

function App() {
  return (
    <div className="m-0 p-0 bg-gray-950 text-gray-100 min-h-screen overscroll-none overflow-x-hidden">
      <Navbar />
      <Hero/>
      <Projects/>
      
      <footer className="text-center py-6 text-gray-400 border-t border-gray-800">
        © 2025 Akshay Malik | Built with ❤️ using React & Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
