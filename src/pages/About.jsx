import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="section">
      <div className="text-container">
        <h1>I paid for a room I'd never seen.</h1>

        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20, fontSize: 17 }}>
          <p>
            In 2023 I got into Delhi University, and like every fresher I had one question that
            mattered more than the rest — where am I going to live?
          </p>
          <p>
            I found a PG online. Great photos, professional website, the whole thing looked
            reassuring. I paid the booking amount before I ever visited, because I was scared the
            rooms would run out if I waited. When I finally reached Delhi, it looked nothing like
            the pictures.
          </p>
          <p>
            That's a small story, and it happens to thousands of students every June. What bothered
            me wasn't the money. It was realising that one of the biggest decisions of college —
            where you'll sleep, eat and study for the next three years — usually gets made from
            marketing photos and a WhatsApp forward, by someone who has never set foot in the city.
          </p>
          <p>
            So the two of us started walking into PGs ourselves. Not calling them. Walking in,
            climbing the stairs, filming the rooms, running a speed test on the wifi, asking what the
            rent actually includes. Then we put everything we found online — including the parts an
            owner would rather we left out. One PG here has no fire exit. Another has no backup
            power in the rooms. Those facts are on their pages, because a listing you can't see the
            flaws of is a listing you can't judge.
          </p>
          <p>
            We're small and early. Right now this is a handful of PGs around North Campus, checked by
            two people over one summer — not a complete map of Delhi. We'd rather cover a few places
            honestly than a hundred badly.
          </p>
          <p>
            <strong>How we pay for it:</strong> PG owners pay a fee to be listed. Students pay
            nothing — no brokerage, no fee to contact an owner, ever. Paying gets a PG onto the site;
            it does not buy a better position, a friendlier write-up, or the removal of anything we
            found. There are no rankings or scores here at all, and listings are ordered by price or
            walk time, never by who paid.{' '}
            <Link to="/how-we-verify" style={{ textDecoration: 'underline' }}>
              The full version of that promise is here
            </Link>
            , in writing, so you can hold us to it.
          </p>
          <p>
            If a PG on this site quotes you a price different from the one we've listed, or the room
            doesn't match what you see here, tell us. We'll fix the listing or take it down — that
            part isn't negotiable, whoever's paying.
          </p>
        </div>

        <p className="caption" style={{ marginTop: 40 }}>
          — Siddharth &amp; Aditya, Road2SRCC Homes
        </p>
      </div>
    </div>
  );
}
