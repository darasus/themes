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
  title: z.string().optional(),
  description: z.string().optional(),
  imageSrc: z.string().optional(),
  amount: z.string().optional(),
  currency: z.enum(["USD", "EUR", "GBP"]).optional(),
  stripeAccountId: z.string().optional(),
  successMessage: z.string().optional(),
})
