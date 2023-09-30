"use client"

import * as React from "react"
import {CheckIcon, MoonIcon, ResetIcon, SunIcon} from "@radix-ui/react-icons"
import {useTheme} from "next-themes"
import {cn} from "@/lib/utils"
import {useConfig} from "@/lib/useConfig"
import {Button} from "./ui/button"
import {Label} from "./ui/label"

import {themes} from "@/lib/themes"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

export function ThemeCustomizer() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customize</CardTitle>
        <CardDescription>
          Pick a style and color for your components.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Customizer />
      </CardContent>
      <CardFooter>
        <Buttons />
      </CardFooter>
    </Card>
  )
}

function Customizer() {
  const {setTheme: setMode, resolvedTheme: mode} = useTheme()
  const [config, setConfig] = useConfig()

  return (
    <div className="flex flex-1 flex-col space-y-4">
      <div className="space-y-1.5">
        <Label className="text-xs">Color</Label>
        <div className="grid grid-cols-3 gap-2">
          {themes.map((theme) => {
            const isActive = config.theme === theme.name

            return (
              <Button
                variant={"outline"}
                size="sm"
                key={theme.name}
                onClick={() => {
                  setConfig({
                    ...config,
                    theme: theme.name,
                  })
                }}
                className={cn(
                  "justify-start",
                  isActive && "border-2 border-primary"
                )}
              >
                <span
                  className={cn(
                    {dark: mode === "dark"},
                    `theme-${theme.name}`,
                    "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-primary"
                  )}
                >
                  {isActive && (
                    <CheckIcon className="h-4 w-4 text-primary-foreground" />
                  )}
                </span>
                {theme.label}
              </Button>
            )
          })}
        </div>
      </div>
      <div className="space-y-1.5">
        <Label className="text-xs">Radius</Label>
        <div className="grid grid-cols-5 gap-2">
          {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
            return (
              <Button
                variant={"outline"}
                size="sm"
                key={value}
                onClick={() => {
                  setConfig({
                    ...config,
                    radius: parseFloat(value),
                  })
                }}
                className={cn(
                  config.radius === parseFloat(value) &&
                    "border-2 border-primary"
                )}
              >
                {value}
              </Button>
            )
          })}
        </div>
      </div>
      <div className="space-y-1.5">
        <Label className="text-xs">Mode</Label>
        <div className="grid grid-cols-3 gap-2">
          <>
            <Button
              variant={"outline"}
              size="sm"
              onClick={() => setMode("light")}
              className={cn(mode === "light" && "border-2 border-primary")}
            >
              <SunIcon className="mr-1 -translate-x-1" />
              Light
            </Button>
            <Button
              variant={"outline"}
              size="sm"
              onClick={() => setMode("dark")}
              className={cn(mode === "dark" && "border-2 border-primary")}
            >
              <MoonIcon className="mr-1 -translate-x-1" />
              Dark
            </Button>
          </>
        </div>
      </div>
    </div>
  )
}

function Buttons() {
  const [config, setConfig] = useConfig()
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <div className="flex gap-4">
      <Button
        variant="secondary"
        onClick={() => {
          setConfig({
            ...config,
            theme: "zinc",
            radius: 0.5,
          })
        }}
      >
        <ResetIcon className="mr-1 -translate-x-1" />
        Reset
      </Button>
    </div>
  )
}
