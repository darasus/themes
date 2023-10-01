import {Button} from "@/components/ui/button"
import {Label} from "@/components/ui/label"
import {themes} from "@/lib/themes"
import {useConfig} from "@/lib/useConfig"
import {cn} from "@/lib/utils"
import {CheckCircle2Icon} from "lucide-react"
import {useTheme} from "next-themes"

export function PrimaryColorPicker() {
  const {resolvedTheme: mode} = useTheme()
  const [config, setConfig] = useConfig()

  return (
    <div className="space-y-1.5">
      <Label>Primary color</Label>
      <div className="grid grid-cols-4 gap-2">
        {themes.map((theme) => {
          const isActive = config.theme === theme.name

          return (
            <div className={cn(`theme-${theme.name}`, {dark: mode === "dark"})}>
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
                  "relative flex justify-start",
                  "h-full w-full min-w-[100px]",
                  "px-3 py-5",
                  "bg-gradient-to-br from-primary to-primary/60",
                  "bg-transparent",
                  "text-primary-foreground"
                )}
              >
                {theme.label}
                {isActive && (
                  <CheckCircle2Icon className="absolute right-2 top-2 h-4 w-4 text-primary-foreground" />
                )}
              </Button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
