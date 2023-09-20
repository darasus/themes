import {z} from "zod"
import {hashSchema} from "@/lib/validation"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {formatCents} from "@/lib/formatCents"
import Link from "next/link"
import {proseClassName} from "../Editor/constants"
import {renderToHTML} from "../Editor/editor/renderToHTML"
import {ProductImage} from "./ProductImage"

interface Props {
  product: z.infer<typeof hashSchema>
  productId: string
}

export async function Product({product, productId}: Props) {
  return (
    <Card>
      <CardHeader className="items-start">
        <ProductImage product={product} />
        <CardTitle className="leading-tight">{product.title}</CardTitle>
        {product.description && (
          <CardDescription>
            <span
              className={proseClassName}
              dangerouslySetInnerHTML={{
                __html: renderToHTML(JSON.parse(product.description)),
              }}
            />
          </CardDescription>
        )}
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
