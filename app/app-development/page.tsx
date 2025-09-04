"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Eye, Code, Smartphone, Globe, Zap, Heart, ShoppingCart, Gamepad2, Camera, Music, MapPin, Users } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import BackgroundEffects from "@/components/BackgroundEffects"
import Footer from "@/components/Footer"

export default function AppDevelopmentPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Apps", icon: Smartphone },
    { id: "ecommerce", name: "E-commerce", icon: ShoppingCart },
    { id: "social", name: "Social", icon: Users },
    { id: "productivity", name: "Productivity", icon: Zap },
    { id: "entertainment", name: "Entertainment", icon: Gamepad2 },
    { id: "health", name: "Health & Fitness", icon: Heart },
  ]

  const projects = [
    {
      id: 1,
      title: "E-Shop Mobile App",
      description: "Complete e-commerce mobile application with advanced features like AR product preview, real-time chat, and secure payment integration.",
      image: "/placeholder.jpg",
      category: "ecommerce",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe", "Firebase"],
      features: ["AR Product Preview", "Real-time Chat", "Secure Payments", "Push Notifications"],
      platform: "iOS & Android",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 2,
      title: "Social Connect App",
      description: "Modern social networking app with real-time messaging, story sharing, and advanced privacy controls.",
      image: "/placeholder.jpg",
      category: "social",
      technologies: ["Flutter", "Firebase", "WebRTC", "Socket.io", "AWS"],
      features: ["Real-time Messaging", "Story Sharing", "Video Calls", "Privacy Controls"],
      platform: "iOS & Android",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 3,
      title: "TaskFlow Pro",
      description: "Advanced productivity app with team collaboration, time tracking, and AI-powered task prioritization.",
      image: "/placeholder.jpg",
      category: "productivity",
      technologies: ["React Native", "TypeScript", "GraphQL", "PostgreSQL", "Redis"],
      features: ["Team Collaboration", "Time Tracking", "AI Task Priority", "Analytics Dashboard"],
      platform: "iOS & Android",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 4,
      title: "FitnessTracker Plus",
      description: "Comprehensive fitness tracking app with workout plans, nutrition tracking, and social challenges.",
      image: "/placeholder.jpg",
      category: "health",
      technologies: ["Flutter", "Dart", "Firebase", "HealthKit", "Google Fit"],
      features: ["Workout Plans", "Nutrition Tracking", "Social Challenges", "Health Integration"],
      platform: "iOS & Android",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 5,
      title: "MusicStream Pro",
      description: "Premium music streaming app with offline downloads, playlist sharing, and high-quality audio streaming.",
      image: "/placeholder.jpg",
      category: "entertainment",
      technologies: ["React Native", "Expo", "Spotify API", "AWS S3", "FFmpeg"],
      features: ["Offline Downloads", "Playlist Sharing", "High-Quality Audio", "Smart Recommendations"],
      platform: "iOS & Android",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 6,
      title: "Foodie Explorer",
      description: "Restaurant discovery app with AR menu scanning, table booking, and food delivery integration.",
      image: "/placeholder.jpg",
      category: "ecommerce",
      technologies: ["Flutter", "ARCore", "Google Maps API", "Payment Gateway", "Push Notifications"],
      features: ["AR Menu Scanning", "Table Booking", "Food Delivery", "Reviews & Ratings"],
      platform: "iOS & Android",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 7,
      title: "Travel Companion",
      description: "Smart travel planning app with itinerary management, local recommendations, and real-time updates.",
      image: "/placeholder.jpg",
      category: "productivity",
      technologies: ["React Native", "Google Maps", "Weather API", "Translation API", "Cloud Storage"],
      features: ["Itinerary Management", "Local Recommendations", "Real-time Updates", "Offline Maps"],
      platform: "iOS & Android",
      liveUrl: "#",
      githubUrl: "#",
      status: "completed"
    },
    {
      id: 8,
      title: "Photo Editor Pro",
      description: "Professional photo editing app with AI-powered filters, batch processing, and cloud sync.",
      image: "/placeholder.jpg",
      category: "entertainment",
      technologies: ["Flutter", "OpenCV", "TensorFlow Lite", "AWS S3", "Image Processing"],
      features: ["AI Filters", "Batch Processing", "Cloud Sync", "Professional Tools"],
      platform: "iOS & Android",
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
              <span className="holographic-text">Mobile App</span>
              <br />
              Development
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Discover our innovative mobile applications built with cutting-edge technologies. 
              From e-commerce to social networking, we create apps that deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Smartphone className="h-4 w-4" />
                <span>iOS & Android</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>Cross-Platform</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Cloud Integration</span>
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
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-xs bg-background/80">
                      {project.platform}
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

      {/* App Development Process */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="holographic-text">Development</span> Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to deliver high-quality mobile applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Understanding your requirements and creating a detailed project roadmap",
                icon: Eye
              },
              {
                step: "02", 
                title: "Design & Prototyping",
                description: "Creating intuitive UI/UX designs and interactive prototypes",
                icon: Code
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Building your app with rigorous testing and quality assurance",
                icon: Smartphone
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deploying to app stores and providing ongoing maintenance",
                icon: Zap
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
            Ready to Build Your <span className="holographic-text">Dream App?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your mobile app idea and bring it to life with cutting-edge technology and exceptional design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg" 
              className="holographic-gradient glow-hover text-white border-0 px-8 py-4 text-lg"
            >
              Start Your App
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="glow-hover border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg bg-transparent"
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
