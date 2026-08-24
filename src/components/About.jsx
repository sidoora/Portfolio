const COURSEWORK = [
  'Computer Architecture',
  'Programming Paradigms',
  'Operating Systems',
  'Embedded Systems',
  'Systems Syntheis and Modeling',
]

const LANGUAGES = [
  { lang: 'English', level: 'Native' },
  { lang: 'Arabic', level: 'Native' },
  { lang: 'French', level: 'Native' },
  { lang: 'Japanese', level: 'Elementary' },
  { lang: 'Korean', level: 'Elementary' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div>
          <div className="eyebrow">About</div>
          <h2 className="section-heading">Building things, then rebuilding them better.</h2>
          <p className="about-body">
            I'm a Computer Science student at the University of Arkansas, with minors in Mathematics and Japanese, graduating December 2027. Most of
            what I've learned has come from taking one project and reworking it under different
            constraints — a different language, a different paradigm, a different set of rules —
            until I actually understood why it worked the first time.
          </p>
          <p className="about-body">
            Outside coursework, I coordinate development initiatives for a cultural nonprofit,
            work on personal programming projects, and actively engage in a
            80+ member co-ed engineering fraternity.
          </p>
          <div className="lang-strip">
            {LANGUAGES.map((l) => (
              <span key={l.lang} className="pill">{l.lang} · {l.level}</span>
            ))}
          </div>
        </div>
        <div className="coursework-card card">
          <div className="eyebrow">Relevant coursework</div>
          <ul className="coursework-list">
            {COURSEWORK.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
