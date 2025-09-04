"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key'

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: 'KomproTech Team'
      }
      
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      if (result.status === 200) {
        setSubmitStatus('success')
        setName("")
        setEmail("")
        setMessage("")
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitStatus('error')
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="holographic-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="holographic-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-muted-foreground">comprotechofficial@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="holographic-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-muted-foreground">+91 6289433412</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="holographic-gradient w-12 h-12 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-muted-foreground">Kolkata, West Bengal</p>
              </div>
            </div>
          </div>

          <Card className="p-8 cursor-glow glow-hover bg-background border-border">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                  <AlertCircle className="h-5 w-5" />
                  <span>Failed to send message. Please try again or contact us directly.</span>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full holographic-gradient glow-hover text-white border-0 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
