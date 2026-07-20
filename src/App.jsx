import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Browse from './pages/Browse';
import PGDetail from './pages/PGDetail';
import HowWeVerify from './pages/HowWeVerify';
import About from './pages/About';
import Guide from './pages/Guide';
import Report from './pages/Report';
import Brief from './pages/Brief';
import Shortlist from './pages/Shortlist';
import ParentView from './pages/ParentView';
import AdminStatus from './pages/AdminStatus';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Old college landing URLs now land on the browse page, pre-filtered.
function CollegeRedirect() {
  const { college } = useParams();
  return <Navigate to={`/?college=${college}`} replace />;
}

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Nav />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/pgs" element={<Navigate to="/" replace />} />
          <Route path="/pg/:slug" element={<PGDetail />} />
          <Route path="/pg/:slug/parents" element={<ParentView />} />
          <Route path="/brief" element={<Brief />} />
          <Route path="/shortlist" element={<Shortlist />} />
          <Route path="/how-we-verify" element={<HowWeVerify />} />
          <Route path="/colleges/:college" element={<CollegeRedirect />} />
          <Route path="/about" element={<About />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/report" element={<Report />} />
          <Route path="/status" element={<AdminStatus />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
