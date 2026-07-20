import { Link } from 'react-router-dom';
import { X, Share2, ArrowRight } from 'lucide-react';
import { pgs, getCollege } from '../data/pgs';
import { useShortlist } from '../lib/store';

// A neutral side-by-side of the PGs the student saved. Facts only — the
// platform doesn't write verdicts about which one is the better deal.

function yearlyCost(pg) {
  return (pg.price + (pg.extras || 0)) * 12 + (pg.foodIncluded ? 0 : 36000);
}

function priceLabel(pg) {
  return `${pg.roomTypes ? 'From ' : ''}₹${(pg.price + (pg.extras || 0)).toLocaleString('en-IN')}`;
}

export default function Shortlist() {
  const shortlist = useShortlist();
  const saved = pgs.filter((pg) => shortlist.has(pg.slug));

  function share() {
    const text = `My PG shortlist (via Road2SRCC):\n${saved.map((pg) => `• ${pg.name}, ${pg.area} — ${pg.roomTypes ? 'from ' : ''}₹${pg.price.toLocaleString('en-IN')}/mo`).join('\n')}\nWhich one do you think?`;
    if (navigator.share) {
      navigator.share({ title: 'My PG shortlist', text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(text);
      alert('Shortlist copied — send it to the family group.');
    }
  }

  if (saved.length === 0) {
    return (
      <div className="section container text-container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 30 }}>Your shortlist is empty</h1>
        <p style={{ marginTop: 12, color: 'var(--ink-soft)' }}>
          Save a few PGs while browsing and this page puts them side by side.
        </p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>Browse all PGs</Link>
      </div>
    );
  }

  const rows = [
    { label: 'Rent + extras / month', get: (pg) => priceLabel(pg) },
    { label: 'Cost over a year¹', get: (pg) => `${pg.roomTypes ? 'From ' : ''}₹${yearlyCost(pg).toLocaleString('en-IN')}` },
    { label: 'Room types', get: (pg) => (pg.roomTypes ? pg.roomTypes.map((rt) => rt.label).join(', ') : pg.sharing) },
    { label: 'Deposit', get: (pg) => `₹${pg.deposit.toLocaleString('en-IN')}` },
    { label: 'Food', get: (pg) => (pg.foodIncluded ? 'Included' : 'Not included') },
    { label: 'AC', get: (pg) => (pg.amenities.present.includes('AC') ? 'Yes' : 'No') },
    { label: 'Walk to college', get: (pg) => pg.colleges.slice(0, 3).map((c) => `${c.mins}m ${getCollege(c.slug)?.name}`).join(', ') },
    { label: 'Gate close', get: (pg) => pg.rules[0].split('—')[0].trim() },
  ].map((row) => ({ ...row, values: saved.map(row.get) }));

  return (
    <div className="section" style={{ paddingTop: 40 }}>
      <div className="container" style={{ maxWidth: 860 }}>
        <h1 style={{ fontSize: 30 }}>Your shortlist, side by side</h1>
        <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>
          {saved.length} place{saved.length !== 1 ? 's' : ''}. The facts, next to each other — the decision is yours.
        </p>

        <div style={{ overflowX: 'auto', marginTop: 20 }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 520, background: '#fff', borderRadius: 12, border: '1px solid var(--border)', fontSize: 15 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid var(--border)' }}></th>
                {saved.map((pg) => (
                  <th key={pg.slug} style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid var(--border)' }}>
                    <Link to={`/pg/${pg.slug}`} style={{ textDecoration: 'underline' }}>{pg.name}</Link>
                    <button
                      onClick={() => shortlist.remove(pg.slug)}
                      title="Remove from shortlist"
                      style={{ background: 'none', border: 'none', marginLeft: 6, verticalAlign: 'middle', color: 'var(--ink-soft)' }}
                    >
                      <X size={14} />
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <td style={{ padding: '10px 16px', borderBottom: '1px solid var(--border)', color: 'var(--ink-soft)', whiteSpace: 'nowrap' }}>{row.label}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className="tabular" style={{ padding: '10px 16px', borderBottom: '1px solid var(--border)', fontWeight: 500 }}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="caption" style={{ marginTop: 8 }}>
          ¹ Rent + extras × 12, plus ~₹36,000/year of outside food where no mess exists. "From" prices use the cheapest room type.
        </p>

        {/* What to check in person */}
        <div className="card" style={{ padding: 24, marginTop: 32 }}>
          <h3>Before you decide: check these in person</h3>
          <ul style={{ marginTop: 12, paddingLeft: 20, color: 'var(--ink-soft)' }}>
            <li style={{ marginBottom: 6 }}>Run a tap at 8am — morning pressure is the honest test.</li>
            <li style={{ marginBottom: 6 }}>Ask a resident in the corridor, not the one the owner introduces.</li>
            <li style={{ marginBottom: 6 }}>Ask the owner to confirm the exact price for your room on WhatsApp, in writing, before you travel.</li>
            <li>Never pay a deposit without a receipt. If an owner resists a receipt, that's your answer.</li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={share}>
            <Share2 size={16} /> Share with family
          </button>
          <Link to="/" className="btn btn-ghost">Keep looking <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  );
}
