import NextImage from "next/image"
import React, {useCallback, useState} from "react"
import {useDropzone} from "react-dropzone"
import {cn} from "@/lib/utils"
import {Button} from "./ui/button"
import {upload} from "@vercel/blob/client"

interface Props {
  value: string | null | undefined
  onChange: (value: string | null) => void
}

export function FileInput({value, onChange}: Props) {
  const [isLoading, setIsLoading] = useState(false)

  const onDrop = useCallback(
    async (droppedFiles: File[]) => {
      setIsLoading(true)
      const file = droppedFiles[0]

      const newBlob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/upload-image",
      })

      onChange?.(newBlob.url)

      setIsLoading(false)
    },
    [onChange]
  )

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg", ".jpeg"],
      "image/webp": [".webp"],
      "image/gif": [".gif"],
    },
  })

  const handleRemoveImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    onChange?.(null)
    e.preventDefault()
  }

  return (
    <div
      className={cn(
        "flex flex-col relative justify-center items-center border-dashed h-48 overflow-hidden",
        "rounded-md border border-input bg-background",
        {"bg-gray-200": isDragActive}
      )}
    >
      <div {...getRootProps()} className={cn("h-full w-full")}>
        <input multiple={false} {...getInputProps()} data-testid="file-input" />

        {!isLoading && !value && (
          <div className="h-full flex flex-col justify-center items-center gap-y-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.preventDefault()
              }}
              type="button"
            >
              Select file
            </Button>
            <span className="text-sm text-center">
              or just drop image here...
            </span>
          </div>
        )}
      </div>
      {isLoading && (
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
          Loading...
        </div>
      )}
      {!isLoading && value && (
        <>
          <div className="flex items-center justify-center absolute w-full h-full ">
            <NextImage
              data-testid="file-input-image-preview"
              alt="Product image"
              src={value}
              fill
              style={{objectFit: "contain"}}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <Button
            variant="secondary"
            size="sm"
            className="absolute bottom-5 right-5 z-50"
            onClick={handleRemoveImage}
            type="button"
          >
            Remove
          </Button>
        </>
      )}
    </div>
  )
}
