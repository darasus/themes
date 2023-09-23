import {cn} from "@/lib/utils"

interface Props {
  children: React.ReactNode
  className?: string
}

export function UiSection({children, className}: Props) {
  return (
    <section
      className={cn(
        "flex items-center justify-center border w-fill py-10 rounded-lg bg-muted dotted-bg",
        className
      )}
    >
      <div className="max-w-md w-full">{children}</div>
    </section>
  )
}
