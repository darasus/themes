import {z} from "zod"

export const productSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  imageSrc: z.string().optional(),
  amount: z
    .string()
    .nonempty()
    .refine((value) => {
      return isNaN(Number(value)) === false
    }),
  currency: z.enum(["USD", "EUR", "GBP"]),
  stripeAccountId: z.string().nonempty(),
  successMessage: z.string().nonempty(),
})

export const hashSchema = z.object({
  title: z.string(),
  description: z.string(),
  imageSrc: z.string(),
  amount: z.string(),
  currency: z.enum(["USD", "EUR", "GBP"]),
  stripeAccountId: z.string(),
  successMessage: z.string(),
})
