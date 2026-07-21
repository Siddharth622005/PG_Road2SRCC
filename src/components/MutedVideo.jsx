// A <video> that cannot be unmuted. The native controls still show a mute
// toggle (browsers don't let you remove just that button), so we snap it
// back to muted the instant it fires — the toggle exists but does nothing.
export default function MutedVideo({ style, ...props }) {
  return (
    <video
      {...props}
      muted
      controls
      onVolumeChange={(e) => {
        if (!e.target.muted) e.target.muted = true;
      }}
      style={style}
    />
  );
}
