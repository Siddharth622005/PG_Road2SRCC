const sections = [
  {
    title: 'Before you arrive',
    items: [
      'Get an offline map of North Campus downloaded — signal near Kamla Nagar can be patchy indoors.',
      'Carry 2 passport photos and photocopies of your ID — every PG owner and the college will ask.',
      'Don\'t pay a full deposit before seeing the actual room in person or on a video call with the owner directly.',
    ],
  },
  {
    title: 'Your first week',
    items: [
      'Open a student bank account — most North Campus branches have same-day account opening for freshers.',
      'Buy a local SIM if you don\'t already have one — needed for UPI and most delivery apps.',
      'Figure out your walk vs. e-rickshaw routes to college before your first 8am class — Kamla Nagar lanes are confusing at first.',
    ],
  },
  {
    title: 'Money basics',
    items: [
      'Budget separately for "extras" — electricity, laundry, and food top-ups usually add ₹500–1200/month beyond quoted rent.',
      'Most PGs want rent by the 5th of the month — set a reminder, aunty/warden will remember if you don\'t.',
      'Split a shared tiffin/mess with roommates if your PG doesn\'t include food — cheaper than eating out daily.',
    ],
  },
  {
    title: 'Staying safe',
    items: [
      'Save your PG owner\'s and warden\'s number, plus one classmate\'s, in your phone\'s emergency contacts.',
      'Tell a friend or family member your PG address on day one — not just the area name.',
      'If something feels off about a place after moving in, use our report page — don\'t just quietly leave it unresolved.',
    ],
  },
];

export default function Guide() {
  return (
    <div className="section">
      <div className="text-container">
        <h1>Moving to Delhi — the starter guide</h1>
        <p style={{ marginTop: 16, color: 'var(--ink-soft)', fontSize: 18 }}>
          Everything we wish someone had told us before our first week in North Campus.
        </p>

        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 40 }}>
          {sections.map((s, i) => (
            <div key={i}>
              <h3>{s.title}</h3>
              <ul style={{ marginTop: 12, paddingLeft: 20 }}>
                {s.items.map((item, j) => (
                  <li key={j} style={{ marginBottom: 8, color: 'var(--ink-soft)' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
