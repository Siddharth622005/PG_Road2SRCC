import { useState } from 'react';
import { pgs } from '../data/pgs';

export default function Report() {
  const [submitted, setSubmitted] = useState(false);
  const [pgSlug, setPgSlug] = useState('');
  const [issue, setIssue] = useState('');
  const [contact, setContact] = useState('');

  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="section text-container" style={{ textAlign: 'center' }}>
        <h2>Got it. We'll recheck this within the week.</h2>
        <p style={{ marginTop: 12, color: 'var(--ink-soft)' }}>
          Thanks for flagging it — this is exactly how we keep listings honest.
        </p>
      </div>
    );
  }

  return (
    <div className="section text-container">
      <h1>Report a problem</h1>
      <p style={{ marginTop: 12, color: 'var(--ink-soft)' }}>
        Something wrong with a listing — price changed, place is gone, or it doesn't match what we said?
        Tell us and we'll recheck it.
      </p>

      <form onSubmit={submit} style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 15 }}>
          Which PG?
          <select value={pgSlug} onChange={(e) => setPgSlug(e.target.value)} required
            style={{ height: 48, borderRadius: 10, border: '1px solid var(--border)', padding: '0 12px' }}>
            <option value="">Select a listing</option>
            {pgs.map((p) => <option key={p.slug} value={p.slug}>{p.name} — {p.area}</option>)}
          </select>
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 15 }}>
          What's wrong?
          <textarea value={issue} onChange={(e) => setIssue(e.target.value)} required rows={5}
            placeholder="E.g. price is higher than listed, PG has shut down, room doesn't match photos…"
            style={{ borderRadius: 10, border: '1px solid var(--border)', padding: 12, font: 'inherit', resize: 'vertical' }} />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 15 }}>
          Your phone or email (optional — in case we need details)
          <input value={contact} onChange={(e) => setContact(e.target.value)}
            style={{ height: 48, borderRadius: 10, border: '1px solid var(--border)', padding: '0 12px' }} />
        </label>

        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send report</button>
      </form>
    </div>
  );
}
