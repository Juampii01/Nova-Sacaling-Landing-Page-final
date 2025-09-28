"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useEffect, useRef, useState } from "react"

export function FAQSection() {
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

  const faqs = [
    {
      question: "¿Necesito muchos seguidores para empezar?",
      answer:
        "No. La cantidad de seguidores no determina el éxito. Trabajamos en construir una audiencia calificada y comprometida, no en números vanidosos. Muchos de nuestros clientes han escalado significativamente con audiencias pequeñas pero muy específicas.",
    },
    {
      question: "¿Funciona sin experiencia previa en ads?",
      answer:
        "Sí. Nuestro enfoque principal no depende de publicidad paga. Construimos autoridad orgánica y sistemas de referidos. Si decidimos incorporar ads, te acompañamos en todo el proceso con estrategias probadas.",
    },
    {
      question: "¿Cuándo empiezo a ver resultados?",
      answer:
        "Los primeros cambios en posicionamiento y claridad de mensaje los verás en las primeras 2-3 semanas. Los primeros leads calificados suelen llegar entre el mes 1 y 2. El sistema completo optimizado funciona típicamente hacia el mes 3.",
    },
    {
      question: "¿En qué se diferencia de una agencia tradicional?",
      answer:
        "No somos una agencia que ejecuta por vos. Somos consultores estratégicos que te acompañamos a implementar. Te enseñamos el sistema para que puedas mantenerlo y escalarlo. El conocimiento queda en tu negocio, no dependés de nosotros para siempre.",
    },
    {
      question: "¿Qué pasa si mi nicho es muy específico?",
      answer:
        "Mejor. Los nichos específicos son más fáciles de dominar. Hemos trabajado con consultores en industrias muy particulares y el sistema se adapta perfectamente. La especificidad es una ventaja, no un obstáculo.",
    },
    {
      question: "¿Incluye el acompañamiento personalizado?",
      answer:
        "Sí. Trabajamos 1:1 contigo durante todo el proceso. No es un curso grabado ni un programa grupal masivo. Cada estrategia se adapta a tu negocio específico con acompañamiento directo y personalizado.",
    },
  ]

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Preguntas frecuentes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Resolvemos las dudas más comunes sobre nuestro sistema y metodología.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-secondary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:text-secondary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
