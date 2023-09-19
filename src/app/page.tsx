import {Button} from "@/components/ui/button"
import {Logo} from "@/features/Logo/Logo"
import dynamic from "next/dynamic"
import Link from "next/link"
import {Suspense} from "react"

const DynamicPlayer = dynamic(() => import("../components/video"), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center gap-6 h-screen px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 max-w-6xl">
          <div className="flex flex-col items-center justify-center md:items-start col-span-6 gap-4">
            <div className="flex items-center border rounded-full bg-muted dark:bg-muted/20 px-4 py-1 text-xs gap-1 mb-2">
              Powered by <span className="font-bold">Stripe</span>
            </div>
            <Logo className="mb-4" />
            <span className="text-xl mb-4 text-center md:text-left">
              Simplest and quickest way to sell online. It literally takes{" "}
              <span className="underline">seconds</span>.
              <span className="text-gray-600">*</span>
            </span>
            <Button size="lg" asChild>
              <Link href={"/create"}>Start selling</Link>
            </Button>
            <span className="text-gray-600">
              * if you already have Stripe account.
            </span>
          </div>
          <div className="col-span-6">
            <Suspense>
              <div className="flex justify-center w-full card rounded-lg overflow-hidden border">
                <DynamicPlayer />
              </div>
            </Suspense>
          </div>
        </div>
      </main>
    </>
  )
}
