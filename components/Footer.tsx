"use client"

import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold holographic-text mb-4">KomproTech</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming businesses through innovative IT solutions. We specialize in web development, mobile apps,
              SEO optimization, and intelligent automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/komprotech/" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/web-development" className="text-muted-foreground hover:text-accent transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/app-development" className="text-muted-foreground hover:text-accent transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="/seo-services" className="text-muted-foreground hover:text-accent transition-colors">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="/automation-services" className="text-muted-foreground hover:text-accent transition-colors">
                  Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-accent transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                Cookie Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                Support
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 KomproTech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
