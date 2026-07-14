import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo">Road2SRCC<span className="dot">.</span></Link>
        <div className="nav-links">
          <Link to="/how-we-verify">How we verify</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
}
