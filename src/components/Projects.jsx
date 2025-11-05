import React from "react";
import { motion } from "framer-motion";
// import project1 from "../assets/project1.jpg";
// import project2 from "../assets/project2.jpg";
// import project3 from "../assets/project3.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS to showcase my skills, projects, and contact info.",
    tech: ["React", "Tailwind", "Framer Motion"],
    // image: project1,
    link: "#",
  },
  {
    title: "MERN Blog Platform",
    description:
      "A full-stack blog application using the MERN stack with authentication, CRUD functionality, and rich text editing.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    // image: project2,
    link: "#",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "An interactive admin dashboard with analytics, charts, and product management features.",
    tech: ["React", "Chart.js", "Firebase"],
    // image: project3,
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-gray-50 py-20 border-b">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none" />

      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work — blending design, development, and functionality.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block mt-4 text-blue-500 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
