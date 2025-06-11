import React, { useRef, useState, useEffect } from "react";
import TextReveal from '../components/TextReveal';
import { motion, useScroll, LayoutGroup, useSpring, useTransform } from "framer-motion";
import { Sparkles } from '../components/Sparkles';


// Data untuk item galeri kita
const items = [
  {
    id: 1,
    title: "Pegunungan Alpen",
    subtitle: "Swiss",
    imgSrc: "https://blog.tubikstudio.com/wp-content/uploads/2023/07/AR-social-network-design-tubik.jpg"
  },
  {
    id: 2,
    title: "Pantai Kuta",
    subtitle: "Bali, Indonesia",
    imgSrc: "https://blog.tubikstudio.com/wp-content/uploads/2024/08/business-management-tool-website-design-tubik.jpg"
  },
  {
    id: 3,
    title: "Gurun Sahara",
    subtitle: "Afrika Utara",
    imgSrc: "https://api.incode-systems.com/uploads/Shot3_1_1_89f32911cb.png"
  },
  {
    id: 4,
    title: "Hutan Amazon",
    subtitle: "Amerika Selatan",
    imgSrc: "https://freight.cargo.site/w/6000/q/75/i/0cf2f0da9daa22cd6291fee37d586b5a3521ecd3ff40bc118b628c722f93f430/Simple-Mockup-Free-Scene.jpg"
  }
];

// Komponen untuk satu item di galeri
function Card({ item, onSelect, variants }) {
  return (
    // Mengubah <li> menjadi <motion.li> dan menambahkan prop variants
    <motion.li 
      className="relative rounded-xl cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-purple-500 hover:ring-offset-4 hover:ring-offset-[#0b1012]" 
      onClick={() => onSelect(item)}
      variants={variants}
    >
      <motion.img
        layoutId={`card-image-${item.id}`}
        src={item.imgSrc}
        alt={item.title}
        className="w-full h-48 object-cover rounded-xl shadow-lg"
      />
      <motion.div
        layout
        className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 rounded-b-xl"
      >
        <motion.h2 layoutId={`card-title-${item.id}`} className="text-xl font-bold text-white">{item.title}</motion.h2>
        <motion.h3 layoutId={`card-subtitle-${item.id}`} className="text-sm text-gray-300">{item.subtitle}</motion.h3>
      </motion.div>
    </motion.li>
  );
}

// Komponen Modal yang akan tampil saat item dipilih
function ExpandedCard({ item, onDeselect }) {
  return (
    <div
      onClick={onDeselect}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 cursor-pointer p-4"
    >
      <div className="bg-gray-800 rounded-2xl w-full max-w-xl overflow-hidden cursor-default" onClick={(e) => e.stopPropagation()}>
        <motion.img
          layoutId={`card-image-${item.id}`}
          src={item.imgSrc}
          alt={item.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <motion.h2 layoutId={`card-title-${item.id}`} className="text-3xl font-bold text-white mb-2">{item.title}</motion.h2>
          <motion.h3 layoutId={`card-subtitle-${item.id}`} className="text-lg text-gray-400 mb-4">{item.subtitle}</motion.h3>
          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.3, delay: 0.2 }}
             className="text-gray-300"
          >
            Ini adalah deskripsi detail tentang {item.title}. Anda dapat menambahkan konten apa pun di sini. 
            Animasi `layoutId` memungkinkan transisi yang mulus dari tampilan grid ke tampilan detail ini.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

const Gallery = () => {
const containerRef = useRef(null);
const [selectedItem, setSelectedItem] = useState(null);

  // Get scroll progress
const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth the scroll
const smoothScroll = useSpring(scrollYProgress, {
stiffness: 100,
damping: 20,
mass: 1,
});

const Ref = useRef(null);
const [viewportHeight, setViewportHeight] = useState(0);

// Ambil tinggi layar saat mount
useEffect(() => {
  setViewportHeight(window.innerHeight);
}, []);

const { scrollY } = useScroll();

// Parallax dimulai saat user scroll ke layar kedua

  // Varian untuk kontainer galeri, mengatur animasi stagger (bergiliran)
  const galleryContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Jeda 0.15 detik antar animasi setiap kartu
      },
    },
  };

  // Varian untuk setiap kartu individual
  const cardVariants = {
    hidden: { y: 20, opacity: 0 }, // Mulai dari bawah dan transparan
    visible: { y: 0, opacity: 1 },  // Berakhir di posisi normal dan terlihat
  };

  return (
    <>
    <motion.section
      ref={Ref}
      className="relative z-10 min-h-screen text-white"
    >
        <article id="gallery" ref={containerRef} className="w-[98vw] snap">
            {/* Isi project */}

    <LayoutGroup>
      <main className="bg-[#0e0e0e] p-8 text-white" style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen">
          
            <div className="text-center md:text-left">
                <TextReveal className="text-6xl font-bold text-white mb-4 md:text-m">
                        My Gallery Projects
                </TextReveal>

                <TextReveal className="text-m font-thin mb-4 md:text-m text-[#9c9c9c]">
                Computer Engineering Technology student at Politeknik Negeri Semarang with 1+ years of
                experience in developing scalable web and mobile apps. Delivered impactful projects including
                an AI-based flood monitoring system and cross-platform apps that boosted operational
                efficiency. Proficient in Flutter, Laravel, and DevOps. Enthusiastic about applying technical skills
                to tackle challenges and contribute to innovative projects in a professional, growth-focused
                environment. Keen to apply my skills in real-world settings and keep learning through hands-on
                experience.

                </TextReveal>

            </div>
          
            <div>
                {/* Mengubah <ul> menjadi <motion.ul> dan menerapkan varian */}
                <motion.ul 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                variants={galleryContainerVariants}
                initial="hidden"
                animate="visible"
                >
                {items.map(item => (
                    <Card key={item.id} item={item} onSelect={setSelectedItem} variants={cardVariants} />
                ))}
                </motion.ul>
            </div>

        </div>

        {selectedItem && (
          <ExpandedCard item={selectedItem} onDeselect={() => setSelectedItem(null)} />
        )}
      </main>
    </LayoutGroup>

            {/* terakhir isi project */}
        </article>
      <motion.div
        className="progress fixed left-0 right-0 bottom-[50px] h-[5px] bg-[#9911ff] origin-left"
        style={{ scaleX: smoothScroll }}
      />
    </motion.section>

    </>
  );
};

export default Gallery;
