import {logoFont} from "@/lib/fonts"
import {cn} from "@/lib/utils"

export default function Home() {
  return (
    <div className="flex flex-col py-40 text-center">
      <div className="mb-6">
        <h1
          className={cn(
            logoFont.className,
            "text-8xl",
            "inline-block bg-gradient-to-br from-primary/10 via-primary to-primary/90 bg-clip-text text-transparent"
          )}
        >
          The Tailwind Theme
        </h1>
      </div>
      <span className="text-2xl">
        The ultimate NextJS theme built with Tailwind, shadcn/ui, Radix.
      </span>
    </div>
  )
}
