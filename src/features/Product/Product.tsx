import {z} from "zod"
import {productSchema} from "@/lib/validation"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {formatCents} from "@/lib/formatCents"
import Link from "next/link"

interface Props {
  product: z.infer<typeof productSchema>
  productId: string
}

export function Product({product, productId}: Props) {
  return (
    <Card>
      <CardHeader className="items-start">
        {product.imageSrc && (
          <div className="relative w-full aspect-square overflow-hidden mb-2 rounded-lg">
            <Image
              src={product.imageSrc}
              alt={`Picture of ${product.title}`}
              fill
              style={{
                objectFit: "cover",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full" asChild>
          <Link href={`/checkout/${productId}`}>{`Buy for ${formatCents(
            Number(product.amount) * 100,
            product.currency
          )}`}</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
