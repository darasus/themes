"use client"

import {Logo} from "@/features/Logo/Logo"
import {ProductForm} from "@/features/ProductForm/ProductForm"
import {UrlPreview} from "@/features/UrlPreview/UrlPreview"
import {parseHash} from "@/lib/parseHash"
import {getBaseUrl} from "@/lib/utils"
import {useEffect, useState} from "react"

export default function Home() {
  const [value, setValue] = useState<string>("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.hash = btoa(value)
    }
  }, [value])

  return (
    <>
      <header className="flex flex-col items-center gap-6 py-10">
        <Logo />
        <span className="text-xl font-semibold">
          Simplest and quickest way to sell online
        </span>
      </header>
      <main className="p-4">
        <div className="flex flex-col gap-4 max-w-lg m-auto">
          <ProductForm
            defaultValue={
              typeof window !== "undefined"
                ? parseHash(window.location.hash)
                : undefined
            }
            onUpdate={(value) => {
              setValue(value)
            }}
          />
          <UrlPreview url={`${getBaseUrl()}/${btoa(value)}`} />
        </div>
      </main>
    </>
  )
}
