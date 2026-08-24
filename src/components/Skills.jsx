const GROUPS = [
  {
    label: 'Languages',
    items: ['C++', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'C', 'Git'],
  },
  {
    label: 'Frameworks & tools',
    items: ['React', 'Node.js', 'MATLAB', 'Linux', 'Excel'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="eyebrow">Skills</div>
        <h2 className="section-heading">What I build with</h2>
        <div className="skills-groups">
          {GROUPS.map((g) => (
            <div key={g.label} className="skills-group">
              <h3 className="skills-group-label">{g.label}</h3>
              <div className="skills-tags">
                {g.items.map((item) => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
