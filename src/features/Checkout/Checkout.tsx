"use client"

import {Button} from "@/components/ui/button"
import {createPaymentIntent} from "@/lib/actions"
import {Currency} from "@/types"
import {useEffect, useLayoutEffect, useRef, useState} from "react"
import {CheckoutForm} from "../Checkout/CheckoutForm"
import {Elements} from "@stripe/react-stripe-js"
import {Appearance, loadStripe, Stripe} from "@stripe/stripe-js"
import {useTheme} from "next-themes"

interface Props {
  amount: number
  stripeAccountId: string
  currency: Currency
}

export function Checkout(props: Props) {
  const {resolvedTheme} = useTheme()
  const root = useRef(document.documentElement)
  const [variables, setVariables] = useState<Appearance["variables"]>({})
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

  useLayoutEffect(() => {
    const radius = getComputedStyle(root.current).getPropertyValue("--radius")
    const background = getComputedStyle(root.current)
      .getPropertyValue("--background")
      .split(" ")
      .join(", ")
    const foreground = getComputedStyle(root.current)
      .getPropertyValue("--foreground")
      .split(" ")
      .join(", ")
    const primary = getComputedStyle(root.current)
      .getPropertyValue("--primary")
      .split(" ")
      .join(", ")

    setVariables((prevState) => {
      return {
        ...prevState,
        borderRadius: radius,
        colorBackground: `hsl(${background})`,
        colorText: `hsl(${foreground})`,
        colorPrimary: `hsl(${primary})`,
        fontFamily: '"Inter", sans-serif',
      }
    })
  }, [resolvedTheme])

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {paymentIntentId && clientSecret && stripe && (
        <Elements
          options={{
            clientSecret,
            appearance: {
              variables,
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
