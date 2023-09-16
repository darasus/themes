"use client"

import {Button} from "@/components/ui/button"
import {Currency} from "@/types"
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {Checkout} from "../Checkout/Checkout"
import {formatCents} from "@/lib/formatCents"

interface Props {
  amount: string
  stripeAccountId: string
  currency: Currency
  productId: string
}

export function BuyButton({
  amount,
  currency,
  stripeAccountId,
  productId,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">{`Buy for ${formatCents(
          Number(amount) * 100,
          currency
        )}`}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
          <DialogDescription>
            {`Make changes to your profile here. Click save when you're done.`}
          </DialogDescription>
        </DialogHeader>
        <Checkout
          productId={productId}
          amount={Number(amount) * 100}
          currency={currency}
          stripeAccountId={stripeAccountId}
        />
      </DialogContent>
    </Dialog>
  )
}
