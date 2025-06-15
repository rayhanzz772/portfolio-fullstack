import { motion } from "framer-motion";

const RevealOnScroll = ({ children, x = 0, y = 40, duration = 0.6, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
