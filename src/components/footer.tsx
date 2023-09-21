"use client"

import {useTheme} from "next-themes"
import {Button} from "./ui/button"
import {Laptop, Moon, Sun} from "lucide-react"
import Link from "next/link"

export function Footer() {
  const {setTheme} = useTheme()

  return (
    <div className="w-full max-w-6xl m-auto flex items-center py-2 px-6 text-sm">
      <span>
        <Link href="/" className="underline">
          Payla
        </Link>
        {" · "}
        <Link href="/faq" className="underline">
          FAQ
        </Link>
        {" · "}Built by{" "}
        <a
          href="https://twitter.com/darasus_"
          target="_blank"
          className="underline"
        >
          Darasus
        </a>{" "}
      </span>
      <div className="grow" />
      <div className="flex items-center gap-2">
        <Button
          onClick={() => setTheme("dark")}
          size="icon"
          className="h-auto w-auto p-1 gap-0"
          variant="outline"
        >
          <Moon className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => setTheme("light")}
          size="icon"
          className="h-auto w-auto p-1 gap-0"
          variant="outline"
        >
          <Sun className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => setTheme("system")}
          size="icon"
          className="h-auto w-auto p-1 gap-0"
          variant="outline"
        >
          <Laptop className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
