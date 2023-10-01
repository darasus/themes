import {Label} from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {fonts} from "@/lib/fonts"
import {useConfig} from "@/lib/useConfig"
import {SelectViewport} from "@radix-ui/react-select"

export function FontPicker() {
  const [config, setConfig] = useConfig()

  return (
    <div className="space-y-1.5">
      <Label>Font</Label>
      <div className="flex gap-2">
        <Select
          onValueChange={(value: keyof typeof fonts) => {
            setConfig({
              ...config,
              font: value,
            })
          }}
          defaultValue={config.font}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select font" />
          </SelectTrigger>
          <SelectContent>
            <SelectViewport className="max-h-[300px]">
              <SelectGroup>
                {Object.keys(fonts).map((font) => (
                  <SelectItem key={font} value={font}>
                    {font}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectViewport>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
