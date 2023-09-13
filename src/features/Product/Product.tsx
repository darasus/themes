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
import {BuyButton} from "../BuyButton/BuyButton"

interface Props {
  product: z.infer<typeof productSchema>
}

export function Product({product}: Props) {
  return (
    <Card>
      <CardHeader className="items-start">
        {/* <div className="relative w-full aspect-square overflow-hidden mb-2">
          <Image
            src={
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3484&q=80"
            }
            alt={`Picture of ${product.title}`}
            fill
            style={{
              objectFit: "cover",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div> */}
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
