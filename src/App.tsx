import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BootcampsPage from './pages/BootcampsPage';
import ContactPage from './pages/ContactPage';
import CohortPage from './pages/CohortPage';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import RocketCursor from './components/RocketCursor';

function App() {
  return (
    <div className="font-['Montserrat',sans-serif] text-gray-900">
      <ScrollProgress />
      <RocketCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bootcamps" element={<BootcampsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cohort" element={<CohortPage />} />
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;