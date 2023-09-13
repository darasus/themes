import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.origin
  }

  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production") {
    return "https://www.payla.link"
  }

  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "development") {
    return "http://localhost:3000"
  }

  return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
}
