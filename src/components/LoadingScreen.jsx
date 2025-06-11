import React, { useState, useEffect } from 'react';

// Daftar ucapan selamat datang dari berbagai bahasa
const GREETINGS = [
  'Halo',
  'Hello',
  'Bonjour',
  'Hola',
  'Ciao',
  'こんにちは',
  '안녕하세요',
  '你好',
  'Olá',
  'Guten Tag',
  'Привет'
];

// Durasi total loading screen dalam milidetik (misal: 3 detik)
const TOTAL_LOADING_TIME = 4000; 

// Durasi setiap ucapan muncul di layar dalam milidetik
const GREETING_INTERVAL = 400;

// Durasi untuk animasi fade out
const FADE_OUT_DURATION = 500;

// Komponen untuk Loading Screen
export default function LoadingScreen({ isExiting }) {
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  // useEffect untuk mengganti ucapan secara berkala
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGreetingIndex(prevIndex => (prevIndex + 1) % GREETINGS.length);
    }, GREETING_INTERVAL);

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, []);

  // Custom CSS untuk animasi
  // Menambahkan animasi fadeOut
  const styles = `
    @keyframes fadeInOut {
      0%, 100% { opacity: 0; transform: translateY(10px); }
      50% { opacity: 1; transform: translateY(0); }
    }

    @keyframes dot-bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1.0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }

    .animate-fadeInOut {
      animation: fadeInOut ${GREETING_INTERVAL / 500}s ease-in-out infinite;
    }

    .animate-fadeOut {
        animation: fadeOut ${FADE_OUT_DURATION / 1000}s ease-out forwards;
    }
    
    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: white;
      margin: 0 4px;
    }

    .dot-1 { animation: dot-bounce 1.4s infinite ease-in-out both; animation-delay: -0.32s; }
    .dot-2 { animation: dot-bounce 1.4s infinite ease-in-out both; animation-delay: -0.16s; }
    .dot-3 { animation: dot-bounce 1.4s infinite ease-in-out both; }
  `;

  return (
    <>
      <style>{styles}</style>
      {/* Menambahkan kelas animasi fadeOut secara kondisional */}
      <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white font-sans ${isExiting ? 'animate-fadeOut' : ''}`}>
        <div className="text-center h-16">
          <h1 key={currentGreetingIndex} className="text-4xl md:text-5xl font animate-fadeInOut">
            {GREETINGS[currentGreetingIndex]}
          </h1>
        </div>
        <div className="absolute bottom-20 flex">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
        </div>
      </div>
    </>
  );
}