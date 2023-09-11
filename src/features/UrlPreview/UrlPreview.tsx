interface Props {
  url: string
}

export function UrlPreview({url}: Props) {
  return (
    <div className="border rounded-lg bg-muted p-4 truncate">
      <a href={url} className="underline">
        {url}
      </a>
    </div>
  )
}
