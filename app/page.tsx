import Feedback from "@/components/feedback";
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Leadership } from "@/components/leadership"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Leadership />
        <Skills />
        <Feedback /> 
        <Contact />
      </main>
      <Footer />
    </>
  )
}
