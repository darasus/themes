import {cn} from "@/lib/utils"

interface Props {
  children: React.ReactNode
  className?: string
}

export function UiSection({children, className}: Props) {
  return (
    <section
      className={cn(
        "flex items-center justify-center grow border rounded-lg bg-muted/20 dotted-bg py-10 px-6",
        className
      )}
    >
      <div className="flex items-center justify-center max-w-md w-full h-full">
        {children}
      </div>
    </section>
  )
}
