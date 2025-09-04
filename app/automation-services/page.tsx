"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Eye, Code, Zap, Bot, Workflow, Database, Cloud, Shield, Clock, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import BackgroundEffects from "@/components/BackgroundEffects"
import Footer from "@/components/Footer"

export default function AutomationServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Solutions", icon: Zap },
    { id: "business", name: "Business Process", icon: Workflow },
    { id: "marketing", name: "Marketing Automation", icon: TrendingUp },
    { id: "data", name: "Data Automation", icon: Database },
    { id: "integration", name: "System Integration", icon: Cloud },
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce Order Processing",
      description: "Automated order fulfillment system reducing processing time by 85% and eliminating manual errors for online retailer.",
      image: "/placeholder.jpg",
      category: "business",
      technologies: ["Python", "APIs", "Database Automation", "Email Integration"],
      features: ["Order Processing", "Inventory Management", "Customer Notifications", "Error Handling"],
      results: "85% Time Reduction",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 2,
      title: "Lead Generation Automation",
      description: "Automated lead scoring and nurturing system resulting in 200% increase in qualified leads and 150% improvement in conversion rates.",
      image: "/placeholder.jpg",
      category: "marketing",
      technologies: ["CRM Integration", "Email Marketing", "Lead Scoring", "Analytics"],
      features: ["Lead Scoring", "Email Sequences", "CRM Updates", "Performance Tracking"],
      results: "200% Lead Increase",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 3,
      title: "Data Pipeline Automation",
      description: "Automated data processing pipeline reducing manual data entry by 95% and improving data accuracy to 99.8%.",
      image: "/placeholder.jpg",
      category: "data",
      technologies: ["ETL Processes", "Data Validation", "Scheduled Jobs", "Error Monitoring"],
      features: ["Data Extraction", "Transformation", "Loading", "Quality Checks"],
      results: "95% Manual Work Reduction",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 4,
      title: "Customer Support Automation",
      description: "Intelligent chatbot and ticket routing system handling 80% of customer inquiries automatically with 90% satisfaction rate.",
      image: "/placeholder.jpg",
      category: "business",
      technologies: ["AI Chatbot", "NLP", "Ticket Routing", "Knowledge Base"],
      features: ["Chatbot Integration", "Ticket Routing", "Response Templates", "Analytics"],
      results: "80% Auto Resolution",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 5,
      title: "Social Media Automation",
      description: "Comprehensive social media management system scheduling posts, monitoring mentions, and analyzing performance across platforms.",
      image: "/placeholder.jpg",
      category: "marketing",
      technologies: ["Social APIs", "Content Scheduling", "Analytics", "Sentiment Analysis"],
      features: ["Post Scheduling", "Mention Monitoring", "Performance Analytics", "Content Optimization"],
      results: "300% Engagement Boost",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 6,
      title: "ERP Integration Automation",
      description: "Seamless integration between multiple business systems reducing data silos and improving operational efficiency by 70%.",
      image: "/placeholder.jpg",
      category: "integration",
      technologies: ["API Integration", "Data Synchronization", "Real-time Updates", "Error Handling"],
      features: ["System Integration", "Data Sync", "Real-time Updates", "Monitoring"],
      results: "70% Efficiency Gain",
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
              <span className="holographic-text">Automation</span>
              <br />
              Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Streamline your business operations with intelligent automation solutions. From process automation to system integration, 
              we help businesses reduce manual work, eliminate errors, and scale efficiently.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>85% Time Savings</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>99.8% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>200% Efficiency</span>
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
                        <Code className="h-4 w-4 mr-1" />
                        Details
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-xs bg-blue-500/20 text-blue-400 border-blue-500/30">
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

      {/* Automation Process */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="holographic-text">Automation</span> Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a systematic approach to deliver reliable automation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Process Analysis",
                description: "Analyze current workflows to identify automation opportunities and bottlenecks",
                icon: Workflow
              },
              {
                step: "02", 
                title: "Solution Design",
                description: "Design custom automation solutions tailored to your specific business needs",
                icon: Bot
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build and thoroughly test automation solutions with comprehensive error handling",
                icon: Code
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Deploy solutions and provide ongoing monitoring, maintenance, and optimization",
                icon: Shield
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
            Ready to <span className="holographic-text">Automate</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your automation needs and create solutions that transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg" 
              className="holographic-gradient glow-hover text-white border-0 px-8 py-4 text-lg"
            >
              Get Automation Audit
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
