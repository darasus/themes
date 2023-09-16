import {z} from "zod"
import {productSchema} from "@/lib/validation"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {BuyButton} from "../BuyButton/BuyButton"
import Image from "next/image"

interface Props {
  product: z.infer<typeof productSchema>
}

export function Product({product}: Props) {
  return (
    <Card>
      <CardHeader className="items-start">
        {product.imageSrc && (
          <div className="relative w-full aspect-square overflow-hidden mb-2">
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
        <BuyButton
          amount={product.amount}
          currency={product.currency}
          stripeAccountId={product.stripeAccountId}
        />
      </CardContent>
    </Card>
  )
}
