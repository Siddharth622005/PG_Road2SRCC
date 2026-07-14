import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { colleges } from '../data/pgs';
import PhotoBox from '../components/PhotoBox';

export default function Landing() {
  const [college, setCollege] = useState('');
  const navigate = useNavigate();

  function go() {
    if (college) navigate(`/colleges/${college}`);
    else navigate('/pgs');
  }

  return (
    <div>
      {/* Hero */}
      <div className="section" style={{ paddingTop: 56 }}>
        <div className="container">
          <div style={{ maxWidth: 640, margin: '0 auto 40px' }}>
            <PhotoBox ratio="16 / 10" label="A real PG room — desk, made bed, morning light" />
          </div>
          <div className="text-container" style={{ textAlign: 'center' }}>
            <h1>Every PG here, we've visited ourselves.</h1>
            <p style={{ marginTop: 16, fontSize: 18, color: 'var(--ink-soft)' }}>
              Verified PGs near SRCC, Hindu, Hansraj &amp; other DU North Campus colleges.
              Free for students. No brokerage. Ever.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <select
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                style={{
                  height: 52, borderRadius: 12, border: '1px solid var(--border)',
                  padding: '0 16px', fontSize: 16, background: '#fff', minWidth: 240,
                }}
              >
                <option value="">Which college did you get into?</option>
                {colleges.map((c) => (
                  <option key={c.slug} value={c.slug}>{c.full}</option>
                ))}
              </select>
              <button className="btn btn-primary" onClick={go}>Show me PGs</button>
            </div>
          </div>
        </div>
      </div>

      {/* Counter strip */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '28px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap', textAlign: 'center' }}>
          <span className="tabular">74 <span style={{ fontWeight: 400, color: 'var(--ink-soft)' }}>PGs visited</span></span>
          <span className="tabular">31 <span style={{ fontWeight: 400, color: 'var(--ink-soft)' }}>listed</span></span>
          <span className="tabular">₹0 <span style={{ fontWeight: 400, color: 'var(--ink-soft)' }}>charged to students</span></span>
        </div>
      </div>

      {/* How verification works */}
      <div className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 12 }}>What we check before listing anything</h2>
          <p style={{ textAlign: 'center', color: 'var(--ink-soft)', maxWidth: 560, margin: '0 auto 48px' }}>
            We visit unannounced. We check what brokers hide. We list it only if we'd let our own sibling stay there.
          </p>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: 24 }}>
            <div>
              <PhotoBox ratio="4 / 3" label="Standing outside a PG" />
              <p style={{ marginTop: 12, fontWeight: 600 }}>We show up unannounced</p>
            </div>
            <div>
              <PhotoBox ratio="4 / 3" label="Checking a bathroom" />
              <p style={{ marginTop: 12, fontWeight: 600 }}>We check what brokers hide</p>
            </div>
            <div>
              <PhotoBox ratio="4 / 3" label="Talking to an owner" />
              <p style={{ marginTop: 12, fontWeight: 600 }}>We talk to the owner and residents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Browse by college */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 style={{ marginBottom: 24 }}>Browse by college</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 16 }}>
            {colleges.map((c) => (
              <Link key={c.slug} to={`/colleges/${c.slug}`} className="card" style={{ padding: 20, display: 'block' }}>
                <p style={{ fontWeight: 600 }}>PGs near {c.name}</p>
                <p className="caption" style={{ marginTop: 4 }}>{c.full}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Founder note */}
      <div className="section">
        <div className="text-container">
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ width: 96, flexShrink: 0 }}>
              <PhotoBox ratio="1 / 1" label="Founder" />
            </div>
            <div>
              <p style={{ fontSize: 18 }}>
                "I moved to Delhi in 2023 and got scammed twice before finding a PG.
                This site is what I wish had existed."
              </p>
              <p className="caption" style={{ marginTop: 12 }}>— Sidd, founder, Road2SRCC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
