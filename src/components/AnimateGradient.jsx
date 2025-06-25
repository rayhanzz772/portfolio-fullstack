import React from 'react';
import { motion } from 'framer-motion';

const AnimateGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="min-h-screen rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #fcd7f7, #e2f0ff, #cfcaff)',
          filter: 'blur(60px)',
          opacity: 0.65
        }}
      />

    </div>
  );
};

export default AnimateGradient;

