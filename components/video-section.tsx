"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="video" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Mirá esto antes de agendar</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden group">
            {isPlaying ? (
              <iframe
                title="Nova Scale Masterclass"
                src="https://www.youtube-nocookie.com/embed/zo_WUhlyWjw?autoplay=1&controls=0&rel=0&modestbranding=1&playsinline=1&disablekb=1"
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <Image
                fill
                priority
                alt="Vista previa del video de Nova Scale"
                src="/video-cover.svg"
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover pointer-events-none"
              />
            )}

            {!isPlaying && (
              <button
                type="button"
                aria-label="Reproducir video"
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 bg-black/50 px-8 text-center transition-colors group-hover:bg-black/30"
              >
                <span className="sr-only">Reproducir video</span>
                <div className="flex flex-col items-center gap-4 text-primary-foreground">
                  <div className="rounded-full bg-primary text-primary-foreground p-6 transition-transform duration-200 group-hover:scale-110">
                    <Play className="w-8 h-8 ml-1" />
                  </div>
                  <div className="flex flex-col items-center gap-2 drop-shadow-lg">
                    <p className="text-sm font-medium tracking-[0.35em] text-primary-foreground/70 uppercase">
                      Nova Scale
                    </p>
                    <h3 className="text-2xl font-semibold text-primary-foreground md:text-3xl">
                      El método detrás del crecimiento exponencial
                    </h3>
                    <p className="max-w-md text-sm text-primary-foreground/75 md:text-base">
                      Mirá la masterclass privada para entender cómo escalamos las marcas más ambiciosas.
                    </p>
                  </div>
                </div>
              </button>
            )}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-4 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg"
            >
              <a href="https://calendly.com/placeholder" target="_blank" rel="noopener noreferrer">
                Quiero mi llamada estratégica
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
