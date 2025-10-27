import React from "react";
import { motion } from "framer-motion";
import {
  SiFlutter,
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiDocker,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

const logos = [
  { icon: <SiFlutter />, name: "Flutter" },
  { icon: <SiLaravel />, name: "Laravel" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiJavascript />, name: "JavaScript" },
];

const RunningLogos = () => {
  const fullList = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-10">
      {/* Overlay fade kiri-kanan */}
      <div className="pointer-events-none absolute top-0 left-0 w-32 h-full z-10 bg-gradient-to-r from-[#0e0e0e] to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 w-32 h-full z-10 bg-gradient-to-l from-[#0e0e0e] to-transparent" />

      <motion.div
        className="flex gap-12 text-5xl text-white whitespace-nowrap opacity-50 pt-10 w-max"
        animate={{ x: ["0%", "-35%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {fullList.map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 hover:scale-110 transition-transform duration-300"
            title={logo.name}
          >
            {logo.icon}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RunningLogos;
