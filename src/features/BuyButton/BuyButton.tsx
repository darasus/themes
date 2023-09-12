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

interface Props {
  amount: string
  stripeAccountId: string
  currency: Currency
}

export function BuyButton(props: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">Buy</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
          <DialogDescription>
            {`Make changes to your profile here. Click save when you're done.`}
          </DialogDescription>
        </DialogHeader>
        <Checkout
          amount={Number(props.amount) * 100}
          currency={props.currency}
          stripeAccountId={props.stripeAccountId}
        />
      </DialogContent>
    </Dialog>
  )
}
