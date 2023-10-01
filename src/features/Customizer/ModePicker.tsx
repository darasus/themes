import {Button} from "@/components/ui/button"
import {Label} from "@/components/ui/label"
import {MoonIcon, SunIcon} from "lucide-react"
import {useTheme} from "next-themes"

export function ModePicker() {
  const {setTheme: setMode, resolvedTheme: mode} = useTheme()

  return (
    <div className="space-y-1.5">
      <Label>Mode</Label>
      <div className="flex gap-2">
        <Button
          variant={mode === "light" ? "default" : "outline"}
          size="icon"
          onClick={() => {
            setMode("light")
          }}
        >
          <SunIcon className="h-6 w-6" />
        </Button>
        <Button
          variant={mode === "dark" ? "default" : "outline"}
          size="icon"
          onClick={() => {
            setMode("dark")
          }}
        >
          <MoonIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
