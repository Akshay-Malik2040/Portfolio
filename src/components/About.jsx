export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">
        About Me
      </h2>
      <p className="text-gray-300 text-center leading-relaxed">
        I'm a 3rd-year Computer Science student passionate about building
        responsive and efficient web applications. I specialize in the MERN
        stack (MongoDB, Express, React, Node.js) and love learning new tools
        and technologies to enhance user experience.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Git", "Tailwind"].map(
          (skill) => (
            <span
              key={skill}
              className="bg-gray-800 px-4 py-2 rounded-full text-sm text-gray-200 border border-gray-700"
            >
              {skill}
            </span>
          )
        )}
      </div>
    </section>
  );
}
