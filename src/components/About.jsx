import React from "react";
import profileImage from "../assets/heroImage.jpg"; // ← replace with your image path

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white dark:bg-gray-900 py-20 transition-colors duration-300"
    >
      {/* Background grid pattern visible in both themes */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-size-[40px_40px]
          opacity-50
          pointer-events-none
        "
      />

      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={profileImage}
            alt="Akshay Malik"
            className="
              w-64 h-64 object-cover rounded-xl
              shadow-md border border-gray-100 dark:border-gray-800
              transition-all duration-300
            "
          />
        </div>

        {/* About Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors duration-300">
            Hi, I'm <span className="font-semibold text-blue-500">Akshay Malik</span>, 
            a passionate <span className="font-medium">Full Stack Web Developer</span> 
            with a love for crafting elegant and efficient digital solutions. 
            I specialize in building responsive, scalable, and modern web applications 
            using the <span className="font-medium">MERN stack</span>.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed transition-colors duration-300">
            Currently pursuing my <span className="font-medium">B.Tech in Computer Science</span>, 
            I enjoy blending creativity with logic — whether designing intuitive user interfaces 
            or architecting robust backend systems. When I’m not coding, 
            you’ll find me exploring new tech trends, contributing to open-source, or learning new frameworks.
          </p>
          <div className="pt-4">
            <a
              href="#projects"
              className="
                inline-block bg-blue-500 text-white px-6 py-3 rounded-md
                font-medium hover:bg-blue-600 transition-colors
              "
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
