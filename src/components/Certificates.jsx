import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2026",
    link: "/AWS.pdf",
  },
  {
    title: "MySQL - SQL and Database",
    issuer: "Infosys Springboard",
    year: "2025",
    link: "/sql.pdf",
  },
  {
    title: "MongoDB CRUD Operations and Aggregation Framework",
    issuer: "MongoDB University",
    year: "2025",
    link: "/mongodb.pdf",
  }
];

export default function Certificates() {
  const [expanded, setExpanded] = useState(false);
  const visibleCertificates = expanded ? certificates : certificates.slice(0, 2);

  return (
    <section
      id="certificates"
      className="relative bg-gray-50 dark:bg-gray-950 py-24 transition-colors duration-300"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
            Recognitions that validate my continuous learning journey and technical expertise.
          </p>
        </motion.div>

        {/* Certificates List */}
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence>
            {visibleCertificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="
                  group
                  flex flex-col sm:flex-row justify-between items-center
                  bg-white dark:bg-gray-900
                  border border-gray-100 dark:border-gray-800
                  rounded-2xl p-6
                  shadow-sm hover:shadow-lg hover:border-blue-500/30
                  transition-all duration-300
                "
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-500">
                    <Award size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-4 sm:mt-0
                      flex items-center gap-2
                      px-4 py-2 rounded-full
                      bg-gray-50 dark:bg-gray-800
                      text-gray-600 dark:text-gray-300 text-sm font-medium
                      hover:bg-blue-500 hover:text-white
                      transition-all duration-300
                    "
                  >
                    View Certificate
                    <ExternalLink size={16} />
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle Button */}
        {certificates.length > 2 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpanded(!expanded)}
            className="
              mt-10
              inline-flex items-center gap-2
              px-6 py-3 rounded-full
              bg-white dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              text-gray-700 dark:text-gray-300 font-medium
              hover:border-blue-500 hover:text-blue-500
              shadow-sm hover:shadow-md
              transition-all duration-300
            "
          >
            {expanded ? (
              <>
                Show Less <ChevronUp size={18} />
              </>
            ) : (
              <>
                Show More <ChevronDown size={18} />
              </>
            )}
          </motion.button>
        )}
      </div>
    </section>
  );
}
