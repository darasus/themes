import {hashSchema} from "./validation"
import {z} from "zod"

let crypto: Crypto

if (typeof window !== "undefined" && window.crypto) {
  crypto = window.crypto
} else {
  crypto = require("crypto").webcrypto
}

export function encode(input: string): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(input).toString("base64")
  }

  if (typeof btoa !== "undefined") {
    return btoa(input)
  }

  return ""
}

export function decode(input: string): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(decodeURIComponent(input), "base64").toString()
  }

  if (typeof atob !== "undefined") {
    return atob(decodeURIComponent(input))
  }

  return ""
}

const query = z.object({
  state: z.object({
    values: hashSchema,
  }),
})

export function parseHash(hashValue: string | undefined | null) {
  if (!hashValue) {
    return null
  }

  try {
    return query.parse({
      title: "",
      description: "",
      amount: "0",
      currency: "USD",
      stripeAccountId: "",
      imageSrc: "",
      ...JSON.parse(decode(hashValue)),
    })
  } catch (error) {
    return null
  }
}

export function enrichHash(
  hash: string | undefined,
  data: Record<string, unknown>
) {
  if (!hash) {
    return encode(JSON.stringify(data))
  }

  let decodedHash = parseHash(hash)
  decodedHash?.state.values

  return encode(
    JSON.stringify({
      ...decodedHash,
      state: {
        ...decodedHash?.state,
        values: {
          ...decodedHash?.state.values,
          ...data,
        },
      },
    })
  )
}
