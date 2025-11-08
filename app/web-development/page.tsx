"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Eye, Code, Smartphone, Globe, Zap, Building, User } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import BackgroundEffects from "@/components/BackgroundEffects"
import Footer from "@/components/Footer"

export default function WebDevelopmentPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Projects", icon: Globe },
    { id: "ecommerce", name: "E-commerce", icon: Smartphone },
    { id: "corporate", name: "Corporate", icon: Building },
    { id: "portfolio", name: "Portfolio", icon: User },
    { id: "saas", name: "SaaS", icon: Zap },
  ]

  const projects = [
  {
    id: 1,
    title: "Moonwatch Real Estate",
    description:
      "A sleek, conversion-focused landing page for a real estate company showcasing premium properties, investment highlights, and easy contact options.",
    image: "/moonwatch.png",
    category: "real estate",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    features: ["Property Showcase", "Lead Capture Forms", "Mobile Responsive Design"],
    liveUrl: "https://moonwatch.in/",
    githubUrl: "#",
    status: "completed"
  },
  {
    id: 2,
    title: "Social Webbers",
    description:
      "A modern digital agency website designed to highlight services in web development, branding, and marketing, complete with a dynamic CMS and case studies.",
    image: "/social-webbers.png",
    category: "agency",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    features: ["CMS Integration", "Portfolio Showcase", "SEO Optimized", "Contact Management"],
    liveUrl: "https://socialwebbers.in/",
    githubUrl: "#",
    status: "completed"
  },
  {
    id: 3,
    title: "PowerGym",
    description:
      "A clean, single-page gym website built for speed and clarity. It highlights classes, trainers, and membership options—no backend required.",
    image: "/gym.png",
    category: "fitness",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    features: ["Class Schedule", "Trainer Profiles", "Membership Plans", "Fully Responsive Layout"],
    liveUrl: "https://power-gym-fitness.vercel.app/",
    githubUrl: "#",
    status: "completed"
  },
  {
    id: 4,
    title: "PRISM – Star Imaginary",
    description:
      "A visually rich website created for PRISM, blending artistic visuals and storytelling to present a fictional star brand experience.",
    image: "/prism.png",
    category: "creative",
    technologies: ["React", "Framer Motion", "GSAP", "Styled Components"],
    features: ["Immersive Animations", "Interactive Storytelling", "Custom Transitions", "Responsive Design"],
    liveUrl: "https://prism-omega-one.vercel.app/",
    githubUrl: "#",
    status: "completed"
  },
  {
    id: 5,
    title: "Cocktail Landing Page",
    description:
      "A stylish landing page designed for a cocktail brand, featuring signature drinks, mixology tips, and event promotions.",
    image: "/cocktail-website.png",
    category: "landing",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    features: ["Drink Showcase", "Event Highlights", "Smooth Animations", "Optimized for Mobile"],
    liveUrl: "https://cocktail-landing-page-bay.vercel.app/",
    githubUrl: "#",
    status: "completed"
  },
  {
    id: 6,
    title: "Shree Ganpati Traders",
    description:
      "A professional website for a printing and packaging business, highlighting their printing solutions, product range, and easy quote requests.",
    image: "/ganpati-traders.png",
    category: "ecommerce",
    technologies: ["Next.js", "Tailwind CSS", "React", "EmailJS"],
    features: ["Product Showcase", "Quote Request Form", "Service Highlights", "Responsive Design"],
    liveUrl: "https://shree-ganpati-traders.vercel.app/",
    githubUrl: "#",
    status: "ongoing"
  }
];


  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <BackgroundEffects />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 holographic-gradient rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 holographic-gradient rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              <span className="holographic-text">Web Development</span>
              <br />
              Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Explore our collection of cutting-edge web applications, from e-commerce platforms to SaaS dashboards, 
              all built with modern technologies and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      {/* <section className="py-8 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "holographic-gradient text-white shadow-lg"
                    : "bg-background border border-border text-muted-foreground hover:text-accent hover:border-accent"
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group cursor-glow glow-hover bg-card border-border overflow-hidden p-0">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                      <Button size="sm" className="holographic-gradient text-white border-0">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="bg-background/80 border-white/20 text-white hover:bg-white/10">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs text-green-500 border-green-500">
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-accent">Key Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Start Your <span className="holographic-text">Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your web development needs and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg" 
              className="holographic-gradient glow-hover text-white border-0 px-8 py-4 text-lg"
            >
              Get Started
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="glow-hover border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg bg-transparent"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
