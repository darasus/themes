import {logoFont} from "@/lib/fonts"
import {cn, getBaseUrl} from "@/lib/utils"
import Link from "next/link"

interface Props {
  className?: string
}

export function Logo({className}: Props) {
  return (
    <Link href={getBaseUrl()} className={cn(logoFont.className, className)}>
      TTT
    </Link>
  )
}

export function LogoView({className}: Props) {
  return <span className={cn(logoFont.className, className)}>TTT</span>
}
