"use client"

import { Card } from "@/components/ui/card"
import { Crown, Target, Building, Compass, Shield, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function DifferentiatorsSection() {
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

  const differentiators = [
    {
      icon: Crown,
      title: "Autoridad, no viralidad",
      description: "No hacemos viralidad, construimos autoridad sólida y respetada en tu nicho.",
    },
    {
      icon: Target,
      title: "Calidad, no volumen",
      description: "No buscamos volumen, atraemos la calidad exacta de clientes que necesitás.",
    },
    {
      icon: Building,
      title: "Estructura, no hacks",
      description: "No hacks temporales: estructura sólida y dirección estratégica a largo plazo.",
    },
    {
      icon: Compass,
      title: "Estrategia personalizada",
      description: "Cada plan se adapta a tu negocio específico, no soluciones genéricas.",
    },
    {
      icon: Shield,
      title: "Resultados sostenibles",
      description: "Construimos sistemas que funcionan a largo plazo, no soluciones de parche.",
    },
    {
      icon: Zap,
      title: "Implementación práctica",
      description: "Acompañamiento hands-on en cada paso, no solo teoría o cursos grabados.",
    },
  ]

  return (
    <section id="diferenciadores" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Por qué somos diferentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            No somos una agencia más. Somos consultores estratégicos enfocados en resultados reales y sostenibles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <Card
              key={index}
              className={`p-6 bg-card border border-border hover:border-secondary/50 transition-all duration-500 hover:translate-y-[-2px] hover:shadow-lg group cursor-pointer ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
                transform: isVisible ? "none" : "translateY(20px)",
              }}
            >
              <div className="mb-4">
                <item.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-lg mb-3 group-hover:text-secondary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
