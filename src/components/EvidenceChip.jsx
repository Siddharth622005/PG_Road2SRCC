import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { freshness, daysSince } from '../data/pgs';
import MutedVideo from './MutedVideo';

// A claim you can tap to see its receipt. Fresh facts print dark; aging facts fade.
export default function EvidenceChip({ check }) {
  const [open, setOpen] = useState(false);
  const band = freshness(check.date);
  const days = daysSince(check.date);
  const inkColor = band === 'fresh' ? 'var(--ink)' : band === 'aging' ? 'var(--ink-soft)' : 'var(--amber)';

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: 'flex', alignItems: 'center', gap: 8, width: '100%', textAlign: 'left',
          background: 'none', border: 'none', padding: '10px 0', fontSize: 16, color: inkColor,
        }}
      >
        <Check size={16} color="var(--green)" style={{ flexShrink: 0 }} />
        <span style={{ flex: 1 }}>{check.label}</span>
        {band === 'stale' && <span className="pill pill-amber" style={{ fontSize: 11, padding: '3px 8px' }}>recheck due</span>}
        <ChevronDown size={14} color="var(--ink-soft)" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms', flexShrink: 0 }} />
      </button>
      {open && (
        <div style={{ padding: '0 0 12px 24px', fontSize: 14.5, color: 'var(--ink-soft)' }}>
          <p>{check.evidence}</p>
          {check.media && (
            <div style={{ marginTop: 10, maxWidth: 360, borderRadius: 10, overflow: 'hidden' }}>
              {check.media.type === 'video' ? (
                <MutedVideo src={check.media.src} preload="metadata" style={{ width: '100%', display: 'block' }} />
              ) : (
                <img src={check.media.src} alt={check.label} style={{ width: '100%', display: 'block' }} />
              )}
            </div>
          )}
          <p className="caption" style={{ marginTop: 6 }}>
            Checked {check.date}{days !== null ? ` · ${days} days ago` : ''}
          </p>
        </div>
      )}
    </div>
  );
}
