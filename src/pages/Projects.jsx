import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import CustomCursor from '../components/CustomCursor';
import AnimatedBackground from "../components/AnimatedBackground";
import CustomAnimatedSeparator from "../components/CustomAnimatedSeparator";
import { Link } from "react-router-dom"; // pastikan sudah di-import
import AnimatedSeparator from "../components/AnimatedSeparator";

const projects = [
  {
    name: "FloodSenseAI",
    type: "Android Dev",
    previewText: "AI-powered flood detection system.",
    logo: "/photos/floodsenseai.png",
  },
  {
    name: "Bumdesma",
    type: "Fullstack Dev",
    previewText: "Village enterprise management site.",
    logo: "/photos/bumdesma.png",
  },
  {
    name: "SIGASI",
    type: "FrontEnd Dev",
    previewText: "App for managing tasks & team.",
    logo: "/photos/SIGASI.png",
  },
  {
    name: "Mental Care App",
    type: "UI/UX Design",
    previewText: "Mental health support platform.",
    logo: "/photos/WECARE.png",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <CustomCursor />
    
      <motion.section
        ref={containerRef}
        initial={{ backgroundColor: "#0e0e0e", color: "#fffbee" }}
        animate={{ backgroundColor: "#fffbee", color: "#000000" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="relative z-10 min-h-screen"
        style={{ fontFamily: "Mori, sans-serif" }}
      >
        <Header theme="light" />

        <div className="max-w-screen-xl mx-auto pt-36 px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-3 border-white">
            Recent Projects
          </h2>
          <CustomAnimatedSeparator mb={8} h={1} mx={4} />
          <ul className="space-y-8 relative">
            {projects.map((project, index) => (
              <React.Fragment key={index}>
                <li
                  className="relative group overflow-visible cursor-pointer"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  onMouseMove={handleMouseMove}
                >
                  <Link to={`/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}`} className="block">
                  <div className="flex justify-between items-center">
                    <motion.div
                      whileHover={{ scale: 1.35 }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      className="flex items-center space-x-2 origin-left"
                    >
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <title>asterisk</title>
                        <path d="M1.728 20.992q-0.416 1.6 0.416 3.008 0.832 1.44 2.432 1.856t3.040-0.384q0.832-0.48 2.56-1.92t3.168-2.912q-0.608 2.016-0.96 4.192t-0.384 3.168q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848q0-0.96-0.384-3.168t-0.928-4.192q1.44 1.504 3.168 2.944t2.528 1.888q1.44 0.832 3.040 0.384t2.432-1.856 0.416-3.008-1.888-2.464q-0.864-0.48-2.944-1.248t-4.064-1.28q2.016-0.512 4.096-1.28t2.912-1.248q1.44-0.832 1.888-2.432t-0.416-3.040q-0.832-1.44-2.432-1.856t-3.040 0.384q-0.832 0.512-2.528 1.92t-3.168 2.912q0.576-1.984 0.928-4.192t0.384-3.168q0-1.632-1.184-2.816t-2.816-1.184-2.816 1.184-1.184 2.816q0 0.992 0.384 3.168t0.96 4.192q-1.44-1.472-3.168-2.88t-2.56-1.952q-1.44-0.8-3.040-0.384t-2.432 1.856-0.416 3.040 1.888 2.432q0.832 0.48 2.912 1.248t4.128 1.28q-2.016 0.512-4.096 1.28t-2.944 1.248q-1.44 0.832-1.888 2.464z" />
                      </svg>

                      <span className="text-xl md:text-2xl ">
                        {project.name}
                      </span>
                    </motion.div>
                    <span className="text-sm sm:text-base font-medium">
                      {project.type}
                    </span>
                  </div>

                  <AnimatePresence>
                    {hovered === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed z-50 pointer-events-none"
                        style={{
                          top: cursorPos.y + 40, // naik 40px dari posisi kursor
                          left: cursorPos.x + 20,
                          transform: "translate(-50%, -190%)",
                        }}
                      >
                        <div className="bg-[#0e0e0e] text-white rounded-3xl shadow-xl px-2 py-2 flex items-center space-x-4 w-90">
                          <img
                            src={project.logo}
                            alt={`${project.name} preview`}
                            className="w-60 h-24 rounded-2xl"
                          />
                          <div className="max-w-[180px]">
                            <p className="font-semibold text-lg break-words">
                              {project.previewText}
                            </p>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  </Link>
                </li>
                <AnimatedSeparator/>
                <CustomAnimatedSeparator my={0} h={1} mx={4} />
              </React.Fragment>
            ))}
          </ul>
        </div>
      </motion.section>
    </>
  );
};

export default Projects;


