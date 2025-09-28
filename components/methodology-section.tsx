"use client"

import { Card } from "@/components/ui/card"
import { Magnet, Heart, Handshake, Target, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function MethodologySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      icon: Magnet,
      title: "Atracción",
      description: "Construimos tu autoridad para que los clientes ideales te encuentren naturalmente.",
    },
    {
      icon: Heart,
      title: "Nutrición",
      description: "Desarrollamos relaciones de confianza que convierten prospectos en clientes.",
    },
    {
      icon: Handshake,
      title: "Cierre",
      description: "Sistema de ventas consultivo que cierra naturalmente sin presión.",
    },
  ]

  const roadmap = [
    {
      month: "Mes 1",
      title: "Estructura",
      icon: Target,
      description: "Definimos posicionamiento, mensaje y fundamentos estratégicos.",
    },
    {
      month: "Mes 2",
      title: "Atracción",
      icon: Magnet,
      description: "Implementamos sistema de contenido y generación de leads.",
    },
    {
      month: "Mes 3",
      title: "Escalar",
      icon: TrendingUp,
      description: "Optimizamos conversiones y escalamos el sistema completo.",
    },
  ]

  return (
    <section id="metodologia" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Sistema <span className="text-secondary">NOVA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Metodología probada para escalar tu negocio de consultoría con estructura y previsibilidad.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className={`p-8 text-center bg-background border border-border hover:border-primary/50 transition-all duration-500 hover:translate-y-[-4px] hover:shadow-xl group ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 relative">
                <pillar.icon className="w-12 h-12 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </Card>
          ))}
        </div>

        {/* 90-Day Roadmap */}
        <div
          className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="font-serif text-3xl font-bold text-center mb-12">Roadmap 90 días</h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2 hidden md:block" />

            <div className="grid md:grid-cols-3 gap-8">
              {roadmap.map((phase, index) => (
                <div
                  key={index}
                  className={`relative ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${(index + 3) * 300}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block" />

                  <Card className="p-6 bg-background border border-border hover:border-secondary/50 transition-all duration-300 mt-8 md:mt-0">
                    <div className="text-center">
                      <div className="mb-4">
                        <phase.icon className="w-8 h-8 text-secondary mx-auto" />
                      </div>
                      <div className="text-sm text-secondary font-medium mb-2">{phase.month}</div>
                      <h4 className="font-serif text-xl font-bold mb-3">{phase.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
