"use client"

import { Button } from "@/components/ui/button"

export default function Navigation() {
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
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold holographic-text">KomproTech</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-accent transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:shadow-[0_0_15px_rgba(101,163,13,0.4)] hover:shadow-accent/30"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-accent transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:shadow-[0_0_15px_rgba(101,163,13,0.4)] hover:shadow-accent/30"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-muted-foreground hover:text-accent transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:shadow-[0_0_15px_rgba(101,163,13,0.4)] hover:shadow-accent/30"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-muted-foreground hover:text-accent transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:shadow-[0_0_15px_rgba(101,163,13,0.4)] hover:shadow-accent/30"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-muted-foreground hover:text-accent transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:shadow-[0_0_15px_rgba(101,163,13,0.4)] hover:shadow-accent/30"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-muted-foreground hover:text-accent transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:shadow-[0_0_15px_rgba(101,163,13,0.4)] hover:shadow-accent/30"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-accent transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:shadow-[0_0_15px_rgba(101,163,13,0.4)] hover:shadow-accent/30"
              >
                Contact
              </button>
            </div>
          </div>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="holographic-gradient glow-hover text-white border-0 cursor-pointer"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}
