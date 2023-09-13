"use server"

import {redirect} from "next/navigation"
import {Stripe} from "stripe"
import {getBaseUrl} from "./utils"
import {enrichHash} from "./parseHash"
import sharp from "sharp"

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

export async function fetchBranding(stripeAccountId: string) {
  const stripe = createStripe()
  const result = await stripe.accounts.retrieve(stripeAccountId)
  const {settings, business_profile} = result
  let logoSrc = ""

  if (typeof settings?.branding.icon === "string") {
    const result = await stripe.fileLinks.create({
      file: settings.branding.icon,
    })

    if (result.url) {
      const response = await fetch(result.url)
      const buffer = await response.arrayBuffer()
      const srcBase64 = await sharp(buffer).resize(100).webp().toBuffer()
      const imageSrcBase64 =
        "data:image/png;base64," + srcBase64.toString("base64")
      logoSrc = imageSrcBase64
    }
  }

  return {
    logoSrc,
    name: result.settings?.dashboard.display_name || business_profile?.name,
    primaryColor: settings?.branding.primary_color,
    secondaryColor: settings?.branding.secondary_color,
  }
}
