import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import picxkartFront from "../assets/picxkartFront.png";

const projects = [
  {
    title: "DevTinder",
    description:
      "A full-stack developer networking platform that helps developers connect, interact, and collaborate through a secure and scalable web application.",
    tech: ["React", "Node.js", "Express.js" , "MongoDB" , "JWT" , "bcrypt","Websocket"],
    link: "#",
    github: "https://github.com/Akshay-Malik2040/devTinder",
    image: "/devtinder.png",
  },
  {
    title: "PicxKart",
    description:
"      A media discovery platform that aggregates content from multiple APIs and delivers relevant search results through intelligent keyword matching.",
    tech: ["React", "Tailwind", "pexels API"],
    link: "https://picxkartbundle.netlify.app/",
    github: "https://github.com/Akshay-Malik2040/PicxKart",
    image: picxkartFront },
  {
    title: "Safe Shore",
    description:
        "An AI-assisted disaster management platform designed to provide critical information, insights, and alerts during emergency situations.",    
        tech: ["React.js" , "Python" , "NLP" , "REST APIs"],
    link: "#",
    github: "https://github.com/Akshay-Malik2040/SafeShore",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-gray-50 dark:bg-gray-950 py-24 transition-colors duration-300"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my recent work — blending design, development, and functionality to create impactful digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="
                group bg-white dark:bg-gray-900
                border border-gray-100 dark:border-gray-800
                rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10
                transition-all duration-300
                overflow-hidden flex flex-col
              "
            >
              <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 flex gap-3 z-20 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-900 dark:text-white hover:text-blue-500 transition-colors"
                    title="View Code"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.link}
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-900 dark:text-white hover:text-blue-500 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        text-xs font-medium
                        bg-blue-50 dark:bg-blue-900/20
                        text-blue-600 dark:text-blue-300
                        px-3 py-1 rounded-full
                        border border-blue-100 dark:border-blue-800/30
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
