import {logoFont} from "@/lib/fonts"
import {cn, getBaseUrl} from "@/lib/utils"
import Link from "next/link"

interface Props {
  className?: string
}

export function Logo({className}: Props) {
  return (
    <Link
      href={getBaseUrl()}
      className={cn(logoFont.className, "text-7xl", className)}
    >
      Payla
    </Link>
  )
}
