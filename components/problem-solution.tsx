"use client"

import { Card } from "@/components/ui/card"
import { AlertTriangle, Target, TrendingUp, Users, Zap, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ProblemSolution() {
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

  const problems = [
    {
      icon: AlertTriangle,
      title: "Imprevisibilidad",
      description: "Ingresos que suben y bajan sin control, sin saber de dónde vendrá el próximo cliente.",
    },
    {
      icon: Users,
      title: "Leads no calificados",
      description: "Atraés personas que no pueden o no quieren pagar tus tarifas reales.",
    },
    {
      icon: TrendingUp,
      title: "Desgaste constante",
      description: "Trabajás más horas pero no escalás proporcionalmente tus ingresos.",
    },
  ]

  const solutions = [
    {
      icon: Target,
      title: "Sistema predecible",
      description: "Flujo constante de clientes calificados que llegan a ti, no al revés.",
    },
    {
      icon: Zap,
      title: "Autoridad estratégica",
      description: "Posicionamiento que atrae naturalmente a quienes valoran tu expertise.",
    },
    {
      icon: Shield,
      title: "Escalabilidad sólida",
      description: "Estructura que crece contigo sin requerir más horas de tu tiempo.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Problems */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-destructive">Lo que hoy te frena</h2>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <Card
                  key={index}
                  className={`p-6 bg-card border border-border hover:border-destructive/50 transition-all duration-300 ${
                    isVisible ? `animate-fade-up` : ""
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <problem.icon className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-secondary">Lo que podés lograr</h2>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className={`p-6 bg-card border border-border hover:border-secondary/50 transition-all duration-300 ${
                    isVisible ? `animate-fade-up` : ""
                  }`}
                  style={{ animationDelay: `${(index + 3) * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <solution.icon className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
