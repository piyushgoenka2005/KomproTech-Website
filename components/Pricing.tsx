"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "per project",
      description: "Perfect for small businesses and startups",
      features: [
        "Responsive Website Design",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "3 Months Support",
        "Mobile Optimization",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "per project",
      description: "Ideal for growing businesses",
      features: [
        "Custom Web Application",
        "Advanced SEO Package",
        "E-commerce Integration",
        "6 Months Support",
        "Analytics Dashboard",
        "Social Media Integration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Full-Stack Development",
        "Mobile App Development",
        "Advanced Automation",
        "12 Months Support",
        "Custom Integrations",
        "Dedicated Account Manager",
        "Priority Support",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="holographic-text">Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing options designed to scale with your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 cursor-glow glow-hover relative flex flex-col ${plan.popular ? "border-accent bg-background" : "bg-card border-border"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="holographic-gradient text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold holographic-text">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full mt-auto ${plan.popular ? "holographic-gradient text-white border-0" : "border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"} glow-hover`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        {/* Custom Quote Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Something <span className="holographic-text">Custom?</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't see a plan that fits your needs? We offer tailored solutions for unique requirements. 
            Get a custom quote designed specifically for your project.
          </p>
          <Link href="#contact"> 
            <Button 
              size="lg" 
              className="holographic-gradient glow-hover text-white border-0 px-8 py-4 text-lg"
            >
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
