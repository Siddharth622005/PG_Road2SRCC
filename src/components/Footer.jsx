import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <p>Road2SRCC is free for students. Every PG here was visited by us in person, and listings are shown neutrally — no rankings, no paid placement in ordering.</p>
        <div className="footer-links">
          <Link to="/report">Report a listing</Link>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <Link to="/about">About</Link>
          <Link to="/guide">Guide</Link>
        </div>
        <p style={{ marginTop: 24 }}>Made in North Campus, for North Campus.</p>
      </div>
    </div>
  );
}
