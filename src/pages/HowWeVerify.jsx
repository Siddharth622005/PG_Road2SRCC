import { Check } from 'lucide-react';
import PhotoBox from '../components/PhotoBox';

const steps = [
  {
    title: 'We show up unannounced',
    body: 'No appointment, no warning call. If a place only looks good when it\'s expecting us, that tells us something too.',
  },
  {
    title: 'We check what brokers hide',
    body: 'Water pressure, power backup, actual room condition, whether the photos online match reality, and whether the "5 minute walk" is actually 5 minutes at student pace.',
  },
  {
    title: 'We talk to current residents',
    body: 'Not the owner\'s pick — whoever answers the door. We ask what\'s actually annoying about living there, not just what\'s good.',
  },
  {
    title: 'We list it only if we\'d let our own sibling stay there',
    body: 'That\'s the actual bar. Not "acceptable" — "would I be okay with my own family here."',
  },
];

const checklist = [
  'Owner ID verified', 'Rooms match photos', 'Talked to 2+ current residents',
  'Water pressure OK', 'Power backup tested', 'Fire exit accessible',
  'Kitchen hygiene checked', 'CCTV functional', 'Locks work on every room',
  'Warden reachable after 9pm', 'No hidden extra charges found', 'Bathroom count matches claim',
];

export default function HowWeVerify() {
  return (
    <div className="section">
      <div className="text-container">
        <h1>What we check before listing anything</h1>
        <p style={{ marginTop: 16, color: 'var(--ink-soft)', fontSize: 18 }}>
          Every PG on this site was visited by us, in person. What we saw ourselves is marked as
          evidence; what an owner told us is always labelled as exactly that.
        </p>

        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 40 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <div style={{ width: 160, flexShrink: 0 }}>
                <PhotoBox ratio="4 / 3" label={s.title} />
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <h3>{s.title}</h3>
                <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56 }}>
          <h2>The full checklist</h2>
          <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>What we work through on every visit. Each listing's page shows exactly which of these we've completed there so far.</p>
          <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '8px 16px' }}>
            {checklist.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink-soft)' }}>
                <Check size={16} color="var(--green)" /> {c}
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginTop: 56, padding: 24 }}>
          <p style={{ fontStyle: 'italic' }}>
            "We visit unannounced. We check what brokers hide. We list it only if we'd let our own sibling stay there."
          </p>
        </div>
      </div>
    </div>
  );
}
