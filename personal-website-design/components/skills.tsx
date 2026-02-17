const skillGroups = [
  {
    category: "Programming",
    skills: ["Java", "Python", "SQL", "Cypher"],
  },
  {
    category: "Tools & Frameworks",
    skills: ["pandas", "Matplotlib", "VPython", "Neo4j", "GitHub"],
  },
  {
    category: "Design & Research",
    skills: ["Figma", "Canva", "UI/UX Design", "Data Visualization", "User Research"],
  },
  {
    category: "Relevant Coursework",
    skills: [
      "Data Science",
      "Linear Algebra",
      "Database Concepts",
      "Graph Databases",
      "Human-Computer Interaction",
      "UX Design",
      "Research Design",
      "Intro to Generative AI",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {"Skills & Technologies"}
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />
        <p className="mt-4 max-w-2xl text-muted-foreground">
          The tools, languages, and knowledge I bring to every project.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
