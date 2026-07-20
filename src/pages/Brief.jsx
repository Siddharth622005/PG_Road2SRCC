import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Bookmark, BookmarkCheck } from 'lucide-react';
import { pgs, colleges, getPgsForCollege, getCollege, priceCeiling } from '../data/pgs';
import { useShortlist } from '../lib/store';

// The Fresher Brief: eight questions a senior would ask, then a shortlist with
// reasons — not "37 results". Freshers don't know what to want yet; ask first.

const STEPS = ['college', 'budget', 'gender', 'food', 'curfew', 'quiet'];

export default function Brief() {
  const [params] = useSearchParams();
  const shortlist = useShortlist();
  const [step, setStep] = useState(params.get('college') ? 1 : 0);
  const [answers, setAnswers] = useState({
    college: params.get('college') || '',
    budget: 14000,
    gender: '',
    food: '',
    curfew: '',
    quiet: '',
  });

  const set = (key, value) => setAnswers((a) => ({ ...a, [key]: value }));
  const next = () => setStep((s) => s + 1);

  const results = useMemo(() => {
    if (step < STEPS.length) return null;
    const pool = getPgsForCollege(answers.college);
    return pool
      .map((pg) => {
        const reasons = [];
        const cautions = [];
        if (pg.gender !== answers.gender) return null;
        if (pg.price + (pg.extras || 0) <= answers.budget) {
          reasons.push(`fits your budget at ~₹${(pg.price + (pg.extras || 0)).toLocaleString('en-IN')}/month all-in`);
        } else {
          cautions.push(`~₹${(pg.price + (pg.extras || 0) - answers.budget).toLocaleString('en-IN')} over your budget — worth it only if the field notes convince you`);
        }
        reasons.push(`${pg.walkMins} min walk to ${getCollege(answers.college)?.name}`);
        if (answers.food === 'yes' && pg.foodIncluded) reasons.push('food included');
        if (answers.food === 'yes' && !pg.foodIncluded) cautions.push('no mess here — budget ~₹3,000/month for outside food');
        if (answers.curfew === 'flexible' && pg.rules[0].startsWith('10pm')) cautions.push('gate closes at 10pm here — earlier than most');
        return { pg, reasons, cautions };
      })
      .filter(Boolean)
      // Neutral ordering: walk time to the chosen college, nothing editorial.
      .sort((a, b) => a.pg.walkMins - b.pg.walkMins);
  }, [step, answers]);

  const Choice = ({ value, label, field, note }) => (
    <button
      className="card"
      style={{ padding: 20, textAlign: 'left', width: '100%', border: '1px solid var(--border)', fontSize: 16, background: '#fff' }}
      onClick={() => { set(field, value); next(); }}
    >
      <span style={{ fontWeight: 600 }}>{label}</span>
      {note && <span className="caption" style={{ display: 'block', marginTop: 4 }}>{note}</span>}
    </button>
  );

  if (results) {
    const collegeName = getCollege(answers.college)?.name;
    return (
      <div className="section" style={{ paddingTop: 40 }}>
        <div className="text-container">
          <p className="caption">Your brief · {collegeName} · under ₹{answers.budget.toLocaleString('en-IN')} · {answers.gender}</p>
          <h1 style={{ fontSize: 30, marginTop: 8 }}>
            {results.length > 0
              ? `${results.length} match${results.length !== 1 ? 'es' : ''} — sorted by walk time`
              : "Nothing fits all of that yet"}
          </h1>
          {results.length === 0 && (
            <p style={{ marginTop: 12, color: 'var(--ink-soft)' }}>
              We only list what we've verified, so the honest answer is: not yet. Loosen the budget a little,
              or leave your details on the <Link to="/report" style={{ textDecoration: 'underline' }}>notify list</Link> —
              we verify new PGs every week.
            </p>
          )}
          <div style={{ marginTop: 24, display: 'grid', gap: 20 }}>
            {results.map(({ pg, reasons, cautions }) => {
              const saved = shortlist.has(pg.slug);
              return (
                <div key={pg.slug} className="card" style={{ padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                    <div>
                      <Link to={`/pg/${pg.slug}`}><h3 style={{ textDecoration: 'underline' }}>{pg.name}</h3></Link>
                      <p className="caption" style={{ marginTop: 4 }}>
                        {pg.area} · {pg.roomTypes ? 'from ' : ''}₹{pg.price.toLocaleString('en-IN')}/mo · {pg.roomTypes ? `${pg.roomTypes.length} room types` : pg.sharing}
                      </p>
                    </div>
                    <button className={`btn ${saved ? 'btn-primary' : 'btn-ghost'}`} style={{ height: 40, fontSize: 14 }} onClick={() => shortlist.toggle(pg.slug)}>
                      {saved ? <BookmarkCheck size={15} /> : <Bookmark size={15} />} {saved ? 'Shortlisted' : 'Shortlist'}
                    </button>
                  </div>
                  <ul style={{ marginTop: 12, paddingLeft: 20 }}>
                    {reasons.map((r, i) => <li key={i} style={{ color: 'var(--green)', marginBottom: 4, fontSize: 15 }}>{r}</li>)}
                    {cautions.map((c, i) => <li key={i} style={{ color: 'var(--amber)', marginBottom: 4, fontSize: 15 }}>{c}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
          {results.length > 0 && (
            <Link to="/shortlist" className="btn btn-primary" style={{ marginTop: 28, display: 'inline-flex' }}>
              Compare your shortlist <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    );
  }

  const stepUI = {
    college: (
      <>
        <h1 style={{ fontSize: 30 }}>First — congratulations. Which college?</h1>
        <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>Everything that follows is specific to your campus, not "Delhi".</p>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: 12 }}>
          {colleges.filter((c) => pgs.some((pg) => pg.colleges.some((pc) => pc.slug === c.slug))).map((c) => (
            <Choice key={c.slug} field="college" value={c.slug} label={c.name} note={c.full} />
          ))}
        </div>
      </>
    ),
    budget: (
      <>
        <h1 style={{ fontSize: 30 }}>What's the monthly budget?</h1>
        <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>
          For calibration: near North Campus, ₹11–13k gets a decent shared room, ₹15–23k gets a
          single or a private room. Under ₹10k means compromising on something — usually quiet or food.
        </p>
        <div className="card" style={{ padding: 24, marginTop: 24 }}>
          <p className="tabular" style={{ fontSize: 26 }}>₹{answers.budget.toLocaleString('en-IN')}/month</p>
          <input
            type="range" min={8000} max={priceCeiling} step={500} value={answers.budget}
            onChange={(e) => set('budget', Number(e.target.value))}
            style={{ width: '100%', marginTop: 16 }}
          />
        </div>
        <button className="btn btn-primary" style={{ marginTop: 20 }} onClick={next}>That's my ceiling <ArrowRight size={16} /></button>
      </>
    ),
    gender: (
      <>
        <h1 style={{ fontSize: 30 }}>PGs here are gender-separated. Which are you looking for?</h1>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: 12 }}>
          <Choice field="gender" value="Girls" label="Girls' PG" />
          <Choice field="gender" value="Boys" label="Boys' PG" />
        </div>
      </>
    ),
    food: (
      <>
        <h1 style={{ fontSize: 30 }}>Do you want food included?</h1>
        <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>"No mess" isn't cheaper once you add ~₹3,000/month of dhaba food. But some dhabas are genuinely better than some messes — our field notes say which.</p>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: 12 }}>
          <Choice field="food" value="yes" label="Yes, include food" note="One less thing to think about" />
          <Choice field="food" value="no" label="I'll manage food myself" note="More freedom, more effort" />
        </div>
      </>
    ),
    curfew: (
      <>
        <h1 style={{ fontSize: 30 }}>How do you feel about curfews?</h1>
        <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>Most PGs close the gate between 10 and 11pm — and we tell you which ones actually enforce it.</p>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: 12 }}>
          <Choice field="curfew" value="fine" label="A curfew is fine" note="Parents usually prefer this too" />
          <Choice field="curfew" value="flexible" label="I need flexibility" note="Fests, society events, late labs" />
        </div>
      </>
    ),
    quiet: (
      <>
        <h1 style={{ fontSize: 30 }}>Last one — light sleeper or lively lane?</h1>
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px,1fr))', gap: 12 }}>
          <Choice field="quiet" value="quiet" label="I need quiet" note="Residents score every PG on this monthly" />
          <Choice field="quiet" value="any" label="I can sleep through anything" />
        </div>
      </>
    ),
  };

  return (
    <div className="section" style={{ paddingTop: 40 }}>
      <div className="text-container">
        <p className="caption tabular">Question {step + 1} of {STEPS.length} · takes 90 seconds · <Link to="/" style={{ textDecoration: 'underline' }}>skip and browse everything</Link></p>
        <div style={{ marginTop: 16 }}>{stepUI[STEPS[step]]}</div>
      </div>
    </div>
  );
}
