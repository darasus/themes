"use client"

import {fonts} from "@/lib/fonts"
import {useConfig} from "@/lib/useConfig"
import {cn} from "@/lib/utils"

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string
}

export function ThemeWrapper({
  defaultTheme,
  children,
  className,
}: ThemeWrapperProps) {
  const [config] = useConfig()

  return (
    <div
      className={cn(
        `theme-${defaultTheme || config.theme}`,
        "w-full",
        fonts[config.font].className,
        className
      )}
      style={
        {
          "--radius": `${defaultTheme ? 0.5 : config.radius}rem`,
          "--spacing": `${config.spacing}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
