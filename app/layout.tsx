import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ClientLayout } from "./client-layout"

export const metadata: Metadata = {
  title: "Nova Scaling - Escalá tu negocio a $20K+ con un sistema sólido",
  description:
    "Ayudamos a coaches y consultores a atraer, nutrir y cerrar clientes high ticket con una marca personal estratégica.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
