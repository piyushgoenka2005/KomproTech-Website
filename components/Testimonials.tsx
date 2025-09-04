"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Emily Carter",
      role: "CEO, TechStart Inc.",
      content:
        "KomproTech transformed our digital presence completely. Their innovative approach and attention to detail exceeded our expectations.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Marketing Director, GrowthCo",
      content:
        "The SEO optimization services boosted our organic traffic by 300%. Outstanding results and professional service throughout.",
      rating: 5,
    },
    {
      name: "Lisa Rodriguez",
      role: "Founder, CreativeHub",
      content:
        "From concept to launch, KomproTech delivered a stunning mobile app that our users absolutely love. Highly recommended!",
      rating: 5,
    },
  ]

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 3000) // 3 second delay

    return () => clearInterval(testimonialInterval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="holographic-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 cursor-glow glow-hover bg-background border-border relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-center mb-8 text-pretty leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                <p className="text-accent">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "holographic-gradient" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
