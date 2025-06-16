import React, { useRef } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const containerRef = useRef(null);

  return (
    <motion.section
      ref={containerRef}
      className="relative z-10 bg-[#0e0e0e] text-white flex items-start justify-end"
      style={{ fontFamily: 'Mori, Arial, sans-serif' }}
    >
      <article className="w-[98vw] min-h-screen max-w-screen-xl mx-auto flex justify-start">
        <h1 className="text-4xl md:text-5xl font-bold text-right">
          Recent Project.
        </h1>
      </article>

    </motion.section>
  );
};

export default Projects;
