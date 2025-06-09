import React, { useRef, useState, useEffect } from "react";
import TextReveal from '../components/TextReveal';
import AnimatedSeparator from '../components/AnimatedSeparator';
import { motion, useScroll, useTransform } from "framer-motion";
import { LayoutGroup } from "framer-motion";

const About = () => {
  const containerRef = useRef(null);
  const [viewportHeight, setViewportHeight] = useState(0);

  // Ambil tinggi layar saat mount
  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  const { scrollY } = useScroll();

  // Parallax dimulai saat user scroll ke layar kedua
  const yParallax = useTransform(scrollY, [viewportHeight, viewportHeight + 500], [0, -150]);

  return (
    <motion.section
      ref={containerRef}
      style={{ y: yParallax }}
      className="relative z-10 bg-[#0e0e0e] text-white"
    >
      <article className="w-[98vw] bg-[#0e0e0e] snap">
        <LayoutGroup>
          <main className="bg-[#0e0e0e] flex flex-col justify-center items-center p-8 text-white h-screen" style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>
            
            <AnimatedSeparator />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <TextReveal className="text-4xl font-bold mb-4 md:text-5xl">
                  About me.
                </TextReveal>

                <TextReveal className="text-xl font-thin mb-4 text-[#9c9c9c]">
                  Enthusiastic about applying technical skills to tackle challenges and contribute to innovative projects in a professional, growth-focused environment.
                </TextReveal>
              </div>

              <div>
                <img className="w-2/3 md:w-1/2 lg:w-1/3 ml-auto rounded-lg shadow-lg" src="/photos/saya.jpeg" alt="About me" />
              </div>
            </div>

            <AnimatedSeparator />
          </main>
        </LayoutGroup>
      </article>
    </motion.section>
  );
};

export default About;
