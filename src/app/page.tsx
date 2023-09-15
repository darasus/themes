"use client"

import {Button} from "@/components/ui/button"
import {Logo} from "@/features/Logo/Logo"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center gap-6 h-screen px-4">
        <Logo />
        <span className="text-xl font-medium text-center">
          Simplest and quickest way to sell online. It literally takes{" "}
          <span className="underline">seconds</span>.
          <span className="text-muted">*</span>
        </span>
        <Button size="lg" asChild>
          <Link href={"/create"}>Start selling</Link>
        </Button>
        <span className="text-muted">
          * if you already have Stripe account.
        </span>
      </main>
    </>
  )
}
