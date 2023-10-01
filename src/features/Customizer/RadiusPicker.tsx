import {Button} from "@/components/ui/button"
import {Label} from "@/components/ui/label"
import {useConfig} from "@/lib/useConfig"
import {cn} from "@/lib/utils"

export function RadiusPicker() {
  const [config, setConfig] = useConfig()

  return (
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
  )
}
