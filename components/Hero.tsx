"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 holographic-gradient rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 holographic-gradient rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 holographic-gradient rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="cursor-glow rounded-2xl p-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="holographic-text">Innovating</span> Your
            <br />
            Digital Future
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            KomproTech delivers cutting-edge IT solutions, from stunning websites to powerful mobile apps, SEO
            optimization, and intelligent automation that transforms your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg" 
              className="holographic-gradient glow-hover text-white border-0 px-8 py-4 text-lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => window.location.href = '/web-development'}
              size="lg"
              variant="outline"
              className="glow-hover border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce delay-1000">
        <div className="w-4 h-4 holographic-gradient rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-bounce delay-2000">
        <div className="w-6 h-6 holographic-gradient rounded-full"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce">
        <div className="w-3 h-3 holographic-gradient rounded-full"></div>
      </div>
    </section>
  )
}
