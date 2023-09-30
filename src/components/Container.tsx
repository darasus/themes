import {cn} from "@/lib/utils"
import {forwardRef, HTMLAttributes, PropsWithChildren} from "react"

interface Props extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  size?: "xs" | "sm" | "md" | "lg" | "full"
}

export const Container = forwardRef<HTMLDivElement, Props>(function Container(
  {className, size = "md", ...props},
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "w-full mx-auto px-4 my-4",
        {
          "max-w-lg": size === "xs",
          "max-w-2xl": size === "sm",
          "max-w-5xl": size === "md",
          "max-w-7xl": size === "lg",
          "max-full": size === "full",
        },
        className
      )}
      {...props}
    />
  )
})
