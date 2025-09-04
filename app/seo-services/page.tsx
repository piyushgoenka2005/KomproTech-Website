"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Eye, Code, Search, TrendingUp, Globe, Target, BarChart3, Zap, Users, Award } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import BackgroundEffects from "@/components/BackgroundEffects"
import Footer from "@/components/Footer"

export default function SEOServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Services", icon: Search },
    { id: "technical", name: "Technical SEO", icon: Code },
    { id: "content", name: "Content SEO", icon: Globe },
    { id: "local", name: "Local SEO", icon: Target },
    { id: "ecommerce", name: "E-commerce SEO", icon: TrendingUp },
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce SEO Optimization",
      description: "Comprehensive SEO strategy for online store resulting in 300% increase in organic traffic and 250% boost in sales.",
      image: "/placeholder.jpg",
      category: "ecommerce",
      technologies: ["Google Analytics", "Search Console", "Schema Markup", "Core Web Vitals"],
      features: ["Keyword Research", "Technical Audit", "Content Optimization", "Link Building"],
      results: "300% Traffic Increase",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 2,
      title: "Local Business SEO Campaign",
      description: "Local SEO strategy for restaurant chain resulting in 400% increase in local search visibility and 180% more foot traffic.",
      image: "/placeholder.jpg",
      category: "local",
      technologies: ["Google My Business", "Local Citations", "Review Management", "Local Schema"],
      features: ["Local Listings", "Review Optimization", "Local Content", "Map Pack Ranking"],
      results: "400% Local Visibility",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 3,
      title: "Technical SEO Audit & Fix",
      description: "Complete technical SEO overhaul for SaaS platform resulting in 60% improvement in Core Web Vitals and 200% faster indexing.",
      image: "/placeholder.jpg",
      category: "technical",
      technologies: ["Core Web Vitals", "PageSpeed Insights", "Lighthouse", "GTmetrix"],
      features: ["Site Speed Optimization", "Mobile Optimization", "Crawlability Fix", "Indexing Issues"],
      results: "60% Performance Boost",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 4,
      title: "Content Marketing SEO",
      description: "Content-driven SEO strategy for B2B company resulting in 500% increase in organic leads and 150% improvement in domain authority.",
      image: "/placeholder.jpg",
      category: "content",
      technologies: ["Content Analysis", "Keyword Research", "Competitor Analysis", "Link Building"],
      features: ["Content Strategy", "Blog Optimization", "Topic Clusters", "Authority Building"],
      results: "500% Lead Increase",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 5,
      title: "SaaS Platform SEO",
      description: "Comprehensive SEO strategy for SaaS platform resulting in 250% increase in trial signups and 180% improvement in conversion rates.",
      image: "/placeholder.jpg",
      category: "technical",
      technologies: ["JavaScript SEO", "SPA Optimization", "API Documentation", "Developer SEO"],
      features: ["SPA Optimization", "API SEO", "Documentation SEO", "Developer Outreach"],
      results: "250% Trial Increase",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 6,
      title: "Multi-location Business SEO",
      description: "Scalable SEO strategy for franchise business resulting in 350% increase in local search rankings across all locations.",
      image: "/placeholder.jpg",
      category: "local",
      technologies: ["Multi-location SEO", "Franchise SEO", "Local Schema", "Citation Management"],
      features: ["Location-specific SEO", "Franchise Optimization", "Local Content", "Review Management"],
      results: "350% Multi-location Growth",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    }
  ]

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
              <span className="holographic-text">SEO</span>
              <br />
              Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Boost your online visibility with our data-driven SEO strategies. From technical optimization to content marketing, 
              we help businesses achieve top search rankings and sustainable organic growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>300%+ Traffic Growth</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-4 w-4" />
                <span>Top Rankings</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span>Data-Driven Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card">
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
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group cursor-glow glow-hover bg-card border-border overflow-hidden">
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
                        <BarChart3 className="h-4 w-4 mr-1" />
                        Analytics
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-400 border-green-500/30">
                      {project.results}
                    </Badge>
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
                    <h4 className="text-sm font-medium text-accent">Key Services:</h4>
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

      {/* SEO Process */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="holographic-text">SEO</span> Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to deliver measurable SEO results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Analysis",
                description: "Comprehensive SEO audit to identify opportunities and technical issues",
                icon: Search
              },
              {
                step: "02", 
                title: "Strategy Development",
                description: "Custom SEO strategy tailored to your business goals and competition",
                icon: Target
              },
              {
                step: "03",
                title: "Implementation",
                description: "Technical optimization, content creation, and link building execution",
                icon: Zap
              },
              {
                step: "04",
                title: "Monitoring & Growth",
                description: "Continuous monitoring, reporting, and strategy refinement for growth",
                icon: TrendingUp
              }
            ].map((process, index) => (
              <Card key={index} className="p-6 text-center cursor-glow glow-hover bg-background border-border">
                <div className="holographic-gradient w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <process.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold holographic-text mb-2">{process.step}</div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Dominate <span className="holographic-text">Search Results?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your SEO goals and create a strategy that drives real business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg" 
              className="holographic-gradient glow-hover text-white border-0 px-8 py-4 text-lg"
            >
              Get SEO Audit
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="glow-hover border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg bg-transparent"
            >
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
