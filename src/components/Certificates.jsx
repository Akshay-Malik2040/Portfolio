import React, { useState } from "react";

const certificates = [
  {
    title: "Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    year: "2024",
    link: "#",
  },
  {
    title: "JavaScript (Advanced) Certificate",
    issuer: "HackerRank",
    year: "2023",
    link: "#",
  },
  {
    title: "React Frontend Developer Certification",
    issuer: "freeCodeCamp",
    year: "2023",
    link: "#",
  },
  {
    title: "Database Management and SQL Fundamentals",
    issuer: "Coursera",
    year: "2022",
    link: "#",
  },
];

export default function Certificates() {
  const [expanded, setExpanded] = useState(false);
  const visibleCertificates = expanded ? certificates : certificates.slice(0, 1);

  return (
    <section id="certificates" className="relative bg-gray-50 py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[40px_40px] opacity-50 pointer-events-none" />

      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Recognitions and certifications that validate my continuous learning and skill growth.
        </p>

        {/* Certificates List */}
        <div className="max-w-3xl mx-auto text-left">
          {visibleCertificates.map((cert, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white border border-gray-100 rounded-lg p-5 mb-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
                <p className="text-sm text-gray-600">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm font-medium hover:underline"
                >
                  View →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        {certificates.length > 1 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-6 text-blue-500 font-medium hover:underline"
          >
            {expanded ? "Show Less ▲" : "Show More ▼"}
          </button>
        )}
      </div>
    </section>
  );
}
