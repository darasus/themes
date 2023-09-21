import {Button} from "@/components/ui/button"
import Link from "next/link"
import {useCopyToClipboard} from "usehooks-ts"

interface Props {
  url: string
}

export function UrlToast({url}: Props) {
  const [copied, copy] = useCopyToClipboard()

  return (
    <div className="flex items-center w-full">
      <div className="truncate grow">
        <Link href={url} className="underline" target="_blank">
          {url.replace("https://", "").replace("http://", "")}
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <Button
          onClick={() => {
            copy(url)
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  )
}
