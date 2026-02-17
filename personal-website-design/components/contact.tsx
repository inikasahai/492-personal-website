"use client"

import { useState } from "react"
import { Send, Mail, Linkedin, Phone } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl">
          Get In Touch
        </h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-primary" />
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {"Interested in connecting? Whether it's about a project, research collaboration, or just to say hello \u2014 I'd love to hear from you."}
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Tell me what you have in mind..."
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="inline-flex items-center justify-center gap-2 self-start rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:shadow-lg hover:brightness-110 disabled:opacity-60"
            >
              {submitted ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Contact info */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
                Email
              </h3>
              <a
                href="mailto:isahai2@illinois.edu"
                className="mt-2 inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                isahai2@illinois.edu
              </a>
            </div>

            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
                Phone
              </h3>
              <a
                href="tel:+19196568281"
                className="mt-2 inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                +1 (919) 656-8281
              </a>
            </div>

            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
                Connect
              </h3>
              <div className="mt-3 flex gap-4">
                <a
                  href="https://www.linkedin.com/in/inikasahai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-sm"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
