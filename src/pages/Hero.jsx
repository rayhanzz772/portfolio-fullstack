import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Button from '../components/ScrollDownButton';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion, useScroll, useTransform } from 'framer-motion';

function Hero() {
  const ref = useRef(null);

  // Ambil progress scroll
  const { scrollY } = useScroll();
  
  // Transformasi scroll menjadi gerakan vertikal lambat (parallax)
  const yParallax = useTransform(scrollY, [0, 500], [0, -150]); // semakin kecil, semakin lambat
  const yParallax2 = useTransform(scrollY, [0, 500], [0, 100]); // semakin kecil, semakin lambat

  return (
      <motion.div
        style={{ y: yParallax2 }}
        className="sticky top-0 z-0 container mx-auto px-6 h-full flex flex-col justify-center"
      >
    <main ref={ref} className="relative h-screen pt-0 bg-black pb-16 md:pb-24 z-0">
      {/* Konten Teks dengan efek parallax */}
      <motion.div
        style={{ y: yParallax }}
        className="sticky top-0 z-0 container mx-auto px-6 h-full flex flex-col justify-center"
      >
        <div className="flex flex-col gap-6 md:gap-9 lg:pl-0">
          <h1 className="pb-0 text-white text-[3rem] xs:text-[2rem] md:text-[4.5rem] lg:text-[5rem] font-bold leading-[0.99] md:leading-[0.95] max-w-[350px] md:max-w-[800px]">
            <TypeAnimation
              sequence={["Hi, I'm Rayhan — a Software Developer."]}
              wrapper="span"
              speed={50}
              repeat={1}
            />
          </h1>

          <p className="pb-3 text-white text-base xs:text-sm md:text-lg text-[#9c9c9c] lg:text-xl font-thin leading-snug max-w-[350px] md:max-w-[800px]">
            <TypeAnimation
              sequence={[
                "We partner with scientists, engineers and operators to build companies that slash emissions, remove carbon, and cool the planet."
              ]}
              wrapper="span"
              speed={100}
              repeat={1}
            />
          </p>

          <Button />
        </div>
        
      </motion.div>
    </main>
    </motion.div>
  );
}

export default Hero;
