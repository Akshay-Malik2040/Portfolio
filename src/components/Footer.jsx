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
    <footer className="relative bg-gray-50 py-12 border-t border-gray-200 mt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none" />

      <div className="relative container mx-auto px-6 text-center space-y-6">
        {/* Contact Info */}
        <h2 className="text-2xl font-semibold text-gray-900">Contact Me</h2>
        <p className="text-gray-600">
          Have a project in mind or just want to connect? Let’s get in touch!
        </p>

        {/* Email */}
        <a
          href="mailto:akshay@example.com"
          className="inline-block text-blue-500 font-medium hover:underline"
        >
          akshaymalik2040@gmail.com
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 pt-6">
          <a
            href="https://github.com/Akshay-Malik2040"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-2xl hover:text-blue-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/akshay-malik-b4806b282/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-2xl hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-2xl hover:text-blue-400 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 text-2xl hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:akshaymalik2040@gmail.com"
            className="text-gray-700 text-2xl hover:text-red-500 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Akshay Malik. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
