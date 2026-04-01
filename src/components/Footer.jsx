import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-gray-950 pt-20 pb-10 transition-colors duration-300 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
              Akshay Malik
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
              Building digital experiences that matter. Let's create something amazing together.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Akshay-Malik2040"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/akshay-malik-b4806b282/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="mailto:akshaymalik2040@gmail.com"
              className="p-3 bg-gray-50 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} Akshay Malik. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-500">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
