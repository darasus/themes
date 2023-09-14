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

export function CheckoutForm() {
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
        {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
      </Button>
      {error && <div id="payment-message">{error}</div>}
    </form>
  )
}
