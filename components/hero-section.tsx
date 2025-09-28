"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return

      const particle = document.createElement("div")
      particle.className = "absolute w-1 h-1 bg-secondary/20 rounded-full animate-pulse"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.top = Math.random() * 100 + "%"
      particle.style.animationDelay = Math.random() * 2 + "s"
      particle.style.animationDuration = Math.random() * 3 + 2 + "s"

      particlesRef.current.appendChild(particle)

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      }, 5000)
    }

    const interval = setInterval(createParticle, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle particles background */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Parallax background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-balance mb-6 leading-tight">
          Escalá tu negocio a <span className="text-secondary">$20K+</span> con un sistema sólido y predecible
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 text-pretty leading-relaxed">
          Ayudamos a coaches y consultores a atraer, nutrir y cerrar clientes high ticket con una marca personal
          estratégica.
        </p>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-4 text-lg transition-all duration-200 hover:translate-y-[-2px] hover:shadow-xl"
          onClick={() => window.open("https://calendly.com/placeholder", "_blank")}
        >
          Agendá tu llamada estratégica
        </Button>
      </div>
    </section>
  )
}
