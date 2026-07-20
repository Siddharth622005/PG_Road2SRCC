import { Link } from 'react-router-dom';
import { pgs } from '../data/pgs';

// Internal-only overview: every PG at a glance, so you can see what's
// actually done (real media + real evidence) before starting the next
// questionnaire, instead of opening each listing one by one.

function roomTypeMediaCoverage(pg) {
  if (!pg.roomTypes) return null;
  const withMedia = pg.roomTypes.filter((rt) => (rt.photos && rt.photos.length) || (rt.videos && rt.videos.length));
  return `${withMedia.length}/${pg.roomTypes.length}`;
}

function mediaStatus(pg) {
  const hasBuildingPhotos = pg.photos.some((p) => p.src);
  const hasBuildingVideos = pg.videos && pg.videos.length > 0;
  const roomCoverage = pg.roomTypes ? pg.roomTypes.filter((rt) => (rt.photos && rt.photos.length) || (rt.videos && rt.videos.length)).length : (hasBuildingPhotos || hasBuildingVideos ? 1 : 0);
  const roomTotal = pg.roomTypes ? pg.roomTypes.length : 1;

  if (!hasBuildingPhotos && !hasBuildingVideos) return { label: 'No media', tone: 'stale' };
  if (roomCoverage < roomTotal) return { label: 'Partial media', tone: 'aging' };
  return { label: 'Media complete', tone: 'fresh' };
}

function evidenceStatus(pg) {
  const evidencedChecks = pg.checks.filter((c) => c.media).length;
  if (pg.checks.length <= 1) return { label: `${pg.checks.length} check, none evidenced`, tone: 'stale' };
  if (evidencedChecks === 0) return { label: `${pg.checks.length} checks, none evidenced`, tone: 'aging' };
  return { label: `${pg.checks.length} checks, ${evidencedChecks} with media`, tone: 'fresh' };
}

const toneColor = { fresh: 'var(--green)', aging: 'var(--amber)', stale: 'var(--ink-soft)' };
const toneBg = { fresh: 'var(--green-tint)', aging: 'var(--amber-tint)', stale: 'rgba(0,0,0,0.04)' };

export default function AdminStatus() {
  const rows = pgs.map((pg) => ({
    pg,
    media: mediaStatus(pg),
    evidence: evidenceStatus(pg),
    roomCoverage: roomTypeMediaCoverage(pg),
    photoCount: pg.photos.filter((p) => p.src).length,
    videoCount: (pg.videos || []).length,
  }));

  return (
    <div className="section" style={{ paddingTop: 40 }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <h1 style={{ fontSize: 28 }}>All listings — internal status</h1>
        <p style={{ marginTop: 8, color: 'var(--ink-soft)' }}>
          {pgs.length} listings. Not shown to students — this is so you can see what's actually
          done (real media, real evidence) before starting the next questionnaire.
        </p>

        <div style={{ overflowX: 'auto', marginTop: 24 }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 820, background: '#fff', borderRadius: 12, border: '1px solid var(--border)', fontSize: 14 }}>
            <thead>
              <tr>
                {['PG', 'Gender', 'Room types', 'Media', 'Room photo/video coverage', 'Evidence'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '10px 14px', borderBottom: '1px solid var(--border)', whiteSpace: 'nowrap', color: 'var(--ink-soft)', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ pg, media, evidence, roomCoverage, photoCount, videoCount }) => (
                <tr key={pg.slug}>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)' }}>
                    <Link to={`/pg/${pg.slug}`} style={{ textDecoration: 'underline', fontWeight: 600 }}>{pg.name}</Link>
                    <div className="caption" style={{ marginTop: 2 }}>{pg.area}</div>
                  </td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)' }}>{pg.gender}</td>
                  <td className="tabular" style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)' }}>
                    {pg.roomTypes ? `${pg.roomTypes.length} types` : '1 (fixed)'}
                  </td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600, color: toneColor[media.tone], background: toneBg[media.tone] }}>
                      {media.label}
                    </span>
                    <div className="caption tabular" style={{ marginTop: 4 }}>{photoCount} photo{photoCount !== 1 ? 's' : ''} · {videoCount} video{videoCount !== 1 ? 's' : ''}</div>
                  </td>
                  <td className="tabular" style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)' }}>
                    {roomCoverage ?? '—'}
                  </td>
                  <td style={{ padding: '10px 14px', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600, color: toneColor[evidence.tone], background: toneBg[evidence.tone] }}>
                      {evidence.label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 20, display: 'flex', gap: 20, flexWrap: 'wrap', fontSize: 13, color: 'var(--ink-soft)' }}>
          <span><strong style={{ color: 'var(--green)' }}>Green</strong> = media/evidence complete</span>
          <span><strong style={{ color: 'var(--amber)' }}>Amber</strong> = partial</span>
          <span><strong>Grey</strong> = nothing real yet</span>
        </div>
      </div>
    </div>
  );
}
