import React from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rohit Sharma",
      role: "Frontend Developer",
      message:
        "Akshay is an exceptional developer. His attention to detail and ability to convert ideas into perfect UI is impressive.",
      rating: 5,
      img: "https://i.pravatar.cc/100?img=1"
    },
    {
      name: "Priya Verma",
      role: "Backend Engineer",
      message:
        "Working with Akshay was smooth and professional. He communicates clearly and delivers work on time.",
      rating: 5,
      img: "https://i.pravatar.cc/100?img=5"
    },
    {
      name: "Ankit Yadav",
      role: "Project Partner",
      message:
        "I collaborated with him during a project and he handled the MERN stack part brilliantly.",
      rating: 4,
      img: "https://i.pravatar.cc/100?img=12"
    }
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10 transition-colors duration-300">
          What People Say
        </h2>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="
                bg-gray-50 dark:bg-gray-800 
                p-6 rounded-xl shadow-md border
                border-gray-200 dark:border-gray-700
                transition-all duration-300 hover:shadow-lg
              "
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover ring-1 ring-gray-300 dark:ring-gray-600"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Message */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300">
                “{t.message}”
              </p>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
