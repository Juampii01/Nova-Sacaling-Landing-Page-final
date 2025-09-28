"use client"

import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function TargetAudience() {
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

  const forWho = [
    "Coaches y consultores facturando $5K+ mensuales",
    "Profesionales con expertise comprobada en su área",
    "Emprendedores listos para invertir en crecimiento estratégico",
    "Personas comprometidas con implementar y seguir procesos",
    "Quienes buscan escalabilidad real, no solo más trabajo",
  ]

  const notForWho = [
    "Principiantes sin experiencia previa en consultoría",
    "Quienes buscan resultados mágicos sin esfuerzo",
    "Personas que no pueden invertir en su crecimiento",
    "Quienes prefieren hacer todo solos sin acompañamiento",
    "Emprendedores enfocados solo en productos físicos",
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">¿Es para vos?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Trabajamos con un perfil específico de profesionales. Seamos claros desde el inicio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Para quién ES */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <Card className="p-8 bg-background border border-primary/20">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary flex items-center">
                <Check className="w-6 h-6 mr-3" />
                Para quién ES
              </h3>
              <ul className="space-y-4">
                {forWho.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Para quién NO ES */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <Card className="p-8 bg-background border border-destructive/20">
              <h3 className="font-serif text-2xl font-bold mb-6 text-destructive flex items-center">
                <X className="w-6 h-6 mr-3" />
                Para quién NO es
              </h3>
              <ul className="space-y-4">
                {notForWho.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <X className="w-5 h-5 text-destructive mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
