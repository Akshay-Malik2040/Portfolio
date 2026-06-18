import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile3 from "../assets/ProfileResize.jpg";


export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Animated Background Blobs */}
      {/* <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-purple-900 dark:opacity-30"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-yellow-900 dark:opacity-30"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-900 dark:opacity-30"></div> */}

      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
            Welcome to my world
          </h2>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Akshay Malik
            </span>
          </h1>

          {/* Typing animation for skills */}
          <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium h-10">
            <TypeAnimation
              sequence={[
                "Full Stack Web Developer",
                2000,
                "MERN Stack Enthusiast",
                2000,
                "Tech Explorer",
                2000,
                "B.Tech CSE Student",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gray-800 dark:text-gray-200"
            />
          </div>

          <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed">
            Passionate about building responsive, scalable, and user-friendly web applications that solve real-world problems.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          <div className="relative w-72 sm:w-96 h-72 sm:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] rotate-6 opacity-50 blur-lg"></div>
            <img
              src={profile3}
              alt="Akshay Malik portrait"
              className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white dark:border-gray-800 z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
