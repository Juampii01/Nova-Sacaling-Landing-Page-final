import { Instagram, Youtube, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="font-serif text-2xl font-bold text-foreground">Nova Scaling</div>

          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com/juampiiacosta_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@juampiiacosta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors"
              aria-label="Calendly"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Nova Scaling. Todos los derechos reservados. |<span className="ml-2">Términos y condiciones</span> |
            <span className="ml-2">Política de privacidad</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
