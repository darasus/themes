import "./global.css"

import {ThemeProvider} from "@/components/theme-provider"
import type {Metadata} from "next"
import {bodyFont} from "@/lib/fonts"
import {Footer} from "@/components/footer"
import {ThemeWrapper} from "@/components/theme-wrapper"
import {ThemeSwitcher} from "@/components/theme-switcher"

export const metadata: Metadata = {
  title: "Themes",
  description: "Tailwind themes",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bodyFont.className}>
        <ThemeProvider>
          <ThemeWrapper>
            <div className="min-h-screen flex flex-col">
              <div className="flex flex-col grow p-6">{children}</div>
              <Footer />
            </div>
          </ThemeWrapper>
        </ThemeProvider>
        <ThemeSwitcher />
      </body>
    </html>
  )
}
