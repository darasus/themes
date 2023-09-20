import {hashSchema} from "@/lib/validation"
import Image from "next/image"
import {z} from "zod"
import sizeOf from "image-size"
import sharp from "sharp"

interface Props {
  product: z.infer<typeof hashSchema>
}

export async function ProductImage({product}: Props) {
  if (!product.imageSrc) {
    return null
  }

  const res = await fetch(product.imageSrc)
  const buffer = await res.arrayBuffer()
  const dimensions = sizeOf(await sharp(buffer).toBuffer())

  if (!dimensions.width || !dimensions.height) {
    return null
  }

  const ratio = dimensions.width / dimensions.height
  const width = 400
  const height = width / ratio

  return (
    <>
      {product.imageSrc && (
        <div className="relative w-full overflow-hidden mb-6 rounded-lg">
          <Image
            src={product.imageSrc}
            alt={`Picture of ${product.title}`}
            width={width}
            height={height}
            priority
          />
        </div>
      )}
    </>
  )
}
