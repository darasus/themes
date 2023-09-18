import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Checkout} from "@/features/Checkout/Checkout"
import {getProduct} from "@/lib/actions"
import {formatCents} from "@/lib/formatCents"
import Image from "next/image"
import {notFound} from "next/navigation"

export default async function CheckoutPage({
  params,
}: {
  params: {
    id: string | undefined
  }
}) {
  if (!params.id) {
    notFound()
  }

  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  const {amount, currency, stripeAccountId} = product

  return (
    <div className="flex flex-col gap-4">
      <Card className="flex gap-5 p-6">
        {product.imageSrc && (
          <div className="relative w-20 aspect-square overflow-hidden mb-2 rounded-lg">
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
        <div className="flex flex-col">
          <span>{product.title}</span>
          <span className="font-bold">
            {formatCents(Number(product.amount) * 100)}
          </span>
        </div>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
        </CardHeader>
        <CardContent>
          <Checkout
            amount={Number(amount) * 100}
            currency={currency}
            productId={params.id}
            stripeAccountId={stripeAccountId}
          />
        </CardContent>
      </Card>
    </div>
  )
}
