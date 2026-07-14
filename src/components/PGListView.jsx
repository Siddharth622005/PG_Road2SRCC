import { useMemo, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import PGCard from './PGCard';

export default function PGListView({ title, subtitle, allPgs, collegeName, showCollegeFilter, colleges, collegeSlug, onCollegeChange }) {
  const [genderFilter, setGenderFilter] = useState('Any');
  const [maxPrice, setMaxPrice] = useState(20000);
  const [foodOnly, setFoodOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return allPgs.filter((pg) => {
      if (genderFilter !== 'Any' && pg.gender !== genderFilter) return false;
      if (pg.price > maxPrice) return false;
      if (foodOnly && !pg.foodIncluded) return false;
      return true;
    });
  }, [allPgs, genderFilter, maxPrice, foodOnly]);

  return (
    <div className="section" style={{ paddingTop: 40 }}>
      <div className="container">
        <h1 style={{ fontSize: 30 }}>{title}</h1>
        {subtitle && <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>{subtitle}</p>}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, marginBottom: 20 }}>
          <p className="caption tabular">{filtered.length} verified PG{filtered.length !== 1 ? 's' : ''}</p>
          <button className="btn btn-ghost" style={{ height: 40, fontSize: 14 }} onClick={() => setShowFilters((s) => !s)}>
            <SlidersHorizontal size={16} /> Filters
          </button>
        </div>

        {showFilters && (
          <div className="card" style={{ padding: 20, marginBottom: 24, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {showCollegeFilter && (
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
                College
                <select value={collegeSlug} onChange={(e) => onCollegeChange(e.target.value)} style={{ height: 40, borderRadius: 8, border: '1px solid var(--border)', padding: '0 10px' }}>
                  {colleges.map((c) => <option key={c.slug} value={c.slug}>{c.full}</option>)}
                </select>
              </label>
            )}
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
              Gender
              <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)} style={{ height: 40, borderRadius: 8, border: '1px solid var(--border)', padding: '0 10px' }}>
                <option>Any</option>
                <option>Girls</option>
                <option>Boys</option>
              </select>
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
              Max ₹{maxPrice.toLocaleString('en-IN')}/mo
              <input type="range" min={5000} max={20000} step={500} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, marginTop: 22 }}>
              <input type="checkbox" checked={foodOnly} onChange={(e) => setFoodOnly(e.target.checked)} />
              Food included only
            </label>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="card" style={{ padding: 32, textAlign: 'center' }}>
            <p style={{ fontWeight: 600 }}>Nothing matches all of that yet. We're adding PGs every week.</p>
            <button className="btn btn-ghost" style={{ marginTop: 16 }} onClick={() => { setGenderFilter('Any'); setMaxPrice(20000); setFoodOnly(false); }}>
              Reset filters
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 24 }}>
            {filtered.map((pg) => <PGCard key={pg.slug} pg={pg} collegeName={collegeName} />)}
          </div>
        )}
      </div>
    </div>
  );
}
