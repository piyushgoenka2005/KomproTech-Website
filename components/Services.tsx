"use client"

import { Card } from "@/components/ui/card"
import { Code, Smartphone, Search, Zap } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Services() {
  const router = useRouter();
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      link: "/web-development",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      link: "/app-development",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your online visibility with our advanced SEO strategies",
      link: "/seo-services",
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Streamline your processes with intelligent automation solutions",
      link: "/automation-services",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="holographic-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to elevate your business in the digital landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 cursor-glow glow-hover bg-background border-border cursor-pointer" onClick={() => router.push(service.link)}>
              <div className="holographic-gradient w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
