"use client"

import {
  PaymentElement,
  useStripe,
  useElements,
  LinkAuthenticationElement,
  AddressElement,
} from "@stripe/react-stripe-js"
import {Button} from "@/components/ui/button"
import {useConfirmPayment} from "./hooks/useConfirmPayment"

interface Props {
  productId: string
}

export function CheckoutForm({productId}: Props) {
  const stripe = useStripe()
  const elements = useElements()
  const {handleSubmit, isLoading, error} = useConfirmPayment({productId})

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-2"
    >
      <LinkAuthenticationElement />
      <div className="border-b my-4" />
      <AddressElement
        options={{
          mode: "shipping",
          autocomplete: {
            mode: "automatic",
          },
        }}
      />
      <div className="border-b my-4" />
      <PaymentElement id="payment-element" />
      <Button
        className="w-full mt-2"
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        {isLoading ? "Paying..." : "Pay now"}
      </Button>
      {error && <div id="payment-message">{error}</div>}
    </form>
  )
}
