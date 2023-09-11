let crypto: Crypto

if (typeof window !== "undefined" && window.crypto) {
  crypto = window.crypto
} else {
  crypto = require("crypto").webcrypto
}

function encode(input: string): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(input).toString("base64")
  }

  if (typeof btoa !== "undefined") {
    return btoa(input)
  }

  return ""
}

function decode(input: string): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(decodeURIComponent(input), "base64").toString()
  }

  if (typeof atob !== "undefined") {
    return atob(decodeURIComponent(input))
  }

  return ""
}

export const hash = {
  encode,
  decode,
}
