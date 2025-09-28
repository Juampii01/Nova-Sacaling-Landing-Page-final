"use client"

import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight * 0.4) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      className={`fixed bottom-8 right-8 z-50 p-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
      onClick={scrollToTop}
      aria-label="Volver arriba"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  )
}
