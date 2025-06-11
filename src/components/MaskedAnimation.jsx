import React from 'react';
import Button from '../components/ScrollDownButton';
import { motion, useScroll, useTransform } from 'framer-motion';

const MaskedAnimation = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);

  const createLineAnimation = (text, delay = 0) => (
    <div className="overflow-hidden leading-[1.2] min-h-[1.2em]">
      <motion.span
        className="inline-block"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1], delay }}
      >
        {text}
      </motion.span>
    </div>
  );

  return (
    <div className="h-screen w-full flex flex-col justify-center items-start px-4 md:px-8">
      <motion.h1
        className="text-white text-[2rem] xs:text-[1.5rem] md:text-[4.5rem] lg:text-[5rem] font-bold leading-[0.99] md:leading-[0.95] max-w-[350px] md:max-w-[800px]"
        style={{ opacity, scale }}
      >
        {createLineAnimation("Hi, I'm Rayhan — a")}
        {createLineAnimation("Software Developer.", 0.1)}
      </motion.h1>

      <motion.p
        className="text-base xs:text-sm mb-10 md:text-lg text-[#9c9c9c] lg:text-xl font-thin leading-snug max-w-[350px] md:max-w-[800px]"
        style={{ opacity, scale }}
      >
        {createLineAnimation("We partner with scientists, engineers and operators to build", 0.3)}
        {createLineAnimation("companies that slash emissions, remove carbon, and cool the planet.", 0.4)}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Button />
      </motion.div>
    </div>
  );
};

export default MaskedAnimation;
