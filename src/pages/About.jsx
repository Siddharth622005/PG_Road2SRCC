import PhotoBox from '../components/PhotoBox';

export default function About() {
  return (
    <div className="section">
      <div className="text-container">
        <h1>We got scammed so you don't have to.</h1>

        <div style={{ marginTop: 32 }}>
          <PhotoBox ratio="16 / 10" label="Founder photo" />
        </div>

        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20, fontSize: 17 }}>
          <p>
            I moved to Delhi in 2023 for college. Like every fresher, I found my first PG through a broker
            who showed me photos of a bright, tidy room near North Campus. I paid a deposit and brokerage
            before ever seeing the actual room. What I got was a different building entirely — smaller,
            darker, and with a landlord who disappeared the moment there was a problem.
          </p>
          <p>
            I moved twice more that year. Each time, the same story: listings with no accountability,
            brokers who profit whether or not you're happy, and no way for a 17-year-old three states away
            to know what she's actually walking into.
          </p>
          <p>
            Road2SRCC is what I wish had existed. Every listing here is one we've personally visited —
            unannounced, checked against a real list, and only added if we'd be comfortable with our own
            sibling living there. We don't take a cut from owners or students. If that ever changes, this
            whole site stops meaning anything, so it won't.
          </p>
          <p>
            We're not trying to list everything. We're trying to list only the places worth your trust —
            which is why we've visited 74 PGs and listed 31 of them.
          </p>
        </div>

        <p className="caption" style={{ marginTop: 40 }}>— Sidd, founder</p>
      </div>
    </div>
  );
}
