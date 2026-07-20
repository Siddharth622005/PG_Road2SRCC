import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Phone, HandCoins, MapPin, Share2, CheckCircle2 } from 'lucide-react';
import { getPg, getCollege } from '../data/pgs';

// The safety-first rendering of a dossier, for the person who pays the deposit
// and holds veto power. Bilingual headings, big type, printable, forwardable.
export default function ParentView() {
  const { slug } = useParams();
  const pg = getPg(slug);

  if (!pg) {
    return (
      <div className="section container text-container" style={{ textAlign: 'center' }}>
        <h2>This PG isn't listed anymore.</h2>
        <Link to="/pgs" className="btn btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>See all PGs</Link>
      </div>
    );
  }

  const { deposits } = pg.outcomes;

  function forward() {
    const cctvLine = pg.amenities.present.includes('CCTV')
      ? (pg.factsVerified === false ? 'Owner says yes, not independently confirmed yet' : 'Yes, working (we tested it)')
      : 'No';
    const depositLine = deposits.total > 0
      ? `This owner returned ${deposits.returned} of ${deposits.total} deposits in full`
      : 'No deposit track record yet — newly onboarded listing';
    const text = `${pg.name}, ${pg.area} — parent summary from Road2SRCC\n• Warden: ${pg.warden}\n• Gate closes: ${pg.rules[0]}\n• CCTV: ${cctvLine}\n• Rent: ₹${pg.price.toLocaleString('en-IN')}/month + ₹${pg.deposit.toLocaleString('en-IN')} refundable deposit\n• ${depositLine}\n• Verified in person by ${pg.verifierNote} on ${pg.verifiedDate}\nRoad2SRCC takes no commission from anyone.`;
    if (navigator.share) {
      navigator.share({ title: `${pg.name} — parent summary`, text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(`${text}\n${window.location.href}`);
      alert('Summary copied — forward it on WhatsApp.');
    }
  }

  const Row = ({ icon: Icon, en, hi, children }) => (
    <div className="card" style={{ padding: 24, marginTop: 16 }}>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 19 }}>
        <Icon size={20} color="var(--green)" /> {en}
      </h3>
      <p className="caption" style={{ marginTop: 2, marginLeft: 30 }}>{hi}</p>
      <div style={{ marginTop: 12, fontSize: 17, lineHeight: 1.7 }}>{children}</div>
    </div>
  );

  return (
    <div className="section" style={{ paddingTop: 40 }}>
      <div className="text-container">
        <p className="caption">Parent summary · अभिभावकों के लिए</p>
        <h1 style={{ fontSize: 30, marginTop: 8 }}>{pg.name}, {pg.area}</h1>
        <p style={{ marginTop: 8, color: 'var(--ink-soft)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <CheckCircle2 size={16} color="var(--green)" />
          {pg.factsVerified === false
            ? `We visited this PG in person on ${pg.verifiedDate}, but this is a newly onboarded listing — most facts below are what the owner told us, not yet independently confirmed with residents.`
            : `We visited this PG in person on ${pg.verifiedDate}. Every fact below was checked by us, not supplied by the owner.`}
        </p>

        <Row icon={ShieldCheck} en="Is it safe?" hi="क्या यह सुरक्षित है?">
          <p><strong>Warden:</strong> {pg.warden}.</p>
          <p><strong>Gate:</strong> {pg.rules[0]} — {pg.factsVerified === false ? "this is what the owner told us; we haven't independently confirmed enforcement with residents yet." : 'we confirmed this is genuinely enforced.'}</p>
          <p><strong>CCTV:</strong> {pg.amenities.present.includes('CCTV')
            ? (pg.factsVerified === false ? 'Owner says yes — we haven\'t independently confirmed the cameras or footage yet.' : 'Yes — we watched the live feed ourselves during our visit.')
            : 'No CCTV at this property. We say so plainly rather than hide it.'}</p>
          <p><strong>Visitors:</strong> {pg.rules[1]}.</p>
          <p><strong>Nearest hospital:</strong> {pg.hospital}.</p>
        </Row>

        <Row icon={HandCoins} en="Is the money safe?" hi="क्या पैसा सुरक्षित है?">
          <p><strong>Rent:</strong> {pg.roomTypes
            ? `from ₹${pg.price.toLocaleString('en-IN')} per month — this PG has ${pg.roomTypes.length} room types (${pg.roomTypes.map((rt) => `${rt.label} ₹${rt.price.toLocaleString('en-IN')}`).join(', ')}); see the full listing for exact pricing`
            : `₹${pg.price.toLocaleString('en-IN')} per month`}{pg.foodIncluded ? ', food included' : ' (food not included — budget ~₹3,000 extra)'}.</p>
          <p><strong>Deposit:</strong> ₹{pg.deposit.toLocaleString('en-IN')}. {deposits.total > 0
            ? `This owner has returned ${deposits.returned} of ${deposits.total} deposits in full, in ${deposits.avgDays} days on average. We track every move-out.`
            : 'No move-outs yet — this is a new listing, so there\'s no deposit track record. We\'ll add it as students move out.'}</p>
          <p><strong>Our advice:</strong> pay nothing before visiting. Use our written price confirmation. Take a receipt for the deposit — we can generate one both sides confirm.</p>
          <p><strong>Our fee:</strong> zero. We take no commission from you or the owner, ever.</p>
        </Row>

        <Row icon={MapPin} en="Where is it?" hi="यह कहाँ है?">
          <p>
            {pg.colleges.map((c, i) => (
              <span key={c.slug}>{i > 0 && ' · '}{c.mins} minutes' walk to {getCollege(c.slug)?.full}</span>
            ))}
          </p>
          <p><strong>Metro:</strong> {pg.metro}.</p>
          {pg.nearby.length > 0 && <p><strong>Pharmacy nearby:</strong> {pg.nearby[0]}.</p>}
        </Row>

        <Row icon={Phone} en="Who checked this, and how do we reach them?" hi="यह किसने जाँचा?">
          <p>
            {pg.verifierNote} visited on {pg.verifiedDate}
            {pg.factsVerified === false
              ? ', and wrote every note on this page. This is a newly onboarded listing, so we haven\'t yet spoken to current residents — that will happen on a follow-up visit.'
              : ', spoke to current residents, and wrote every note on this page.'}
          </p>
          <p>Have a question only a parent would ask? Request a call — a member of our team (a recent DU graduate, not a call centre) will phone you within a day.</p>
          <button
            className="btn btn-ghost"
            style={{ marginTop: 8, height: 44 }}
            onClick={() => alert('In the full build this books a 10-minute call with the verifier who visited this PG.')}
          >
            <Phone size={16} /> Request a callback
          </button>
        </Row>

        <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={forward}>
            <Share2 size={16} /> Forward this summary on WhatsApp
          </button>
          <Link to={`/pg/${pg.slug}`} className="btn btn-ghost">Back to the full listing</Link>
        </div>
      </div>
    </div>
  );
}
