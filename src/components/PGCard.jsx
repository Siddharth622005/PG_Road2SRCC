import { Link } from 'react-router-dom';
import { CheckCircle2, Footprints } from 'lucide-react';
import PhotoBox from './PhotoBox';

export default function PGCard({ pg, collegeName }) {
  const primaryCollege = pg.colleges[0];
  const walkMins = pg.walkMins ?? primaryCollege.mins;
  const label = collegeName || primaryCollege.slug.toUpperCase();

  return (
    <Link to={`/pg/${pg.slug}`} className="card" style={{ display: 'block', overflow: 'hidden' }}>
      <PhotoBox ratio="4 / 3" label={pg.name} />
      <div style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <div>
            <h3 style={{ marginBottom: 2 }}>{pg.name}</h3>
            <p className="caption">{pg.area} · {pg.gender}</p>
          </div>
          <span className={`pill ${pg.stale ? 'pill-amber' : ''}`}>
            <CheckCircle2 size={14} /> {pg.stale ? 'Verified — recheck due' : `Verified ${pg.verifiedDate}`}
          </span>
        </div>
        <p className="tabular" style={{ marginTop: 12, fontSize: 18 }}>
          ₹{pg.price.toLocaleString('en-IN')}/mo <span style={{ fontWeight: 400, color: 'var(--ink-soft)', fontSize: 15 }}>· {pg.sharing}</span>
        </p>
        <p style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 6, color: 'var(--ink-soft)', fontSize: 15 }}>
          <Footprints size={16} /> {walkMins} min walk to {label}
        </p>
        <p style={{ marginTop: 12, fontStyle: 'italic', color: 'var(--ink-soft)', fontSize: 15 }}>
          "{pg.cardNote}"
        </p>
      </div>
    </Link>
  );
}
