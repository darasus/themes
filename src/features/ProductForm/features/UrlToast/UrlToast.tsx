import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card"
import Link from "next/link"
import {useCopyToClipboard} from "usehooks-ts"

interface Props {
  url: string
}

export function UrlToast({url}: Props) {
  const [copied, copy] = useCopyToClipboard()

  return (
    <Card className="flex items-center gap-4 p-4">
      <div className="truncate grow">
        <Link href={url} className="underline" target="_blank">
          {url.replace("https://", "").replace("http://", "")}
        </Link>
      </div>
      <Button
        onClick={() => {
          copy(url)
        }}
        size="sm"
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
    </Card>
  )
}
