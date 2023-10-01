"use client"

import * as React from "react"
import {ResetIcon} from "@radix-ui/react-icons"
import {useTheme} from "next-themes"
import {useConfig} from "@/lib/useConfig"
import {Button} from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import {PrimaryColorPicker} from "./PrimaryColorPicker"
import {RadiusPicker} from "./RadiusPicker"
import {ModePicker} from "./ModePicker"
import {FontPicker} from "./FontPicker"

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
          Personalize theme with your colors, radius, font and spacing.
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
      <div>
        <PrimaryColorPicker />
      </div>
      <div>
        <RadiusPicker />
      </div>
      <div>
        <ModePicker />
      </div>
      <div>
        <FontPicker />
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
