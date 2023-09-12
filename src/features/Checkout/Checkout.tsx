"use client"

import {Button} from "@/components/ui/button"
import {createPaymentIntent} from "@/lib/actions"
import {Currency} from "@/types"
import {useEffect, useState} from "react"
import {CheckoutForm} from "../Checkout/CheckoutForm"
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe, Stripe} from "@stripe/stripe-js"

interface Props {
  amount: number
  stripeAccountId: string
  currency: Currency
}

export function Checkout(props: Props) {
  const [stripe, setStripe] = useState<Stripe | null>(null)
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [paymentIntentId, setPaymentIntentId] = useState<string | null>(null)

  const isLoading = !stripe || !clientSecret || !paymentIntentId

  useEffect(() => {
    createPaymentIntent(props).then(({paymentIntentId, clientSecret}) => {
      setClientSecret(clientSecret)
      setPaymentIntentId(paymentIntentId)
    })

    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!, {
      stripeAccount: props.stripeAccountId,
    }).then((stripe) => {
      if (stripe) {
        setStripe(stripe)
      }
    })
  }, [props])

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {paymentIntentId && clientSecret && stripe && (
        <Elements
          options={{
            clientSecret,
            appearance: {
              theme: "stripe",
              labels: "floating",
            },
          }}
          stripe={stripe}
        >
          <CheckoutForm
            paymentIntentId={paymentIntentId}
            clientSecret={clientSecret}
            amount={Number(props.amount) * 100}
          />
        </Elements>
      )}
    </>
  )
}
