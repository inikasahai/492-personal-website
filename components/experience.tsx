import { Briefcase, FlaskConical, BarChart3, Users } from "lucide-react"

const experiences = [
  {
    icon: Briefcase,
    role: "Product Development Intern",
    company: "Kampd",
    location: "Singapore",
    period: "May 2025 - Aug 2025",
    bullets: [
      "Led UI/UX design team and prototyping of 100+ screens of an AI-integrated community-building app using Figma",
      "Developed an AI Change Management Program to equip business leaders with tools to integrate AI across teams",
      "Authored 6 articles on AI's impact across various fields of business, published on Claybox and Ecosystm's websites",
    ],
    tags: ["Figma", "UI/UX Design", "AI Strategy"],
  },
  {
    icon: BarChart3,
    role: "Business Development Intern",
    company: "25YearsMore (25YM)",
    location: "Singapore",
    period: "May 2025 - Sep 2025",
    bullets: [
      "Drove strategy, research, and pitch design for 25YM's corporate partnership with BlackRock, Apple, and Micron",
      "Translated assessment and workforce insights into tailored transition programs impacting 50,000+ mid-to-late career employees",
      "Conducted market analysis to position \"life after work\" as a scalable B2B opportunity for large enterprises",
    ],
    tags: ["Market Analysis", "Strategy", "B2B"],
  },
  {
    icon: FlaskConical,
    role: "Undergraduate Research Associate",
    company: "Center for Health Informatics",
    location: "Champaign, IL",
    period: "Jan 2025 - Present",
    bullets: [
      "Supported research for external health organizations including WHO on AI-driven infodemic management",
      "Collaborated to design 10 interactive data visualizations for a short-form video misinformation detection tool",
      "Assisted with data analysis, labeling, and validation workflows to support applied AI research outputs",
    ],
    tags: ["Python", "Data Visualization", "AI Research"],
  },
  {
    icon: Users,
    role: "Internal Project Manager",
    company: "OTCR Consulting",
    location: "Champaign, IL",
    period: "Jan 2025 - Present",
    bullets: [
      "Developed a go-to-market strategy and presented recommendations to TerraMed's CEO to support product launches",
      "Competed in an internal case competition with 4 peers to deliver data-driven recommendations through research",
      "Managed the firm's research initiatives including exploring custom GenAI tools for consulting workflows",
    ],
    tags: ["Consulting", "GenAI", "Strategy"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Professional roles spanning product design, data science research,
          business development, and consulting.
        </p>

        <div className="mt-12 flex flex-col gap-8">
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    <exp.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-card-foreground">
                      {exp.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-primary">
                      {exp.company}{" "}
                      <span className="text-muted-foreground">
                        {"/ "}
                        {exp.location}
                      </span>
                    </p>
                  </div>
                </div>
                <span className="flex-shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-5 flex flex-col gap-2.5 pl-0 sm:pl-15">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 pl-0 sm:pl-15">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
