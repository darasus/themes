import {z} from "zod"

export const productSchema = z.object({
  title: z.string(),
  description: z.string(),
  imageSrc: z.string(),
  amount: z.string(),
  currency: z.enum(["USD", "EUR", "GBP"]),
  stripeAccountId: z.string(),
})
