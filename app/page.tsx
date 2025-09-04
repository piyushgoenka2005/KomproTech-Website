"use client"

import Navigation from "@/components/Navigation"
import BackgroundEffects from "@/components/BackgroundEffects"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Pricing from "@/components/Pricing"
import Team from "@/components/Team"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function KomproTechHomepage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <BackgroundEffects />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
