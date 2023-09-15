import {Button} from "@/components/ui/button"
import {linkStripeAccount} from "@/lib/actions"

interface Props {
  hash: string
}

export function LinkStripeAccountButton({hash}: Props) {
  return (
    <Button
      onClick={async () => {
        await linkStripeAccount({
          hash,
        })
      }}
      className="shrink-0"
    >
      Link Stripe account
    </Button>
  )
}
