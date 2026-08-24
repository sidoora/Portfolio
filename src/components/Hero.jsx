export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container hero-inner">
        <div className="eyebrow">Computer Science · University of Arkansas · Class of 2027</div>
        <h1 className="hero-title">
          Sidrah Raache
        </h1>
        <p className="hero-tagline">
          CS student focused on cybersecurity &amp; full-stack development —
          I like understanding systems well enough to rebuild them from scratch.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">See the work</a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>
        <div className="hero-meta">
          <span>Minors: Math &amp; Japanese</span>
          <span className="sep">/</span>
          <span>Fayetteville, AR</span>
        </div>
      </div>
    </header>
  )
}
