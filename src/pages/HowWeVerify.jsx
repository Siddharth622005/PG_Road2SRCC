import { Check, Circle } from 'lucide-react';

// Copy rule for this page: describe only what we actually do today. Anything
// aspirational lives under "What we're still building" — never in the present tense.

const steps = [
  {
    title: 'We go to the building',
    body: 'Someone from our team physically walks into every PG on this site. We climb the stairs, look at the rooms, and see the street it sits on. Nothing here is listed from a phone call or a brochure.',
  },
  {
    title: 'We separate what we saw from what we were told',
    body: 'This is the part that matters most. A wifi speed we tested ourselves is evidence. "24/7 security" that an owner said out loud is a claim. On every listing, the two are labelled differently — and we never quietly promote one into the other.',
  },
  {
    title: 'We keep the receipts',
    body: 'Where we can, a check carries the proof: the speed-test video, the photo of the posted food menu, the walkthrough of the room. Tap any check on a listing to watch or see what it is based on.',
  },
  {
    title: 'We publish the bad parts too',
    body: 'One PG on this site has no fire exit — only stairs. Another has no backup power in the rooms. Those facts are on their listings, in plain language, because a place you can\'t see the flaws of is a place you can\'t judge.',
  },
];

const doneChecks = [
  'Visited the building in person',
  'Wi-Fi speed tested on camera',
  'Rooms filmed or photographed by us',
  'Common areas seen and recorded',
  'Food menu photographed where posted',
  'Fire exit checked and reported honestly',
  'Prices confirmed with the owner',
  'Walk times to each college recorded',
];

const notYet = [
  'Interviews with current residents',
  'Monthly check-ins from students living there',
  'Deposit-return history per owner',
  'Repeat visits to catch what changes',
];

export default function HowWeVerify() {
  return (
    <div className="section">
      <div className="text-container">
        <h1>How we check a PG</h1>
        <p style={{ marginTop: 16, color: 'var(--ink-soft)', fontSize: 18 }}>
          Every PG on this site has been visited in person by Siddharth or Aditya. What we saw with
          our own eyes is marked as evidence. What an owner told us is labelled as exactly that —
          even when it sounds good.
        </p>

        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 32 }}>
          {steps.map((s, i) => (
            <div key={i}>
              <h3>{s.title}</h3>
              <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>{s.body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56 }}>
          <h2>What we check on a visit</h2>
          <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>
            Not every listing has all of these yet — some PGs we've filmed thoroughly, others we've
            only walked through once. Each listing page shows exactly which checks we've completed
            there, with the date, so you can see how much we actually know.
          </p>
          <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '8px 16px' }}>
            {doneChecks.map((c) => (
              <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink-soft)' }}>
                <Check size={16} color="var(--green)" style={{ flexShrink: 0 }} /> {c}
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2>What we're still building</h2>
          <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>
            We started this in 2026 and we're a two-person team, so here's what we don't have yet.
            We'd rather tell you than let you assume:
          </p>
          <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px,1fr))', gap: '8px 16px' }}>
            {notYet.map((c) => (
              <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink-soft)' }}>
                <Circle size={14} color="var(--ink-soft)" style={{ flexShrink: 0 }} /> {c}
              </div>
            ))}
          </div>
          <p style={{ marginTop: 16, color: 'var(--ink-soft)' }}>
            Until those exist, the honest advice is the same one we'd give a friend: use this site to
            narrow it down, then go see the place yourself before you pay anyone anything.
          </p>
        </div>

        <div style={{ marginTop: 56 }}>
          <h2>How we make money</h2>
          <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>
            PG owners pay us a fee to be listed. Students pay nothing, ever — no brokerage, no
            finder's fee, no charge to contact an owner.
          </p>
          <p style={{ marginTop: 12, color: 'var(--ink-soft)' }}>
            We'd rather say that plainly than let you find out later. So here is exactly what that
            payment does <em>not</em> buy:
          </p>
          <ul style={{ marginTop: 12, paddingLeft: 20, color: 'var(--ink-soft)' }}>
            <li style={{ marginBottom: 6 }}>It doesn't buy a better position. There are no rankings, no scores, and no "featured" slots on this site. Listings are ordered by price, or by walk time when you pick a college — never by who paid.</li>
            <li style={{ marginBottom: 6 }}>It doesn't buy a nicer description. Owners don't write or approve our field notes, and we publish the drawbacks we find.</li>
            <li style={{ marginBottom: 6 }}>It doesn't buy silence. If a PG quotes you a different price than the one listed here, tell us and we'll change the listing or remove it.</li>
          </ul>
          <p style={{ marginTop: 12, color: 'var(--ink-soft)' }}>
            The reason to hold that line is simple: the moment we start ranking whoever pays more,
            this site is just another ad board, and you'd have no reason to open it.
          </p>
        </div>

        <div className="card" style={{ marginTop: 56, padding: 24 }}>
          <p style={{ fontStyle: 'italic' }}>
            "Show what you saw. Say who told you the rest. Never hide the bad part."
          </p>
        </div>
      </div>
    </div>
  );
}
