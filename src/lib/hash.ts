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
