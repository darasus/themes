import {cn, getBaseUrl} from "@/lib/utils"
import Link from "next/link"
import {Abril_Fatface} from "next/font/google"

const logoFont = Abril_Fatface({subsets: ["latin"], weight: ["400"]})

export function Logo() {
  return (
    <Link href={getBaseUrl()} className={cn(logoFont.className, "text-7xl")}>
      Payla
    </Link>
  )
}
