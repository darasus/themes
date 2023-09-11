import {productSchema} from "./validation"
import {hash} from "../lib/hash"

export function parseHash(hashValue: string | undefined) {
  if (!hashValue) {
    return null
  }

  if (hashValue.startsWith("#")) {
    hashValue.replace("#", "")
  }

  return productSchema.parse(JSON.parse(hash.decode(hashValue)))
}
