import React from 'react';
import Header from './pages/Header';
import Hero from './pages/Hero';
import Projects from './pages/Projects'; // section baru

function App() {
  return (
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Header />
        <Hero />
        <Projects />
      </div>
  );
}

export default App;
