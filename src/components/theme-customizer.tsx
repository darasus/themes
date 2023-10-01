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
        <Label>Color</Label>
        <div className="grid grid-cols-4 gap-2">
          {themes.map((theme) => {
            const isActive = config.theme === theme.name

            return (
              <div
                className={cn(`theme-${theme.name}`, {dark: mode === "dark"})}
              >
                <Button
                  size="sm"
                  key={theme.name}
                  onClick={() => {
                    setConfig({
                      ...config,
                      theme: theme.name,
                    })
                  }}
                  className={cn(
                    "flex justify-start",
                    "h-full w-full",
                    "px-3 py-5",
                    "bg-gradient-to-br from-primary to-primary/60",
                    "bg-transparent",
                    "text-primary-foreground"
                  )}
                >
                  {theme.label}
                  {isActive && (
                    <CheckIcon className="h-5 w-5 text-primary-foreground" />
                  )}
                </Button>
              </div>
            )
          })}
        </div>
      </div>
      <div className="space-y-1.5">
        <Label>Radius</Label>
        <div className="flex gap-4">
          {["0", "0.3", "0.5", "0.75", "1.0"].map((value) => {
            return (
              <Button
                size="sm"
                key={value}
                onClick={() => {
                  setConfig({
                    ...config,
                    radius: parseFloat(value),
                  })
                }}
                className={cn(
                  "h-auto w-auto p-0",
                  "border-2 border-none border-primary bg-transparent hover:bg-transparent"
                )}
              >
                <div
                  className={cn(
                    "h-6 w-6 border-l-2 border-t-2 bg-muted/50",
                    {
                      "rounded-tl-none": value === "0",
                      "rounded-tl-[4px]": value === "0.3",
                      "rounded-tl-[6px]": value === "0.5",
                      "rounded-tl-[8px]": value === "0.75",
                      "rounded-tl-[10px]": value === "1.0",
                    },
                    {
                      "border-primary bg-primary/30":
                        config.radius === parseFloat(value),
                    }
                  )}
                />
              </Button>
            )
          })}
        </div>
      </div>
      <div className="space-y-1.5">
        <Label>Mode</Label>
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
