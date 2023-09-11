import {z} from "zod"

export const productSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.string(),
  currency: z.enum(["USD", "EUR", "GBP"]),
})
