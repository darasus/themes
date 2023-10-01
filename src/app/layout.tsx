import "./global.css"

import {ThemeProvider} from "@/components/theme-provider"
import type {Metadata} from "next"
import {bodyFont} from "@/lib/fonts"
import {Footer} from "@/components/Footer"
import {ThemeWrapper} from "@/components/ThemeWrapper"
import {ThemeSwitcher} from "@/components/theme-switcher"
import {Header} from "@/components/Header"
import {CustomizerFloatingMenu} from "@/features/Customizer/CustomizerFloatingMenu"

export const metadata: Metadata = {
  title: "The Tailwind Theme",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bodyFont.className}>
        <ThemeProvider>
          <ThemeWrapper>
            <div className="flex min-h-screen flex-col gap-6 p-6">
              <Header />
              <div className="flex grow flex-col">{children}</div>
              <Footer />
            </div>
            <CustomizerFloatingMenu />
          </ThemeWrapper>
        </ThemeProvider>
        <ThemeSwitcher />
      </body>
    </html>
  )
}
