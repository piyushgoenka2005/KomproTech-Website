"use client"

import { Users, Award, Target, Globe } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: Target,
      title: "Results-Driven Approach",
      description:
        "We focus on delivering measurable outcomes that directly impact your business growth.",
    },
    {
      icon: Globe,
      title: "Cutting-Edge Technology",
      description: "We stay ahead of the curve with the latest technologies and industry best practices.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled professionals bring years of experience and passion to every project.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control ensure flawless delivery every time.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="holographic-text">KomproTech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a forward-thinking IT solutions company dedicated to transforming businesses through innovative
            technology and creative excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At KomproTech, we believe in the power of technology to revolutionize how businesses operate and connect
              with their customers. Our mission is to provide comprehensive IT solutions that not only meet current
              needs but anticipate future challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From startups to enterprise-level organizations, we partner with businesses to create digital
              experiences that drive growth, enhance efficiency, and deliver measurable results.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="holographic-gradient w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold holographic-text">50+</h4>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="holographic-gradient w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold holographic-text">100+</h4>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="holographic-gradient w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
