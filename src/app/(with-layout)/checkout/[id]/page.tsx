import {Checkout} from "@/features/Checkout/Checkout"
import {getProduct} from "@/lib/actions"
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
    <Checkout
      amount={Number(amount) * 100}
      currency={currency}
      productId={params.id}
      stripeAccountId={stripeAccountId}
    />
  )
}
