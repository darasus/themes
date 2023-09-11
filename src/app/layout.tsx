import {ThemeProvider} from "@/components/theme-provider"
import "./global.css"
import type {Metadata} from "next"
import {Inter} from "next/font/google"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Payla",
  description: "Simplest and quickest way to sell online",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="p-4">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
