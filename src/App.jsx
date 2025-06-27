// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';     // <- Hero, About, Gallery

// Projects Page
import Projects from './pages/Projects';     // <- Halaman Projects
import FloodSenseAI from './pages/Projects/FloodSenseAI';
import Bumdesma from './pages/Projects/Bumdesma';
import Sigasi from './pages/Projects/Sigasi';
import WeCare from './pages/Projects/WeCare';
import Sitari from './pages/Projects/Sitari';
import SoilAI from './pages/Projects/SoilAI';
import PMI from './pages/Projects/PMI';

// Certifiactions Page
import AppliedML from './pages/Certifications/AppliedML';
import MLAndroid from './pages/Certifications/MLAndroid';
import JWDBNSP from './pages/Certifications/JWDBNSP';
import SqlCertified from './pages/Certifications/SqlCertified';

// Awards Page
import EssayUPNVJ from './pages/Awards/EssayUPNVJ';
import UiuxPolines from './pages/Awards/UiuxPolines';
import AwardSoilAI from './pages/Awards/AwardSoilAI';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Projects App */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/floodsenseai" element={<FloodSenseAI />} />
        <Route path="/projects/bumdesma" element={<Bumdesma />} />
        <Route path="/projects/sigasi" element={<Sigasi />} />
        <Route path="/projects/wecare" element={<WeCare />} />
        <Route path="/projects/sitari" element={<Sitari />} />
        <Route path="/projects/soilai" element={<SoilAI />} />
        <Route path="/projects/pmi-pusdiklat-jateng-app" element={<PMI />} />

        {/* Certifications App */}
        <Route path="/certifications/applied-machine-learning" element={<AppliedML />} />
        <Route path="/certifications/machine-learning-android" element={<MLAndroid />} />
        <Route path="/certifications/junior-web-developer" element={<JWDBNSP />} />
        <Route path="/certifications/sql-certified" element={<SqlCertified />} />

        {/* Awards App */}
        <Route path="/awards/1st-winner-essay-competition" element={<EssayUPNVJ />} />
        <Route path="/awards/2nd-place-winner-ui/ux-competition" element={<UiuxPolines />} />
        <Route path="/awards/soilai" element={<AwardSoilAI />} />

      </Routes>
    </Router>
  );
}

export default App;
