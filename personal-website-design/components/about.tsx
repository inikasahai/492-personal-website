import { GraduationCap, Award, Globe, Brain, BarChart3, Users } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    description: "B.S. Information Sciences + Data Science, UIUC (3.98 GPA)",
  },
  {
    icon: Award,
    label: "Dean's List",
    description: "James Scholar Honors Program",
  },
  {
    icon: Globe,
    label: "Bilingual",
    description: "Seal of Biliteracy in Mandarin, US Citizen & Singapore PR",
  },
]

const interests = [
  {
    icon: Brain,
    label: "AI & Research",
    description: "Exploring AI-driven solutions from infodemic management to generative AI tools",
  },
  {
    icon: BarChart3,
    label: "Data Visualization",
    description: "Designing interactive visualizations that make complex data accessible",
  },
  {
    icon: Users,
    label: "UX Design",
    description: "Crafting intuitive digital experiences through human-centered design",
  },
]

export function About() {
  return (
    <section id="about" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
          About Me
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Bio */}
          <div className="flex flex-col gap-5">
            <p className="leading-relaxed text-muted-foreground">
              {"I'm a sophomore at the University of Illinois at Urbana-Champaign studying Information Sciences and Data Science. My work sits at the intersection of data, design, and technology \u2014 I'm driven by the challenge of turning complex information into meaningful, user-friendly experiences."}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {"From leading UI/UX design for an AI-powered community app at Kampd, to supporting WHO-affiliated research on AI-driven infodemic management at the Center for Health Informatics, I've had the opportunity to work across product design, data analysis, and strategic consulting."}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {"Outside of work, I co-founded the Data Science Development Group, serve as Marketing Director for Women in Data Science, and am an active member of Psi Eta Mu, the professional Information Sciences fraternity. I'm always looking for new ways to learn, collaborate, and create impact."}
            </p>

            {/* Education & awards highlights */}
            <div className="mt-2 flex flex-col gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg bg-accent/50 px-4 py-3"
                >
                  <item.icon className="h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <span className="text-sm font-semibold text-foreground">
                      {item.label}:
                    </span>{" "}
                    <span className="text-sm text-muted-foreground">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-lg font-semibold text-card-foreground">
              What Drives Me
            </h3>
            <div className="flex flex-col gap-4">
              {interests.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
