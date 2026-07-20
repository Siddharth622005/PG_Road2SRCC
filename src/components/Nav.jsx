import { Link } from 'react-router-dom';
import { Bookmark } from 'lucide-react';
import { useShortlist } from '../lib/store';

export default function Nav() {
  const { slugs } = useShortlist();
  return (
    <div className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo">Road2SRCC<span className="dot">.</span></Link>
        <div className="nav-links" style={{ alignItems: 'center' }}>
          <Link to="/how-we-verify">How we verify</Link>
          <Link to="/about">About</Link>
          <Link to="/shortlist" style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <Bookmark size={15} /> Shortlist{slugs.length > 0 ? ` (${slugs.length})` : ''}
          </Link>
        </div>
      </div>
    </div>
  );
}
