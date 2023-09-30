import {cn} from "@/lib/utils"

interface Props {
  children: React.ReactNode
  className?: string
  verticalCenter?: boolean
  horizontalCenter?: boolean
}

export function ComponentPreview({
  children,
  className,
  horizontalCenter,
  verticalCenter,
}: Props) {
  return (
    <section
      className={cn(
        "dotted-bg",
        {flex: horizontalCenter || verticalCenter},
        {"items-center": verticalCenter},
        {"justify-center": horizontalCenter},
        "rounded-lg border bg-muted/10 px-6 py-10",
        className
      )}
    >
      {children}
    </section>
  )
}
