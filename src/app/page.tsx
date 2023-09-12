"use client"

import {PaylaForm} from "@/features/PaylaForm/PaylaForm"
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
    <main className="p-4">
      <div className="flex flex-col gap-4">
        <PaylaForm
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
  )
}
