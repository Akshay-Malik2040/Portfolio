import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: <FaReact className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "SQL/NoSQL", icon: <FaDatabase className="text-gray-600 dark:text-gray-400" /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "VS Code", icon: <span className="text-lg">💻</span> },
      { name: "Postman", icon: <span className="text-lg">📮</span> },
      { name: "Firebase", icon: <span className="text-lg">🔥</span> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-white dark:bg-gray-900 py-24 transition-colors duration-300"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-16"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                bg-gray-50 dark:bg-gray-800/50
                backdrop-blur-sm
                border border-gray-100 dark:border-gray-700
                rounded-2xl p-8
                hover:shadow-xl hover:shadow-blue-500/5
                transition-all duration-300
              "
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {group.category}
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {group.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="
                      flex items-center gap-2
                      bg-white dark:bg-gray-900
                      px-4 py-2 rounded-full
                      shadow-sm border border-gray-100 dark:border-gray-700
                      text-sm font-medium text-gray-700 dark:text-gray-300
                      hover:border-blue-500 dark:hover:border-blue-500
                      transition-colors cursor-default
                    "
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
