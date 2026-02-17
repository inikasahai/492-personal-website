import Image from "next/image"
import { ArrowDown, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      {/* Subtle decorative background elements */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent/40" />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Welcome to my portfolio
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {"Hi, I'm "}
            <span className="text-primary">Inika Sahai</span>
          </h1>
          <p className="mt-4 font-heading text-xl font-medium text-muted-foreground sm:text-2xl">
            Information Sciences & Data Science Student
          </p>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:mx-0">
            Passionate about the intersection of data, design, and technology.
            Currently pursuing a B.S. in Information Sciences + Data Science at
            the University of Illinois at Urbana-Champaign.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:brightness-110"
            >
              <ArrowDown className="h-4 w-4" />
              View My Experience
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Get In Touch
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative flex-shrink-0">
          <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-4 border-card shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <Image
              src="/images/hero-portrait.jpg"
              alt="Portrait of Inika Sahai"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-2xl border-2 border-primary/30" />
        </div>
      </div>
    </section>
  )
}
