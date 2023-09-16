import {Button} from "@/components/ui/button"
import {linkStripeAccount} from "@/lib/actions"
import {parseHash} from "@/lib/hash"
import {useState} from "react"

interface Props {
  hash: string
  unlink: () => void
}

export function LinkStripeAccountButton({hash, unlink}: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const product = parseHash(hash)?.state.values

  if (product?.stripeAccountId) {
    return (
      <Button
        onClick={(e) => {
          e.preventDefault()
          unlink()
        }}
        className="shrink-0"
        variant={"destructive"}
        type="button"
      >
        Unlink Stripe account
      </Button>
    )
  }

  return (
    <Button
      onClick={async (e) => {
        try {
          e.preventDefault()
          setIsLoading(true)
          await linkStripeAccount({
            hash,
          })
          setIsLoading(false)
        } catch (error) {
        } finally {
          setIsLoading(false)
        }
      }}
      className="shrink-0"
      disabled={isLoading}
      type="button"
    >
      {isLoading ? "Loading..." : `Link Stripe account`}
    </Button>
  )
}
