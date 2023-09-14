import {logoFont} from "@/lib/fonts"
import {cn, getBaseUrl} from "@/lib/utils"
import Link from "next/link"

export function Logo() {
  return (
    <Link href={getBaseUrl()} className={cn(logoFont.className, "text-7xl")}>
      Payla
    </Link>
  )
}
