const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio built with React and Tailwind CSS.",
    link: "https://github.com/Akshay-Malik2040/portfolio-basic",
  },
  {
    title: "To-Do App (React)",
    desc: "A simple and interactive task manager built with React.",
    link: "https://github.com/Akshay-Malik2040/todo-react-app",
  },
  {
    title: "Weather App (API-based)",
    desc: "Displays weather data using OpenWeatherMap API and React.",
    link: "https://github.com/Akshay-Malik2040/weather-app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
        My Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              className="text-blue-400 hover:underline font-semibold"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
