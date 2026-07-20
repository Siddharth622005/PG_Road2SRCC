// Renders a real team-shot photo when `src` is given. Falls back to a warm
// placeholder gradient (unphotographed rooms, static-map slots, etc.) so
// layout/spacing still reads correctly before real photography exists.
export default function PhotoBox({ ratio = '4 / 3', label, caption, tag, src }) {
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: ratio, borderRadius: 12, overflow: 'hidden' }}>
      {src ? (
        <img
          src={src}
          alt={caption || label || ''}
          loading="lazy"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, #EFE8DC 0%, #E4D9C6 50%, #D8CBAF 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <span style={{ color: '#9C8F78', fontSize: 13, fontWeight: 600, textAlign: 'center', padding: 16 }}>
            {label || 'Photo'}
          </span>
        </div>
      )}
      {tag && (
        <span style={{
          position: 'absolute', left: 10, bottom: 10, background: 'rgba(26,26,26,0.72)', color: '#fff',
          fontSize: 11, padding: '4px 8px', borderRadius: 6,
        }}>
          {tag}
        </span>
      )}
      {caption && (
        <span style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, padding: '20px 12px 8px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.55))', color: '#fff', fontSize: 13,
        }}>
          {caption}
        </span>
      )}
    </div>
  );
}
