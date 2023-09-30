"use client"

import {useTheme} from "next-themes"
import {Button} from "./ui/button"
import {Laptop, Moon, Sun} from "lucide-react"
import Link from "next/link"
import {Container} from "./Container"

export function Footer() {
  const {setTheme} = useTheme()

  return (
    <Container>
      <div className="flex items-center text-sm">
        <span>
          <Link href="/" className="underline">
            The Tailwind Theme
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
            className="h-auto w-auto gap-0 p-1"
            variant="outline"
          >
            <Moon className="h-4 w-4" />
          </Button>
          <Button
            onClick={() => setTheme("light")}
            size="icon"
            className="h-auto w-auto gap-0 p-1"
            variant="outline"
          >
            <Sun className="h-4 w-4" />
          </Button>
          <Button
            onClick={() => setTheme("system")}
            size="icon"
            className="h-auto w-auto gap-0 p-1"
            variant="outline"
          >
            <Laptop className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Container>
  )
}
