"use client"

import * as React from "react"
import {useSelectedLayoutSegment} from "next/navigation"
import {useConfig} from "@/lib/useConfig"

export function ThemeSwitcher() {
  const [config] = useConfig()
  const segment = useSelectedLayoutSegment()

  React.useEffect(() => {
    document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className)
      }
    })

    if (config.theme) {
      return document.body.classList.add(`theme-${config.theme}`)
    }
  }, [segment, config])

  return null
}
