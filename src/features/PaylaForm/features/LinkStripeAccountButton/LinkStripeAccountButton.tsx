import {Button} from "@/components/ui/button"
import {linkStripeAccount} from "@/lib/actions"

export function LinkStripeAccountButton() {
  return (
    <Button
      onClick={async () => {
        linkStripeAccount({
          hash:
            typeof window !== "undefined" ? window.location.hash : undefined,
        })
      }}
      className="shrink-0"
    >
      Link Stripe account
    </Button>
  )
}
