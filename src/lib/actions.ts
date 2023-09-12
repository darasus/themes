"use server"

import {redirect} from "next/navigation"
import {Stripe} from "stripe"
import {getBaseUrl} from "./utils"
import {enrichHash} from "./parseHash"

function createStripe(stripeAccountId?: string) {
  return new Stripe(process.env.STRIPE_API_SECRET!, {
    apiVersion: "2023-08-16",
    stripeAccount: stripeAccountId,
  })
}

interface LinkStripeAccountArgs {
  hash: string | undefined
}

export async function linkStripeAccount({hash}: LinkStripeAccountArgs) {
  const stripe = createStripe()

  const account = await stripe.accounts.create({
    type: "standard",
  })

  const returnUrl = `${getBaseUrl()}/#${enrichHash(hash, {
    stripeAccountId: account.id,
    capabilities: {
      card_payments: {requested: true},
      transfers: {requested: true},
    },
  })}`

  console.log({returnUrl})

  const accountLink = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: returnUrl,
    return_url: returnUrl,
    type: "account_onboarding",
  })

  redirect(accountLink.url)
}

interface BuyArgs {
  amount: number
  stripeAccountId: string
  currency: "USD" | "EUR" | "GBP"
}

export async function createPaymentIntent({
  amount,
  stripeAccountId,
  currency,
}: BuyArgs) {
  const stripe = createStripe()

  const {id, client_secret} = await stripe.paymentIntents.create(
    {
      amount,
      currency: currency.toLowerCase(),
      automatic_payment_methods: {
        enabled: true,
      },
    },
    {
      stripeAccount: stripeAccountId,
    }
  )

  return {paymentIntentId: id, clientSecret: client_secret}
}
