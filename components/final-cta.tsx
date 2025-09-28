"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Users, Clock } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-12 bg-background border border-border text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
            ¿Listo para escalar con estructura y previsibilidad?
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Si estás facturando $5K+ y querés llegar a $20K+ con un sistema sólido, esta es tu oportunidad.
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-12 py-6 text-xl mb-8 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-xl"
            onClick={() => window.open("https://calendly.com/placeholder", "_blank")}
          >
            Agendá tu llamada estratégica
          </Button>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-secondary" />
              <span>Trabajo 1:1 personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-secondary" />
              <span>Cupos limitados</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Llamada de 60 minutos</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
