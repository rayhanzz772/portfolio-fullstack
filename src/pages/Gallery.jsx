import React, { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSeparator from "../components/AnimatedSeparator";
import TextReveal from '../components/TextReveal';
import { useInView } from 'react-intersection-observer';
import RunningLogos from "../components/RunningLogos";

const Gallery = () => {
  const containerRef = useRef(null);
  

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false, // supaya bisa toggle warnanya saat scroll
    threshold: 0.4,
  });

  // Background color logic — ditempatkan SETELAH inView terdefinisi
  const backgroundColor = inView ? "#ffffff" : "#0e0e0e";
  const textColor = inView ? "#0e0e0e" : "#ffffff";

  return (

    <>
    
    <motion.section
      ref={containerRef}
      className="relative z-10 flex items-start justify-start"
      style={{
        backgroundColor,
        color: textColor,
        transition: "background-color 0.5s ease, color 0.5s ease",
      }}
    >
      <article className="w-[100vw] min-h-screen md:px-24 p-4 mx-auto flex-col justify-start">
          <TextReveal className="text-4xl md:text-2xl text-left mt-20 mb-2">
            <h1 className="font-ppvalve font-light whitespace-nowrap">
             X - Welcome to my portfolio.
            </h1>
          </TextReveal> 

          <div className="flex w-full h-full pt-5 justify-around">
            <div className="bg-orange-600 w-8 h-4 mr-9 mt-2 rounded-full"></div>

            <TextReveal className="text-4xl md:text-8xl text-left mb-10">
              <h1 className="font-mori">Turn <span className="animated-text">complexity</span> into clarity through thoughtful software engineering.</h1>
            </TextReveal>
          </div>

          <div className="my-10">
            {/* Website Dev */}
            <div className="group font-mori flex w-full h-full pt-5 justify-start gap-8 transition-colors duration-300">
              <div className="w-2/6 text-4xl">
                <h1 className="text-gray-400 group-hover:text-white transition-colors duration-300">
                Website Dev
                </h1>
              </div>

              <div className="w-4/6">
                <TextReveal className="text-2xl text-gray-400 group-hover:text-white transition-colors duration-300">
                  <h1 className="font-mori">
                  I build efficient, scalable web applications using Laravel, React, and Tailwind CSS — delivering clean backends, interactive frontends, and seamless user experiences.
                  </h1>
                </TextReveal>
              </div>
            </div>

            {/* Android Dev */}
            <div className="group font-mori flex w-full h-full pt-5 justify-start gap-8 transition-colors duration-300">
              <div className="w-2/6 text-4xl">
                <h1 className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  Android Dev
                </h1>
              </div>

              <div className="w-4/6">
                <h1 className="text-2xl font-mori text-gray-400 group-hover:text-white transition-colors duration-300">
                  By leveraging Flutter’s expressive UI and fast development cycle, I deliver Android apps that are both beautiful and functional — built from a single codebase, yet optimized for native performance and responsiveness.
                </h1>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="group font-mori flex w-full h-full pt-5 justify-start gap-8 transition-colors duration-300">
              <div className="w-2/6 text-4xl">
                <h1 className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  UI/UX Design
                </h1>
              </div>

              <div className="w-4/6">
                <h1 className="text-2xl font-mori text-gray-400 group-hover:text-white transition-colors duration-300">
                  With a user-centered approach, I design seamless digital experiences — from wireframes and prototypes to polished interfaces — ensuring that every interaction feels natural, purposeful, and efficient.
                </h1>
              </div>
            </div>
          </div>

          <RunningLogos/>
        
      </article>
    </motion.section>
    </>
  );
};

export default Gallery;
