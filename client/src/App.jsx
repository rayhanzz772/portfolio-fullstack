// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';     // <- Hero, About, Gallery

// Projects Page
import Overview from './pages/Overview';     // <- Halaman Projects
import DetailPage from './pages/DetailPage';

// Certifiactions Page


// Awards Page


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio" element={<Overview />} />

        {/* Dynamic detail page untuk semua jenis */}
        <Route path="/projects/:slug" element={<DetailPage />} />
        <Route path="/certifications/:slug" element={<DetailPage />} />
        <Route path="/awards/:slug" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
