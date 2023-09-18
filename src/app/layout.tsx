import "./global.css"

import {ThemeProvider} from "@/components/theme-provider"
import type {Metadata} from "next"
import {bodyFont} from "@/lib/fonts"
import {Analytics} from "@vercel/analytics/react"
import {ClientProviders} from "./client-providers"

export const metadata: Metadata = {
  title: "Payla",
  description: "Simplest and quickest way to sell online",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bodyFont.className}>
        <ThemeProvider>
          <ClientProviders>
            <div>{children}</div>
          </ClientProviders>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
