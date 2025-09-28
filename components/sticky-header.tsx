"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-serif text-2xl font-bold text-foreground">Nova Scaling</div>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("metodologia")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Metodología
          </button>
          <button
            onClick={() => scrollToSection("diferenciadores")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Diferenciadores
          </button>
          <button
            onClick={() => scrollToSection("casos")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Casos
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </button>
        </nav>

        <Button
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg"
          onClick={() => window.open("https://calendly.com/placeholder", "_blank")}
        >
          Agendá tu llamada
        </Button>
      </div>
    </header>
  )
}
