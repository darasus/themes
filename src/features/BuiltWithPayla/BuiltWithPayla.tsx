import {logoFont} from "@/lib/fonts"
import {cn, getBaseUrl} from "@/lib/utils"

export function BuiltWithPayla() {
  return (
    <div className="text-base text-muted-foreground text-center">
      Built with{" "}
      <a href={getBaseUrl()} className={cn("underline", logoFont.className)}>
        Payla
      </a>
    </div>
  )
}
