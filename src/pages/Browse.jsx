import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { pgs, colleges, getCollege, priceCeiling } from '../data/pgs';
import PGCard from '../components/PGCard';

// The whole site opens here: every PG visible immediately, filters on top,
// nothing gated. Listings are presented neutrally — ordering is objective
// (walk time when a college is picked, price otherwise) and never editorial.

const BUDGET_OPTIONS = [
  { label: 'Any budget', value: 0 },
  { label: 'Under ₹15,000', value: 15000 },
  { label: 'Under ₹20,000', value: 20000 },
  { label: 'Under ₹25,000', value: 25000 },
  { label: 'Under ₹30,000', value: 30000 },
];

const ROOM_TYPE_OPTIONS = ['Any room type', 'Single', 'Double', 'Triple'];

function hasRoomType(pg, type) {
  const t = type.toLowerCase();
  if (pg.roomTypes) return pg.roomTypes.some((rt) => rt.label.toLowerCase().includes(t));
  return pg.sharing.toLowerCase().includes(t);
}

function walkTo(pg, collegeSlug) {
  const match = pg.colleges.find((c) => c.slug === collegeSlug);
  return match ? match.mins : null;
}

function nearestCollege(pg) {
  return pg.colleges.reduce((a, b) => (a.mins <= b.mins ? a : b));
}

const selectStyle = {
  height: 40, borderRadius: 999, border: '1px solid var(--border)',
  padding: '0 12px', fontSize: 14, background: '#fff', maxWidth: '46vw',
};

export default function Browse() {
  const [params, setParams] = useSearchParams();
  const collegeSlug = params.get('college') || '';
  const [gender, setGender] = useState('Any');
  const [maxBudget, setMaxBudget] = useState(0);
  const [roomType, setRoomType] = useState('Any room type');
  const [acOnly, setAcOnly] = useState(false);
  const [foodOnly, setFoodOnly] = useState(false);
  const [sortBy, setSortBy] = useState('auto');

  // Only offer colleges that actually have listings.
  const collegesWithPgs = useMemo(
    () => colleges.filter((c) => pgs.some((pg) => pg.colleges.some((pc) => pc.slug === c.slug))),
    [],
  );

  function setCollege(slug) {
    if (slug) setParams({ college: slug }, { replace: true });
    else setParams({}, { replace: true });
  }

  const filtered = useMemo(() => {
    let list = pgs.filter((pg) => {
      if (collegeSlug && walkTo(pg, collegeSlug) === null) return false;
      if (gender !== 'Any' && pg.gender !== gender) return false;
      if (maxBudget > 0 && pg.price > maxBudget) return false;
      if (roomType !== 'Any room type' && !hasRoomType(pg, roomType)) return false;
      if (acOnly && !pg.amenities.present.includes('AC')) return false;
      if (foodOnly && !pg.foodIncluded) return false;
      return true;
    });
    const effectiveSort = sortBy === 'auto' ? (collegeSlug ? 'walk' : 'price') : sortBy;
    if (effectiveSort === 'walk' && collegeSlug) {
      list = [...list].sort((a, b) => walkTo(a, collegeSlug) - walkTo(b, collegeSlug));
    } else {
      list = [...list].sort((a, b) => a.price - b.price);
    }
    return list;
  }, [collegeSlug, gender, maxBudget, roomType, acOnly, foodOnly, sortBy]);

  const college = collegeSlug ? getCollege(collegeSlug) : null;

  function resetFilters() {
    setCollege('');
    setGender('Any');
    setMaxBudget(0);
    setRoomType('Any room type');
    setAcOnly(false);
    setFoodOnly(false);
    setSortBy('auto');
  }

  const chip = (active) => ({
    height: 40, borderRadius: 999, padding: '0 14px', fontSize: 14, fontWeight: 600,
    border: active ? '1px solid var(--green)' : '1px solid var(--border)',
    background: active ? 'var(--green-tint)' : '#fff',
    color: active ? 'var(--green)' : 'var(--ink)',
    whiteSpace: 'nowrap', flexShrink: 0,
  });

  return (
    <div className="section" style={{ paddingTop: 24, paddingBottom: 56 }}>
      <div className="container">
        <h1 style={{ fontSize: 24 }}>Find a PG near your college</h1>
        <p style={{ marginTop: 4, color: 'var(--ink-soft)', fontSize: 15 }}>
          Every listing visited by us in person. Free for students.
        </p>

        {/* College chips — horizontal scroll, one thumb */}
        <div style={{ display: 'flex', gap: 8, marginTop: 16, overflowX: 'auto', paddingBottom: 4, WebkitOverflowScrolling: 'touch' }}>
          <button style={chip(!collegeSlug)} onClick={() => setCollege('')}>All colleges</button>
          {collegesWithPgs.map((c) => (
            <button key={c.slug} style={chip(collegeSlug === c.slug)} onClick={() => setCollege(c.slug)}>
              {c.name}
            </button>
          ))}
        </div>

        {/* Filters — always visible, instant */}
        <div style={{ display: 'flex', gap: 8, marginTop: 8, overflowX: 'auto', paddingBottom: 4, alignItems: 'center', WebkitOverflowScrolling: 'touch' }}>
          <select value={gender} onChange={(e) => setGender(e.target.value)} style={selectStyle} aria-label="Gender">
            <option value="Any">Girls &amp; boys</option>
            <option value="Girls">Girls</option>
            <option value="Boys">Boys</option>
          </select>
          <select value={maxBudget} onChange={(e) => setMaxBudget(Number(e.target.value))} style={selectStyle} aria-label="Budget">
            {BUDGET_OPTIONS.filter((o) => o.value === 0 || o.value <= priceCeiling + 5000).map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <select value={roomType} onChange={(e) => setRoomType(e.target.value)} style={selectStyle} aria-label="Room type">
            {ROOM_TYPE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
          <button style={chip(acOnly)} onClick={() => setAcOnly((v) => !v)}>AC</button>
          <button style={chip(foodOnly)} onClick={() => setFoodOnly((v) => !v)}>Food included</button>
        </div>

        {/* Count + sort */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, gap: 12, flexWrap: 'wrap' }}>
          <p className="caption tabular">
            {filtered.length} PG{filtered.length !== 1 ? 's' : ''}
            {college ? ` near ${college.name}` : ''} · sorted by {sortBy === 'price' || (sortBy === 'auto' && !collegeSlug) ? 'price' : 'walk time'}
          </p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ ...selectStyle, height: 36 }}
            aria-label="Sort"
          >
            <option value="auto">Sort: automatic</option>
            <option value="price">Sort: price (low to high)</option>
            {collegeSlug && <option value="walk">Sort: walk time</option>}
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="card" style={{ padding: 32, textAlign: 'center', marginTop: 16 }}>
            <p style={{ fontWeight: 600 }}>Nothing matches all of that yet. We're adding PGs every week.</p>
            <button className="btn btn-ghost" style={{ marginTop: 16 }} onClick={resetFilters}>Reset filters</button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 20, marginTop: 16 }}>
            {filtered.map((pg) => {
              const walk = collegeSlug ? walkTo(pg, collegeSlug) : null;
              const nearest = nearestCollege(pg);
              return (
                <PGCard
                  key={pg.slug}
                  pg={{ ...pg, walkMins: walk ?? nearest.mins }}
                  collegeName={college ? college.name : getCollege(nearest.slug)?.name}
                />
              );
            })}
          </div>
        )}

        {/* Optional questionnaire — a refinement, never a gate */}
        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <p style={{ color: 'var(--ink-soft)', fontSize: 15 }}>
            Not sure what you need?{' '}
            <Link to={collegeSlug ? `/brief?college=${collegeSlug}` : '/brief'} style={{ color: 'var(--green)', fontWeight: 600, textDecoration: 'underline' }}>
              Answer a few questions
            </Link>{' '}
            and we'll narrow it down with you.
          </p>
        </div>
      </div>
    </div>
  );
}
