import React from "react";
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
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Databases (SQL/NoSQL)", icon: <FaDatabase className="text-gray-600 dark:text-gray-400" /> },
    ],
  },
  {
    category: "Tools & Others",
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

      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300">
          Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto transition-colors duration-300">
          A curated collection of my core technical skills — spanning frontend,
          backend, and essential tools.
        </p>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((group, index) => (
            <div
              key={index}
              className="
                bg-gray-50 dark:bg-gray-950
                border border-gray-100 dark:border-gray-800
                rounded-xl shadow-sm hover:shadow-md
                p-8 text-left
                transition-all duration-300
              "
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 border-b border-gray-200 dark:border-gray-700 pb-2 transition-colors duration-300">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
