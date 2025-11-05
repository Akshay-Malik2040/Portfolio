import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../assets/heroImage.jpg";

export default function Hero() {
  return (
    <section className="mt-15 relative bg-white overflow-hidden py-20 border-b-gray-200">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none mask-b-from-0.5" />

      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-500">Akshay Malik</span>
          </h1>

          {/* Typing animation for skills */}
          <div className="text-lg sm:text-xl text-gray-700 font-medium h-10">
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
              className="text-blue-500"
            />
          </div>

          <p className="text-gray-600 max-w-lg mx-auto md:mx-0">
            Passionate about building responsive, scalable, and user-friendly web applications.
          </p>

          <div className="pt-4">
            <a
              href="#projects"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Akshay Malik portrait"
            className="w-72 sm:w-96 rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
