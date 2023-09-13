import {productSchema} from "./validation"
import {decode, encode} from "../lib/hash"

export function parseHash(hashValue: string | undefined) {
  if (!hashValue) {
    return null
  }

  if (hashValue.startsWith("#")) {
    hashValue.replace("#", "")
  }

  return productSchema.parse({
    title: "",
    description: "",
    amount: "0",
    currency: "USD",
    stripeAccountId: "",
    ...JSON.parse(decode(hashValue)),
  })
}

export function enrichHash(
  hash: string | undefined,
  data: Record<string, unknown>
) {
  if (!hash) {
    return encode(JSON.stringify(data))
  }

  const decodedHash = JSON.parse(decode(hash))

  return encode(JSON.stringify({...decodedHash, ...data}))
}
