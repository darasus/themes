import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import {cn} from "@/lib/utils"
import Link from "next/link"
import {useCopyToClipboard} from "usehooks-ts"

interface Props {
  url: string
}

export function UrlToast({url}: Props) {
  const [copied, copy] = useCopyToClipboard()

  return (
    <div
      className={cn(
        "w-lg pointer-events-auto ring-1 ring-black ring-opacity-5"
      )}
    >
      <Card className="flex items-center gap-4 p-4 w-full">
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
      </Card>
    </div>
  )
}
