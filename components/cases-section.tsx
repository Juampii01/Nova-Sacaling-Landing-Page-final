"use client"

import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function CasesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentCase, setCurrentCase] = useState(0)
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

  const cases = [
    {
      title: "Coach de Liderazgo",
      metric: "De $8K a $25K mensuales",
      description: "Implementamos sistema de contenido estratégico y proceso de ventas consultivo.",
    },
    {
      title: "Consultor en Marketing",
      metric: "150% aumento en leads calificados",
      description: "Desarrollamos posicionamiento de autoridad y embudo de nutrición automatizado.",
    },
    {
      title: "Coach de Productividad",
      metric: "Pipeline de $180K en 90 días",
      description: "Estructuramos oferta premium y sistema de seguimiento de prospectos.",
    },
    {
      title: "Consultora en RRHH",
      metric: "De freelancer a agencia",
      description: "Escalamos el modelo de negocio con equipo y procesos sistematizados.",
    },
  ]

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length)
  }

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length)
  }

  return (
    <section id="casos" ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Casos de éxito</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Resultados reales de consultores y coaches que implementaron nuestro sistema.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop view */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {cases.map((case_, index) => (
              <Card
                key={index}
                className={`p-8 bg-background border border-border hover:border-secondary/50 transition-all duration-500 hover:translate-y-[-2px] hover:shadow-lg ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="font-serif text-xl font-bold mb-3">{case_.title}</h3>
                <div className="text-secondary font-semibold text-lg mb-4">{case_.metric}</div>
                <p className="text-muted-foreground leading-relaxed">{case_.description}</p>
              </Card>
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden">
            <div className="relative">
              <Card className="p-8 bg-background border border-border min-h-[200px]">
                <h3 className="font-serif text-xl font-bold mb-3">{cases[currentCase].title}</h3>
                <div className="text-secondary font-semibold text-lg mb-4">{cases[currentCase].metric}</div>
                <p className="text-muted-foreground leading-relaxed">{cases[currentCase].description}</p>
              </Card>

              <div className="flex justify-between items-center mt-6">
                <button onClick={prevCase} className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex space-x-2">
                  {cases.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCase(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentCase ? "bg-secondary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>

                <button onClick={nextCase} className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
