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
  paymentIntentId: string
  clientSecret: string
  amount: number
}

export function CheckoutForm({paymentIntentId, clientSecret, amount}: Props) {
  const stripe = useStripe()
  const elements = useElements()
  const {error, handleSubmit, isLoading} = useConfirmPayment()

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-2"
    >
      <LinkAuthenticationElement />
      <div className="border-b" />
      <AddressElement
        options={{
          mode: "shipping",
          autocomplete: {
            mode: "automatic",
          },
        }}
      />
      <PaymentElement id="payment-element" />
      <Button
        className="w-full mt-2"
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
      </Button>
      {error && <div id="payment-message">{error}</div>}
    </form>
  )
}
