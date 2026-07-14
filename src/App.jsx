import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Discovery from './pages/Discovery';
import CollegeLanding from './pages/CollegeLanding';
import PGDetail from './pages/PGDetail';
import HowWeVerify from './pages/HowWeVerify';
import About from './pages/About';
import Guide from './pages/Guide';
import Report from './pages/Report';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Nav />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pgs" element={<Discovery />} />
          <Route path="/pg/:slug" element={<PGDetail />} />
          <Route path="/how-we-verify" element={<HowWeVerify />} />
          <Route path="/colleges/:college" element={<CollegeLanding />} />
          <Route path="/about" element={<About />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
