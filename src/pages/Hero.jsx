import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Button from '../components/ScrollDownButton';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedBackground from '../components/AnimatedBackground';

function Hero() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax transform
  const yParallax = useTransform(scrollY, [0, 800], [0, -150]);

  // Intersection observer
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4, // Bisa diatur agar tidak terlalu sensitif
  });

  // Gabungkan kedua ref
  const setRefs = (el) => {
    sectionRef.current = el;
    inViewRef(el);
  };

  return (
    
    <motion.div
      className="sticky top-0 z-0 sm:px-4 md:px-6 max-w-screen-xl mx-auto flex flex-col items-start"
    >
      
      <main
        ref={setRefs}
        style={{fontFamily: 'Poppins, Arial, sans-serif'}}
        className="relative min-h-screen flex flex-col justify-center items-start pt-0 bg-black z-0"
      >
      <AnimatedBackground />

        <motion.div
          style={{ y: yParallax }}
          className="sticky top-0 z-0 max-w-screen-xl mx-auto flex flex-col justify-center"
        >
          
          <div className="flex flex-col gap-6 md:gap-9 lg:pl-0">
            {inView && (
              <>
                <h1 className="pb-0 text-white text-[2rem] xs:text-[1.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[0.99] md:leading-[0.95] max-w-[350px] md:max-w-[800px]">
                  <TypeAnimation
                    sequence={["Hi, I'm Rayhan — a Software Developer."]}
                    wrapper="span"
                    speed={50}
                    repeat={1}
                  />
                </h1>

                <p className="pb-3 text-base xs:text-sm md:text-lg text-[#9c9c9c] lg:text-xl font-thin leading-snug max-w-[350px] md:max-w-[800px]">
                  <TypeAnimation
                    sequence={[
                      "We partner with scientists, engineers and operators to build companies that slash emissions, remove carbon, and cool the planet.",
                    ]}
                    wrapper="span"
                    speed={100}
                    repeat={1}
                  />
                </p>

                <Button />
              </>
            )}
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}

export default Hero;
