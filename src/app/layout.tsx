import {ThemeProvider} from "@/components/theme-provider"
import "./global.css"
import type {Metadata} from "next"
import {bodyFont} from "@/lib/fonts"

export const metadata: Metadata = {
  title: "Payla",
  description: "Simplest and quickest way to sell online",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bodyFont.className}>
        <ThemeProvider>
          <div className="p-4">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
