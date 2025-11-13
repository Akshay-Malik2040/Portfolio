import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="logo text-2xl font-bold text-blue-500 dark:text-blue-400">
          Akshay Malik
        </h1>

        <ul className="flex space-x-6 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 py-2 px-4 rounded-3xl transition-colors duration-300">
          {["Home", "About", "Projects", "Certificates", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <h2 className="border border-gray-300 dark:border-gray-700 py-2 w-23 text-center rounded-4xl font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300">
          <a href="#" className="cursor-pointer hover:text-blue-400 dark:hover:text-blue-300">
            Resume
          </a>
        </h2>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
