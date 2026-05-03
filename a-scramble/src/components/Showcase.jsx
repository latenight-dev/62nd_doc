export default function Showcase() {
  return (
    <section id="showcase" className="section showcase-section">
      <div className="container">
        <p className="section-eyebrow">Sample Work</p>
        <h2 className="section-title">See the Craft in Action</h2>
        <p className="section-desc">
          This is what "Cinema-Commerce in 10 minutes" actually looks like —
          raw, cinematic storytelling built to move product and build brand
          authority at the same time.
        </p>
        <div className="video-wrap">
          <video
            controls
            playsInline
            preload="metadata"
            className="showcase-video"
          >
            <source src="/albert-vid.mov" type="video/mp4" />
            <source src="/albert-vid.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="video-caption">
          A Scramble Production — shot, tagged, and delivered same-day.
        </p>
      </div>
    </section>
  );
}
