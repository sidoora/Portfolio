const EXPERIENCE = [
  {
    role: 'Development Coordinator',
    org: 'Ra-Ve Cultural Foundation',
    place: 'Bentonville, AR',
    period: 'Dec 2025 – Present',
    points: [
      'Coordinate fundraising and development initiatives supporting organizational programs and cultural outreach',
      'Manage and update the organization\'s website for accuracy, UX, and engagement',
    ],
  },
  {
    role: 'Professional Chair',
    org: 'Theta Tau Professional Engineering Fraternity',
    place: '',
    period: 'Jan 2026 – May 2026',
    points: [
      'Organize professional development events, including networking sessions and industry workshops',
      'Foster career readiness by connecting members with industry professionals',
    ],
  },
  {
    role: 'Dental Shadowing',
    org: 'Metropark Dental',
    place: 'Bentonville, AR',
    period: 'Jan 2026 – Present',
    points: [
      'Observe clinical procedures, examinations, and treatment planning',
      'Study patient communication and practice management alongside dental professionals',
    ],
  },
  {
    role: 'Scholarship Chair',
    org: 'Theta Tau Professional Engineering Fraternity',
    place: '',
    period: 'Aug 2025 – Dec 2025',
    points: [
      'Managed the fraternity\'s scholarship program, including applications and award distributions',
      'Organized academic workshops to promote member success',
    ],
  },
  {
    role: 'Undergraduate Research TA',
    org: 'University of Arkansas',
    place: 'Fayetteville, AR',
    period: 'Aug 2021 – Apr 2022',
    points: [
      'Mentored freshman engineering students in research methodologies',
      'Graded student assignments and research projects',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="eyebrow">Experience</div>
        <h2 className="section-heading">Where I've worked</h2>
        <div className="timeline">
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-head">
                  <h3 className="timeline-role">{e.role}</h3>
                  <span className="timeline-period">{e.period}</span>
                </div>
                <div className="timeline-org">{e.org}{e.place ? ` · ${e.place}` : ''}</div>
                <ul className="timeline-points">
                  {e.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
