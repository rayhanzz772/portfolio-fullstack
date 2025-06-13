import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Button from '../components/ScrollDownButton';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedBackground from '../components/AnimatedBackground';
import TextReveal from '../components/TextReveal';

function Hero() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax transform
  const yParallax = useTransform(scrollY, [10, 800], [0, -150]);

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
      className="sticky top-0 z-0 sm:px-4 px-4 md:px-6 max-w-screen-xl mx-auto flex flex-col items-start"
    >
      
<main
  ref={setRefs}
  style={{ fontFamily: 'Mori, sans-serif' }}
  className="relative min-h-screen flex flex-col justify-start items-start pt-28 bg-black z-0"
>

      <AnimatedBackground />

        <motion.div
          style={{ y: yParallax }}
          className="sticky top-0 z-0 py-10 max-w-screen-xl mx-auto flex flex-col justify-center"
        >
          
          <div className="flex flex-col gap-6 md:gap-9 lg:pl-0">
            {inView && (
              <>
                <h1 className="pb-0 text-white text-[2rem] font-semibold xs:text-[1.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[0.99] md:leading-[0.95] max-w-[350px] md:max-w-[800px]">
                  <TypeAnimation
                    sequence={["Hi, I'm Rayhan — a Software Developer."]}
                    wrapper="span"
                    speed={50}
                    repeat={1}
                  />
                </h1>

                  <TextReveal className="text-4xl font-bold mb-4 md:text-4xl">
                    <span className="inline hover-target bg-white text-black font-extralight px-1 rounded-sm">We partner with scientists, engineers and operators to build companies that slash emissions, remove carbon, and cool the planet.</span>
                  </TextReveal>

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
