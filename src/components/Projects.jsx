const PROJECTS = [
  {
    title: 'COVID-19 Vaccine Distribution Research',
    period: 'Sept 2020 – Apr 2021',
    tag: 'Research',
    description:
      'Research project under Dr. Sandra Eksioglu (Industrial Engineering) through the first-year Honors Research Engineering Program. Modeled and optimized vaccine supply chain strategies.',
    highlight: 'Reduced projected wait times by 15%',
  },
  {
    title: 'Koozintea — Bakery Website',
    period: 'Summer 2025',
    tag: 'Full-Stack',
    description:
      'A full-stack site built for my mom\'s home-based confectionery business, using Next.js and TypeScript — real product photography, a client-side contact form, and a server-side API route that validates and handles submissions.',
    highlight: 'Next.js · TypeScript · Tailwind · API routes',
    url: 'https://github.com/sidoora/Koozintea-Website',
    liveUrl: 'https://koozintea-website.vercel.app/',
  },
  {
    title: 'Academic Procrastination Study',
    period: 'Sept 2019 – Apr 2020',
    tag: 'Research',
    description:
      'Independent research analyzing the effectiveness of academic procrastination among high school students.',
    highlight: 'Published in the Walt Whitman Journal of Psychology',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="eyebrow">More projects</div>
        <h2 className="section-heading">Research &amp; other builds</h2>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.title} className="card project-card">
              <div className="project-card-top">
                <span className="pill">{p.tag}</span>
                <span className="project-period">{p.period}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-card-bottom">
                <span className="project-highlight">{p.highlight}</span>
                <div className="project-links">
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary">
                      Live demo ↗
                    </a>
                  )}
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-link">
                      View code →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

