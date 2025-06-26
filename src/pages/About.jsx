import React, { useRef, useState, useEffect } from "react";
import TextReveal from '../components/TextReveal';
import { motion } from "framer-motion";
import { LayoutGroup } from "framer-motion";
import saya from '/photos/saya.jpeg';

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
      className="relative z-10 min-h-screen bg-[#fffbee] text-[#0e0e0e] transition-colors duration-500"
    >


      <article className="w-full snap">

        <LayoutGroup>
          <div className="min-h-screen w-full mx-auto px-2 lg:px-32 flex items-center justify-center py-20 lg:pb-10 lg:pt-20">
            <main
              className="flex flex-col justify-center items-center py-6 md:py-10 w-full h-full"
              style={{ fontFamily: 'Mori, Arial, sans-serif' }}
            >
              <div className="max-w-7xl w-full mx-auto px-4 md:px-12 flex flex-col">

                <div className="flex flex-col-reverse items-start gap-4 mb-5 lg:flex-row lg:justify-between lg:items-center">
                  <h1 className="text-sm lg:text-xl">X - About Me</h1>
                  <TextReveal>
                    <img
                      src={saya}
                      alt="Foto Saya"
                      className="w-20 h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-full object-cover"
                    />
                    </TextReveal>

                </div>

                <TextReveal>
                  <h1 className="
                  text-3xl
                  md:text-4xl 
                  lg:text-4xl 
                  xl:text-7xl 
                  font-medium duration-500 mb-5 lg:mb-10">
                    Experience in developing scalable web and mobile apps that drive innovation and deliver impactful user experiences.
                  </h1>
                </TextReveal>

                <TextReveal>
                  <h1 className="text-[18px] md:text-xl duration-500 leading-relaxed mb-2 text-gray-600">
                    With a strong foundation in Informatics Engineering and hands-on experience across web development, mobile apps, and smart systems, 
                    I specialise in building practical, user-focused solutions by combining thoughtful design with technical execution. My experience spans
                     WordPress customization, Laravel-based ERP systems, IoT integrations with Flutter, and UI/UX prototyping using modern frontend frameworks.
                      I’ve led several academic and real-world projects—ranging from inventory systems to smart device controllers—collaborating with stakeholders
                       to deliver scalable, intuitive products.
                  </h1>
                </TextReveal>

              </div>
            </main>
          </div>
        </LayoutGroup>
      </article>
      <div className="text-right font-helvetica p-4 text-[#0e0e0e]">@2025 Rayhan Maulana</div>
    </motion.section>
  );
};

export default About;
