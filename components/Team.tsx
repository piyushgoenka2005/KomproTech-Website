"use client"

import { Card } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Ricky Dey",
      role: "Founder & CEO",
      position: "AL/ML Engineer",
      description: "Passionate about creating scalable solutions with modern technologies",
      image: "/ricky.jpg",
      social: {
        github: "https://github.com/Ricky2054",
        linkedin: "https://www.linkedin.com/in/ricky-dey-a49726206/",
        twitter: "#",
      },
    },
    {
      name: "Sorbojit Mondal",
      role: "Co-Founder",
      position: "Full-Stack Engineer",
      description: "Crafting beautiful and intuitive user experiences that convert",
      image: "/sorbojit.jpg",
      social: {
        github: "https://github.com/33sorbojitmondal",
        linkedin: "https://www.linkedin.com/in/sorbojit-mondal-6aa5ab27b/",
        twitter: "#",
      },
    },
    {
      name: "Yuvraj Prasad",
      role: "Managing Director",
      position: "UI/UX Developer",
      description: "Driving organic growth through data-driven SEO strategies",
      image: "/yuvraj.jpg",
      social: {
        github: "https://github.com/YuvisTechPoint",
        linkedin: "https://www.linkedin.com/in/yuvrajprasad/",
        twitter: "#",
      },
    },
    {
      name: "Piyush Goenka",
      role: "Chief Financial Officer",
      position: "Full-Stack Developer",
      description: "Ensuring seamless project delivery with exceptional attention to detail",
      image: "/piyush.png",
      social: {
        github: "https://github.com/piyushgoenka2005",
        linkedin: "https://www.linkedin.com/in/piyushgoenka2005/",
        twitter: "https://x.com/PiyushGoenka03",
      },
    },
  ]

  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="holographic-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Talented professionals dedicated to bringing your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 text-center cursor-glow glow-hover bg-card border-border group">
              <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover border-4 border-transparent bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3 p-1 transition-transform duration-300 group-hover:scale-105"
                />
                {/* Social media icons that appear on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-center space-x-3">
                      <a href={member.social.github} className="text-white hover:text-accent transition-colors" target="_blank">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href={member.social.linkedin} className="text-white hover:text-accent transition-colors" target="_blank">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.social.twitter} className="text-white hover:text-accent transition-colors" target="_blank">
                        <Twitter className="h-5 w-5" />
                      </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-accent font-medium mb-1">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-3">{member.position}</p>
              <p className="text-sm text-muted-foreground italic">{member.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
