import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import CustomCursor from '../components/CustomCursor';
import CurtainOpening from '../components/CurtainOpening';
import CustomAnimatedSeparator from "../components/CustomAnimatedSeparator";
import { Link } from "react-router-dom";
import useClickAway from "react-use/lib/useClickAway"; // optional, auto-close
import { useLenis } from '../hooks/useLenis';


const ITEMS_PER_PAGE = 4;
const projects = [
  {
    name: "FloodSenseAI",
    type: "Android Dev",
    previewText: "AI-powered flood detection system. Delivering real-time alerts via cross-platform app adopted by 3+ districts in Central Java.",
  },
  {
    name: "Bumdesma",
    type: "Fullstack Dev",
    previewText: "Village enterprise management site. BUMDESMA (Badan Usaha Milik Desa Bersama) Kota Kendal, located in the Ngareanak Subdistrict.",
  },
  {
    name: "SIGASI",
    type: "FrontEnd Dev",
    previewText: "SIGASI (Sistem Informasi Geospasial Anak Sehat Indonesia) is a web-based Geographic Information System (GIS).",
  },
  {
    name: "WeCare",
    type: "UI/UX Design",
    previewText: "WeCare is its integration with biometric sensors to track mental health through heart rate activity.",
    logo: "/photos/WECARE.png",
  },
  {
    name: "SITARI",
    type: "Backend Dev",
    previewText: "SITARI (Sistem Inventarisasi dan Peminjaman Barang Kampus) is a custom-built inventory management system.",
  },
  {
    name: "SoilAI",
    type: "Backend Dev",
    previewText: "SoilAI is a research-based project that explores the integration of Artificial Intelligence in analyzing soil health and characteristics.",
  },
  {
    name: "MentalCare",
    type: "Android Dev",
    previewText: "MentalCare is a mental health application designed to help users assess their psychological well-being through the clinically validated PHQ-9 (Patient Health Questionnaire-9) screening method.",
  },
  {
    name: "PMI Pusdiklat Jateng App",
    type: "Android Dev",
    previewText: "A web-based room reservation system developed for the PMI Training Center in Central Java.",
  },
  {
    name: "Mevent",
    type: "UI/UX",
    previewText: "An Application to manage a task, and we got 2nd place winner at UI/UX Competition.",
  },
  {
    name: "Desaged",
    type: "UI/UX",
    previewText: "DesaGED is an interactive tourism application that leverages Augmented Reality (AR) and Virtual Reality (VR) technologies to enhance the visitor experience in rural tourism villages. ",
  },

];

const certifications = [
  {
    name: "Applied Machine Learning",
    type: "Dicoding",
    previewText: "Certified by Dicoding, focused on applied Machine Learning.",
  },
  {
    name: "Machine Learning Android",
    type: "Dicoding",
    previewText: "Certified by Dicoding, focused on applied Machine Learning to Android.",
  },
  {
    name: "Junior Web Developer",
    type: "BNSP",
    previewText: "Web Developer Certified by BNSP.",
  },
  {
    name: "SQL Certified",
    type: "Oracle",
    previewText: "SQL Certified by Oracle.",
  },
];

const awards = [
  { 
    name: "1st Winner Essay Competition", 
    type: "Competition", 
    previewText: "Winning an Essay Competition", 
   },
  { 
    name: "2nd Place Winner UI/UX Competition", 
    type: "Competition", 
    previewText: "Winning an UI/UX Competition", 
   },
  {
     name: "SoilAI", 
     type: "Paper", 
     previewText: "SoilAI is a research-based project that explores the integration of Artificial Intelligence in analyzing soil health and characteristics.", 
  },
];

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const dataMap = {
  projects,
  certifications,
  awards,
};

const Projects = () => {
  useLenis();
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("projects");
  const data = dataMap[activeTab] || [];
  const [isMenuOpen, setIsMenuOpen] = useState(false);  
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const [isCurtainDone, setIsCurtainDone] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  // ... dalam komponen:
  const menuRef = useRef(null);
  useClickAway(menuRef, () => setIsMenuOpen(false)); // optional: klik luar tutup menu

  return (
    <>
      {!isCurtainDone && <CurtainOpening onFinish={() => setIsCurtainDone(true)} />}
      <CustomCursor />

      <motion.section
        ref={containerRef}
        initial={{ backgroundColor: "#fffbee", color: "#fffbee" }}
        animate={{ backgroundColor: "#fffbee", color: "#0e0e0e" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative z-10 min-h-screen overflow-x-hidden font-mori"
        onMouseMove={handleMouseMove}
      >
        <Header theme="light" />

        <div className="max-w-screen-xl mx-auto pt-32 px-6">
          <div className="flex justify-between items-center mb-6">
            <motion.h2
              key={activeTab}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-4xl md:text-5xl sm:text-4xl font-semibold"
            >
              {activeTab === "projects"
                ? "Recent Projects"
                : activeTab === "certifications"
                ? "Certifications"
                : "Awards & Researchs"}
            </motion.h2>

          {/* Toggle button only visible on mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white ml-4"
            >
              {/* Isi tombol, misalnya ikon menu */}
              ☰
            </button>
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex gap-3">
            {Object.keys(dataMap).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-white transition ${
                  activeTab === tab ? "bg-black" : "bg-gray-500"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="absolute right-6 top-20 z-50 md:hidden bg-black bg-opacity-80 backdrop-blur-sm rounded-lg p-3 shadow-lg flex flex-col gap-2"
              >
                {Object.keys(dataMap).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-2 rounded-md text-white text-left transition ${
                      activeTab === tab ? "bg-[#0e0e0e] text-black" : "bg-transparent hover:bg-gray-700"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
            
          </div>

          <CustomAnimatedSeparator mb={8} h={1} mx={0} />

          <AnimatePresence mode="wait">
            <motion.ul
              key={activeTab + currentPage}
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-8 relative"
            >
              {paginatedData.map((item, index) => {
                const linkPath =
                  activeTab === "projects"
                    ? `/projects/${item.name.toLowerCase().replace(/\s+/g, "-")}`
                    : activeTab === "certifications"
                    ? `/certifications/${item.name.toLowerCase().replace(/\s+/g, "-")}`
                    : activeTab === "awards"
                    ? `/awards/${item.name.toLowerCase().replace(/\s+/g, "-")}`
                    : "#";

                return (
                  <motion.li
                    key={item.name}
                    variants={itemVariants}
                    className="relative group overflow-visible cursor-pointer"
                    onMouseEnter={() => setHovered(item)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <Link to={linkPath} className="block">
                      <div className="flex justify-between items-center">
                        <motion.div className="flex items-center space-x-4 origin-left">
                          <h1 className="text-2xl font-ppvalve">X</h1>
                          <span className="text-xl md:text-3xl font-medium group-hover:pl-2 transition-all">
                            {item.name}
                          </span>
                        </motion.div>
                        <span className="text-sm sm:text-base font-medium text-gray-500">
                          {item.type}
                        </span>
                      </div>
                      <CustomAnimatedSeparator my={0} h={1} mx={0} />
                    </Link>
                  </motion.li>
                );
              })}

            </motion.ul>
          </AnimatePresence>
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="fixed z-50 pointer-events-none"
                style={{
                  top: cursorPos.y + 40,
                  left: cursorPos.x + 20,
                  transform: "translate(-50%, -190%)",
                }}
              >
                <div className="bg-[#0e0e0e] text-white rounded-3xl shadow-xl px-4 py-4 flex items-center space-x-2 w-96">
                  <div className="max-w-full">
                    <p className="font-thin text-lg break-words">
                      {hovered.previewText}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
          {totalPages > 1 && (
            <div className="sticky xl:fixed right-0 xl:right-6 bottom-4 xl:top-1/2 transform xl:-translate-y-1/2 flex flex-row justify-center xl:flex-col items-center gap-2 z-50">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-10 h-10 rounded-full text-sm font-medium transition border-2 ${
                    currentPage === index + 1
                      ? 'bg-black text-white border-black'
                      : 'bg-white-300 text-black border-gray-500'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
      </motion.section>
      
    </>
  );
};

export default Projects;
