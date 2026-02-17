import { Rocket, Megaphone, BookOpen } from "lucide-react"

const involvements = [
  {
    icon: Rocket,
    role: "Founder & Vice President of Operations",
    org: "Data Science Development Group (DSDG)",
    period: "Aug 2025 - Present",
    description:
      "Co-founded a student-run data organization from scratch, scaling to 30+ active members across Product Design, Data Science, and AI/ML branches. Built the operating structure including onboarding to support cross-functional, project-based work.",
  },
  {
    icon: Megaphone,
    role: "Marketing Director",
    org: "Women in Data Science (WiDS)",
    period: "Aug 2024 - Present",
    description:
      "Scaled community reach through marketing campaigns achieving 10K+ views and 20% following growth. Organized partnerships with recruiters, DEI leaders, and industry professionals to expand member opportunities.",
  },
  {
    icon: BookOpen,
    role: "Active Member",
    org: "Psi Eta Mu - Professional Information Sciences Fraternity",
    period: "Jan 2025 - Present",
    description:
      "Designed an internal skill-matching app prototype to connect 70+ members based on interests and capabilities. Participated in mock interviews, technical workshops, and corporate events.",
  },
]

export function Leadership() {
  return (
    <section id="leadership" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
          {"Leadership & Involvement"}
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {involvements.map((item) => (
            <article
              key={item.org}
              className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
                {item.role}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {item.org}
              </p>
              <span className="mt-2 text-xs text-muted-foreground">
                {item.period}
              </span>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
