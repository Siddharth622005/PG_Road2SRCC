import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  CheckCircle2, Footprints, Phone, MessageCircle, X, Check,
  Bookmark, BookmarkCheck,
} from 'lucide-react';
import { getPg, getCollege, daysSince } from '../data/pgs';
import { useShortlist } from '../lib/store';
import PhotoBox from '../components/PhotoBox';
import EvidenceChip from '../components/EvidenceChip';

export default function PGDetail() {
  const { slug } = useParams();
  const pg = getPg(slug);
  const [showAllChecks, setShowAllChecks] = useState(false);
  const [roomTypeId, setRoomTypeId] = useState(pg?.roomTypes ? pg.roomTypes[0].id : null);
  const shortlist = useShortlist();

  if (!pg) {
    return (
      <div className="section container text-container" style={{ textAlign: 'center' }}>
        <h2>This PG isn't listed anymore — usually means it filled up or stopped meeting our checks.</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>
          Browse all PGs
        </Link>
      </div>
    );
  }

  // A listing with multiple room types picks one to drive price, deposit,
  // sharing text, and photos — everything else on the page (checks, rules,
  // amenities, building photos) is shared. Some tiers are a range (owner
  // gave "₹19,000–22,000") rather than an exact figure.
  const formatPrice = (rt) => rt.priceMax
    ? `₹${rt.price.toLocaleString('en-IN')}–${rt.priceMax.toLocaleString('en-IN')}`
    : `₹${rt.price.toLocaleString('en-IN')}`;
  const roomType = pg.roomTypes ? pg.roomTypes.find((rt) => rt.id === roomTypeId) : null;
  const effectivePrice = roomType ? roomType.price : pg.price;
  const effectiveDeposit = roomType ? roomType.deposit : pg.deposit;
  const effectiveSharing = roomType ? roomType.label.toLowerCase() : pg.sharing;

  const monthlyTotal = effectivePrice + (pg.extras || 0);
  const firstMonthTotal = monthlyTotal + effectiveDeposit;
  const waMessage = encodeURIComponent(`Hi, I found ${pg.name} on Road2SRCC…`);
  const visibleChecks = showAllChecks ? pg.checks : pg.checks.slice(0, 5);
  const saved = shortlist.has(pg.slug);
  const priceDays = daysSince(pg.priceConfirmed);

  return (
    <div style={{ paddingBottom: 88 }}>
      {/* Gallery */}
      <div className="container" style={{ paddingTop: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 12 }}>
          {pg.photos.map((photo, i) => (
            <PhotoBox
              key={i}
              ratio="4 / 3"
              label={pg.name}
              caption={photo.caption}
              src={photo.src}
              tag={i === 0 && photo.src
                ? (pg.photosOwnerSupplied
                  ? `📷 Provided by the owner — not independently shot by us`
                  : `📷 Shot by Road2SRCC · ${pg.verifiedDate.split(' ').slice(1).join(' ')}`)
                : undefined}
            />
          ))}
        </div>
        {pg.videos && pg.videos.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 12, marginTop: 12 }}>
            {pg.videos.map((v, i) => (
              <div key={i}>
                <video src={v.src} controls preload="metadata" style={{ width: '100%', borderRadius: 12, display: 'block', background: '#000' }} />
                <p className="caption" style={{ marginTop: 6 }}>{v.caption}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="text-container" style={{ marginTop: 32 }}>
        {/* Title block */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: 28 }}>{pg.name}</h1>
            <p style={{ color: 'var(--ink-soft)', marginTop: 4 }}>{pg.area} · {pg.gender}</p>
          </div>
          <button
            className={`btn ${saved ? 'btn-primary' : 'btn-ghost'}`}
            style={{ height: 44, fontSize: 14 }}
            onClick={() => shortlist.toggle(pg.slug)}
          >
            {saved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
            {saved ? 'On your shortlist' : 'Add to shortlist'}
          </button>
        </div>

        {/* Verification state, as a sentence */}
        <p style={{ marginTop: 12, fontSize: 15, color: 'var(--ink-soft)', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <CheckCircle2 size={16} color="var(--green)" style={{ flexShrink: 0 }} />
          <span>
            Visited by <strong style={{ color: 'var(--ink)' }}>{pg.verifierNote}</strong> on {pg.verifiedDate} · price confirmed by owner{' '}
            {priceDays === 0 ? 'today' : priceDays === 1 ? 'yesterday' : `${priceDays} days ago`}
          </span>
        </p>

        {/* Room type picker — only for listings with more than one room type */}
        {pg.roomTypes && (
          <div style={{ marginTop: 20 }}>
            <p className="caption">{pg.roomTypes.length} room types under one roof — pick one</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
              {pg.roomTypes.map((rt) => (
                <button
                  key={rt.id}
                  className={`btn ${rt.id === roomTypeId ? 'btn-primary' : 'btn-ghost'}`}
                  style={{ height: 44, fontSize: 14 }}
                  onClick={() => setRoomTypeId(rt.id)}
                >
                  {rt.label} · {formatPrice(rt)}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Three answers card */}
        <div className="card" style={{ padding: 24, marginTop: pg.roomTypes ? 12 : 20 }}>
          <p className="tabular" style={{ fontSize: 22 }}>
            {roomType ? formatPrice(roomType) : `₹${effectivePrice.toLocaleString('en-IN')}`}/month · {effectiveSharing} · ₹{effectiveDeposit.toLocaleString('en-IN')} deposit · {pg.foodIncluded ? 'food included' : 'no food'}
          </p>
          {roomType?.priceMax && (
            <p className="caption" style={{ marginTop: 4 }}>Owner gave this as a range, not a fixed price — confirm the exact number for your specific room.</p>
          )}
          <p style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <Footprints size={18} />
            {pg.colleges.map((c, i) => (
              <span key={c.slug}>
                {i > 0 && ' · '}{c.mins} min to {getCollege(c.slug)?.name}
              </span>
            ))}
          </p>
          <p className="tabular" style={{ marginTop: 16, fontSize: 15, color: 'var(--green)' }}>
            What you'll actually pay per month: ~₹{monthlyTotal.toLocaleString('en-IN')} · first month: ~₹{firstMonthTotal.toLocaleString('en-IN')} (incl. deposit)
          </p>
        </div>

        {/* Room-type-specific photos and video */}
        {roomType && (
          <div style={{ marginTop: 24 }}>
            {roomType.photos.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 12 }}>
                {roomType.photos.map((photo, i) => (
                  <PhotoBox key={i} ratio="4 / 3" label={roomType.label} caption={photo.caption} src={photo.src} />
                ))}
              </div>
            )}
            {roomType.videos && roomType.videos.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 12, marginTop: roomType.photos.length > 0 ? 12 : 0 }}>
                {roomType.videos.map((v, i) => (
                  <div key={i}>
                    <video src={v.src} controls preload="metadata" style={{ width: '100%', borderRadius: 12, display: 'block', background: '#000' }} />
                    <p className="caption" style={{ marginTop: 6 }}>{v.caption}</p>
                  </div>
                ))}
              </div>
            )}
            <p className="caption" style={{ marginTop: 8 }}>{roomType.note}</p>
          </div>
        )}

        {/* Field notes */}
        <div style={{ marginTop: 40 }}>
          <h3>Our field notes</h3>
          <p className="caption" style={{ marginTop: 4 }}>Written by {pg.verifierNote} during the visit. Unedited.</p>
          <ul style={{ marginTop: 12, paddingLeft: 20 }}>
            {pg.fieldNotes.map((note, i) => (
              <li key={i} style={{ marginBottom: 8, color: 'var(--ink-soft)' }}>{note}</li>
            ))}
          </ul>
        </div>

        {/* What we checked — every check opens its evidence */}
        <div style={{ marginTop: 40 }}>
          <h3>What we checked — tap any check to see the evidence</h3>
          <div style={{ marginTop: 12 }}>
            {visibleChecks.map((check) => <EvidenceChip key={check.label} check={check} />)}
          </div>
          {!showAllChecks && pg.checks.length > 5 && (
            <button className="btn btn-ghost" style={{ height: 36, fontSize: 14, marginTop: 12 }} onClick={() => setShowAllChecks(true)}>
              See all {pg.checks.length} checks
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
        </div>

        {/* House rules */}
        <div style={{ marginTop: 40 }}>
          <h3>House rules</h3>
          <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>Managed by {pg.warden}.</p>
          <ul style={{ marginTop: 8, paddingLeft: 20 }}>
            {pg.rules.map((r, i) => <li key={i} style={{ color: 'var(--ink-soft)', marginBottom: 4 }}>{r}</li>)}
          </ul>
        </div>

        <Link to={`/pg/${pg.slug}/parents`} className="btn btn-ghost" style={{ marginTop: 40, height: 44, display: 'inline-flex' }}>
          Parent view — safety &amp; money summary, हिंदी में भी
        </Link>

        <p style={{ marginTop: 24, color: 'var(--ink-soft)', fontSize: 14 }}>
          Talk directly to the owner. Visit before you pay anything, and take a receipt for every rupee.
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
    </div>
  );
}
