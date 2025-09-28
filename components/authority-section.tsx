"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function AuthoritySection() {
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

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-12 bg-card border border-border">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Conocé a Juan Pablo Acosta</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Soy Juan Pablo Acosta y llevo más de dos años detrás de cámaras como editor y estratega de contenido
                para coaches y consultores que venden ofertas high ticket. Analizando horas de contenido y cientos de
                conversaciones de venta descubrí qué piezas realmente generan autoridad y cuáles solo ocupan espacio.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Esa experiencia me mostró que la clave no está en publicar más, sino en ordenar un sistema que alinee
                la narrativa, el contenido y la experiencia de venta. Cuando todo encaja, la marca deja de depender del
                esfuerzo manual diario y empieza a atraer prospectos listos para avanzar.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Hoy acompaño a mis clientes a implementar ese sistema: mensajes claros, contenido que educa y procesos
                comerciales que convierten sin fricción. No son tácticas pasajeras, es una metodología replicable que
                demuestra resultados medibles y sostenibles.
              </p>
            </div>
            <div
              className={`order-1 md:order-2 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 blur-0" : "opacity-0 blur-sm"
              }`}
            >
              <div className="relative">
                <img
                  src="/professional-business-founder-portrait-in-suit.jpg"
                  alt="Juan Pablo Acosta"
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
