import {Label} from "@/components/ui/label"
import {Slider} from "@/components/ui/slider"

import {useConfig} from "@/lib/useConfig"
import {cn} from "@/lib/utils"

export function SpacingPicker() {
  const [config, setConfig] = useConfig()

  return (
    <div className="space-y-1.5">
      <Label>Spacing</Label>
      <div className="flex gap-2">
        <Slider
          value={[config.spacing]}
          min={0.6}
          max={1.4}
          step={0.1}
          className={cn("w-[60%]")}
          onValueChange={(value) => {
            setConfig({
              ...config,
              spacing: value[0],
            })
          }}
        />
      </div>
    </div>
  )
}
