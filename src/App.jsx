// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';     // <- Hero, About, Gallery
import Projects from './pages/Projects';     // <- Halaman Projects
import FloodSenseAI from './pages/Projects/FloodSenseAI';
import Bumdesma from './pages/Projects/Bumdesma';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio/" element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/floodsenseai" element={<FloodSenseAI />} />
        <Route path="/projects/bumdesma" element={<Bumdesma />} />
        <Route path="/projects/floodsenseai" element={<FloodSenseAI />} />
      </Routes>
    </Router>
  );
}

export default App;
