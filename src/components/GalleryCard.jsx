import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA PROYEK (Ganti dengan data Anda) ---
const projectsData = [
  {
    id: 'android-1',
    category: 'Android',
    title: 'Aplikasi SocialConnect',
    description: 'Aplikasi media sosial native untuk berbagi momen dengan teman dan keluarga.',
    image: 'https://images.unsplash.com/photo-1614332287897-f58c5f59aa28?q=80&w=800&auto=format&fit=crop',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase'],
  },
  {
    id: 'website-1',
    category: 'Website',
    title: 'Landing Page SaaS',
    description: 'Desain website modern untuk perusahaan teknologi dengan fokus pada konversi.',
    image: 'https://images.unsplash.com/photo-1559028012-211604c8c7b8?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 'uiux-1',
    category: 'UI/UX',
    title: 'Redesain Aplikasi E-commerce',
    description: 'Studi kasus lengkap tentang perancangan ulang pengalaman pengguna aplikasi belanja.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop',
    tags: ['Figma', 'User Research', 'Prototyping'],
  },
  {
    id: 'android-2',
    category: 'Android',
    title: 'Aplikasi Fitness Tracker',
    description: 'Monitor aktivitas olahraga, kalori, dan progres kebugaran Anda setiap hari.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
    tags: ['Kotlin', 'Google Fit API', 'Room DB'],
  },
  {
    id: 'website-2',
    category: 'Website',
    title: 'Portfolio Fotografer',
    description: 'Galeri web interaktif untuk menampilkan karya-karya seorang fotografer profesional.',
    image: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=800&auto=format&fit=crop',
    tags: ['Gatsby', 'GraphQL', 'GSAP'],
  },
  {
    id: 'uiux-2',
    category: 'UI/UX',
    title: 'Dashboard Analitik',
    description: 'Desain antarmuka untuk dashboard yang memvisualisasikan data kompleks.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tags: ['Figma', 'Data Visualization', 'Design System'],
  },
];

const categories = ['Semua', 'Android', 'Website', 'UI/UX'];

// --- Komponen Kartu Proyek ---
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout // Properti kunci untuk animasi penyusunan ulang yang mulus
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="bg-gray-800/50 rounded-2xl overflow-hidden group border border-transparent hover:border-cyan-500/50 transition-colors duration-300"
    >
      <div className="overflow-hidden h-48">
        <img
          src={project.image}
          alt={`Gambar untuk ${project.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="p-5">
        <p className="text-cyan-400 text-sm font-medium mb-1">{project.category}</p>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- Komponen Filter ---
const FilterControls = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 relative ${
            activeCategory === category
              ? 'text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-cyan-500 rounded-full z-0"
              transition={{ duration: 0.5, type: 'spring' }}
            />
          )}
          <span className="relative z-10">{category}</span>
        </button>
      ))}
    </div>
  );
};

// --- Komponen Utama Galeri ---
export default function GalleryCard() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Semua') {
      return projectsData;
    }
    return projectsData.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-[#0e0e0e] text-white font-sans py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">Karya & Proyek</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Kumpulan proyek yang pernah saya kerjakan, dari pengembangan aplikasi mobile hingga desain antarmuka.
          </p>
        </header>

        <FilterControls
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
