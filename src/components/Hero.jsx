export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center h-screen"
    >
      <h2 className="text-4xl sm:text-6xl font-extrabold mb-4">
        Hi, I'm <span className="text-blue-400">Akshay Malik</span> 👋
      </h2>
      <p className="text-gray-400 text-lg max-w-xl mb-6">
        Full Stack Web Developer | MERN Stack Enthusiast | B.Tech CSE Student
      </p>
      <div className="flex gap-4">
        <a
          href="https://github.com/Akshay-Malik2040"
          target="_blank"
          className="px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-md font-semibold"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/akshay-malik2040"
          target="_blank"
          className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-md font-semibold"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
