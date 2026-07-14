import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Footprints, Phone, MessageCircle, Share2, X, Check } from 'lucide-react';
import { getPg, getCollege } from '../data/pgs';
import PhotoBox from '../components/PhotoBox';

export default function PGDetail() {
  const { slug } = useParams();
  const pg = getPg(slug);
  const [showVerifySheet, setShowVerifySheet] = useState(false);
  const [showAllChecks, setShowAllChecks] = useState(false);

  if (!pg) {
    return (
      <div className="section container text-container" style={{ textAlign: 'center' }}>
        <h2>This PG isn't listed anymore — usually means it filled up or stopped meeting our checks.</h2>
        <Link to="/pgs" className="btn btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>
          See PGs near the same college
        </Link>
      </div>
    );
  }

  const monthlyTotal = pg.price + (pg.extras || 0);
  const waMessage = encodeURIComponent(`Hi, I found ${pg.name} on Road2SRCC…`);
  const visibleChecks = showAllChecks ? pg.checklist : pg.checklist.slice(0, 4);

  function shareLink() {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: pg.name, text: 'Found this verified PG on Road2SRCC — sending to you.', url });
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copied — send it to your parents on WhatsApp.');
    }
  }

  return (
    <div style={{ paddingBottom: 88 }}>
      {/* Gallery */}
      <div className="container" style={{ paddingTop: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 12 }}>
          {pg.photos.map((photo, i) => (
            <PhotoBox key={i} ratio="4 / 3" label={pg.name} caption={photo.caption} tag={i === 0 ? `📷 Shot by Road2SRCC · ${pg.verifiedDate.split(' ').slice(1).join(' ')}` : undefined} />
          ))}
        </div>
      </div>

      <div className="text-container" style={{ marginTop: 32 }}>
        {/* Title block */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: 28 }}>{pg.name}</h1>
            <p style={{ color: 'var(--ink-soft)', marginTop: 4 }}>{pg.area} · {pg.gender}</p>
          </div>
          <button className={`pill ${pg.stale ? 'pill-amber' : ''}`} style={{ border: 'none' }} onClick={() => setShowVerifySheet(true)}>
            <CheckCircle2 size={14} /> Visited by us · {pg.verifiedDate}
          </button>
        </div>

        {/* Three answers card */}
        <div className="card" style={{ padding: 24, marginTop: 24 }}>
          <p className="tabular" style={{ fontSize: 22 }}>
            ₹{pg.price.toLocaleString('en-IN')}/month · {pg.sharing} · ₹{pg.deposit.toLocaleString('en-IN')} deposit · {pg.foodIncluded ? 'food included' : 'no food'}
          </p>
          <p style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <Footprints size={18} />
            {pg.colleges.map((c, i) => (
              <span key={c.slug}>
                {i > 0 && ' · '}{c.mins} min to {getCollege(c.slug)?.name}
              </span>
            ))}
          </p>
          <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>
            Warden on site · CCTV at entrance · {pg.rules[0]}
          </p>
          <p className="tabular" style={{ marginTop: 16, fontSize: 15, color: 'var(--green)' }}>
            What you'll actually pay per month: ~₹{monthlyTotal.toLocaleString('en-IN')}
          </p>
        </div>

        {/* Field notes */}
        <div style={{ marginTop: 40 }}>
          <h3>Our field notes</h3>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            {pg.fieldNotes.map((note, i) => (
              <li key={i} style={{ marginBottom: 8, color: 'var(--ink-soft)' }}>{note}</li>
            ))}
          </ul>
        </div>

        {/* What we checked */}
        <div style={{ marginTop: 40 }}>
          <h3>What we checked</h3>
          <div style={{ marginTop: 12 }}>
            {visibleChecks.map((check, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', color: 'var(--ink-soft)' }}>
                <Check size={16} color="var(--green)" /> {check}
              </div>
            ))}
          </div>
          {!showAllChecks && pg.checklist.length > 4 && (
            <button className="btn btn-ghost" style={{ height: 36, fontSize: 14, marginTop: 8 }} onClick={() => setShowAllChecks(true)}>
              See all {pg.checklist.length}
            </button>
          )}
        </div>

        {/* Amenities */}
        <div style={{ marginTop: 40 }}>
          <h3>Amenities</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 24px', marginTop: 12 }}>
            {pg.amenities.present.map((a) => (
              <span key={a} style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Check size={16} color="var(--green)" /> {a}</span>
            ))}
            {pg.amenities.absent.map((a) => (
              <span key={a} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--ink-soft)', textDecoration: 'line-through' }}>
                <X size={16} /> {a}
              </span>
            ))}
          </div>
        </div>

        {/* Getting around */}
        <div style={{ marginTop: 40 }}>
          <h3>Getting around</h3>
          <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>Nearest metro: {pg.metro}</p>
          <ul style={{ marginTop: 8, paddingLeft: 20 }}>
            {pg.nearby.map((n, i) => <li key={i} style={{ color: 'var(--ink-soft)', marginBottom: 4 }}>{n}</li>)}
          </ul>
          <div style={{ marginTop: 12 }}>
            <PhotoBox ratio="16 / 9" label="Static map — tap to open in Google Maps" />
          </div>
        </div>

        {/* House rules */}
        <div style={{ marginTop: 40 }}>
          <h3>House rules</h3>
          <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>Managed by {pg.warden}.</p>
          <ul style={{ marginTop: 8, paddingLeft: 20 }}>
            {pg.rules.map((r, i) => <li key={i} style={{ color: 'var(--ink-soft)', marginBottom: 4 }}>{r}</li>)}
          </ul>
        </div>

        <button className="btn btn-ghost" style={{ marginTop: 40, height: 44 }} onClick={shareLink}>
          <Share2 size={16} /> Send to your parents
        </button>

        <p style={{ marginTop: 40, color: 'var(--ink-soft)', fontSize: 14 }}>
          Talk directly to the owner. We take no commission — from you or them. Visit before you pay anything.
        </p>
      </div>

      {/* Sticky contact bar */}
      <div className="sticky-contact">
        <a className="btn btn-ghost" href={`tel:${pg.ownerPhone}`}>
          <Phone size={18} /> Call owner
        </a>
        <a className="btn btn-primary" href={`https://wa.me/91${pg.ownerPhone}?text=${waMessage}`} target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>

      {/* Verification sheet */}
      {showVerifySheet && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 30, display: 'flex', alignItems: 'flex-end' }} onClick={() => setShowVerifySheet(false)}>
          <div className="card" style={{ width: '100%', maxWidth: 640, margin: '0 auto', borderRadius: '16px 16px 0 0', padding: 24 }} onClick={(e) => e.stopPropagation()}>
            <h3>Visited by {pg.verifiedBy} on {pg.verifiedDate}</h3>
            <p style={{ marginTop: 12, color: 'var(--ink-soft)' }}>
              We visit every PG unannounced, talk to current residents, and check the full list below before listing anything.
            </p>
            <div style={{ marginTop: 16 }}>
              {pg.checklist.map((check, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0' }}>
                  <Check size={16} color="var(--green)" /> {check}
                </div>
              ))}
            </div>
            <button className="btn btn-ghost" style={{ marginTop: 20 }} onClick={() => setShowVerifySheet(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
