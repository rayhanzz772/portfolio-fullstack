import React, { useEffect } from 'react';
// Impor 'motion' dan 'useInView' dari pustaka framer-motion
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Komponen utama yang akan kita gunakan untuk efek text reveal
const TextReveal = ({ children, className }) => {
  // useAnimation adalah hook dari framer-motion untuk mengontrol animasi secara manual
  const controls = useAnimation();
  // useInView adalah hook untuk mendeteksi kapan komponen masuk ke dalam viewport
  const { ref, inView } = useInView({
    threshold: 0.5, // Animasi akan terpicu ketika 50% komponen terlihat
  });

  // useEffect akan berjalan setiap kali nilai 'inView' berubah
  useEffect(() => {
    if (inView) {
      // Jika komponen terlihat, mulai animasi 'visible'
      controls.start('visible');
    } else {
      // Jika komponen keluar dari pandangan, kembalikan ke state 'hidden' agar bisa beranimasi lagi
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Memisahkan teks menjadi kata-kata
  const words = children.split(' ');

  // Varian untuk kontainer yang akan mengatur animasi stagger (bergiliran)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08, // Jeda 0.08 detik antara animasi setiap kata
      },
    },
  };

  // Varian untuk setiap kata, mendefinisikan bagaimana kata akan muncul
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20, // Mulai dari 20px di bawah posisi akhir
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
    visible: {
      opacity: 1,
      y: 0, // Kembali ke posisi normal
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.h1
      className={className}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: 'inline-block', marginRight: '0.25em' }} // Beri jarak antar kata
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TextReveal;