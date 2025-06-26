import React, { useRef, useState, useEffect } from "react";
import TextReveal from '../components/TextReveal';
import { motion } from "framer-motion";
import { LayoutGroup } from "framer-motion";

const About = () => {
  const containerRef = useRef(null);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  return (
    <motion.section
      ref={containerRef}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.5 }}
      className="relative z-10 min-h-screen bg-[#fffbee] text-black transition-colors duration-500"
    >
    <div
      className="w-full h-16"
      style={{
        background: "linear-gradient(to top, #fffbee 0%, #d6d3cb 30%, #7e7e7e 60%, #0e0e0e 100%)",
      }}
    />

      <article className="w-full snap">
        <LayoutGroup>
          <div className="min-h-screen w-full mx-auto px-4 md:px-32 flex items-center justify-center py-20">
            <main
              className="flex flex-col justify-center items-center py-6 md:py-10 w-full h-full"
              style={{ fontFamily: 'Mori, Arial, sans-serif' }}
            >
              <div className="max-w-7xl w-full mx-auto px-4 md:px-12 gap-y-10 flex flex-col">
                <h1 className="text-xl font-semibold">X - About Me</h1>

                <h1 className="text-5xl md:text-7xl font-medium duration-500">
                  Experience in developing scalable web and mobile apps that drive innovation and deliver impactful user experiences.
                </h1>

                <h1 className="text-base md:text-xl duration-500 leading-relaxed">
                  With over 20 years of experience in product management and design, I specialise in transforming complex challenges 
                  into forward-thinking solutions by blending user-focused design with strategic business development. My expertise spans 
                  UX design thinking, comprehensive user and market research, usability testing, rapid prototyping, high-fidelity wireframing, 
                  and evidence-based validation across the entire product lifecycle. I’ve successfully led products from inception to market, 
                  empowering cross-functional teams to drive growth and revenue through a start-up-inspired, entrepreneurial mindset.
                </h1>
              </div>
            </main>
          </div>
        </LayoutGroup>
      </article>
    </motion.section>
  );
};

export default About;
