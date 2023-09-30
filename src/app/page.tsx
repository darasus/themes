import {logoFont} from "@/lib/fonts"
import {cn} from "@/lib/utils"

export default function Home() {
  return (
    <div className="flex flex-col gap-6 text-center">
      <h1 className={cn(logoFont.className, "text-9xl")}>
        The
        <br />
        Tailwind
        <br />
        Theme
      </h1>
    </div>
  )
}
