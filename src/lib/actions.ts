"use server"

import {redirect} from "next/navigation"
import {Stripe} from "stripe"
import {getBaseUrl} from "./utils"
import sharp from "sharp"
import {unstable_cache} from "next/cache"
import {enrichHash} from "./hash"
import {kv} from "@vercel/kv"
import {init} from "@paralleldrive/cuid2"
import {productSchema} from "./validation"
import {z} from "zod"

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

  const returnUrl = `${getBaseUrl()}/create?form=${enrichHash(hash, {
    stripeAccountId: account.id,
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
  return unstable_cache(
    async () => {
      const stripe = createStripe()
      const result = await stripe.accounts.retrieve(stripeAccountId)
      const {settings, business_profile} = result
      let logoSrc = ""

      try {
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
      } catch (error) {
        console.error('No logo found for account "' + stripeAccountId + '"')
      }

      return {
        logoSrc,
        name: result.settings?.dashboard.display_name || business_profile?.name,
        primaryColor: settings?.branding.primary_color,
        secondaryColor: settings?.branding.secondary_color,
      }
    },
    [],
    {
      tags: ["branding", stripeAccountId],
      revalidate: false,
    }
  )()
}

const createId = init({
  length: 6,
})

export async function saveProduct(values: z.infer<typeof productSchema>) {
  const id = createId()
  await kv.set<z.infer<typeof productSchema>>(id, values, {
    ex: 60 * 60 * 24 * 365 * 10, // 10 years
  })

  return {id}
}

export async function getProduct(id: string) {
  const data = await kv.get<z.infer<typeof productSchema>>(id)

  return data
}
