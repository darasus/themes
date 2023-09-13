import {getBaseUrl} from "@/lib/utils"
import {useElements, useStripe} from "@stripe/react-stripe-js"
import {FormEvent, useState} from "react"

export function useConfirmPayment() {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      console.error("Stripe.js has not yet loaded.")
      return
    }

    setIsLoading(true)

    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: getBaseUrl(),
        // receipt_email: email,
        // shipping: {
        //   address: {
        //     city: "NY",
        //     line1: "123 Main St",
        //   },
        //   name: "Shipping user",
        // },
        // payment_method_data: {
        //   billing_details: {
        //     name: "Billing user",
        //   },
        // },
      },
    })

    if (error.type === "card_error" || error.type === "validation_error") {
      setError(error?.message || "")
    } else {
      setError("An unexpected error occured.")
    }

    setIsLoading(false)
  }

  return {handleSubmit, error, isLoading}
}
