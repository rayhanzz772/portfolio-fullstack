import React from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import About from './pages/About';
import { useLenis } from './hooks/useLenis'; // <-- ini kamu panggil

function App() {
  useLenis(); // activate smooth scroll

  return (
    <div className="relative bg-black">
      <Header />
      <Hero />
      <About />
      <Gallery />
    </div>
  );
}

export default App;
