import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {BuiltWithPayla} from "@/features/BuiltWithPayla/BuiltWithPayla"
import {Product} from "@/features/Product/Product"
import {fetchBranding} from "@/lib/actions"
import {parseHash} from "@/lib/parseHash"
import Image from "next/image"

export default async function ProductPage({
  params,
}: {
  params: {
    hash: string | undefined
  }
}) {
  const product = parseHash(params.hash)

  if (!product) {
    return null
  }

  const branding = await fetchBranding(product?.stripeAccountId)

  return (
    <div>
      <div className="flex flex-col gap-4 m-auto max-w-md">
        <div className="flex items-center justify-center gap-2">
          <Avatar>
            <AvatarImage
              src={branding.logoSrc}
              alt={`Logo for ${branding.name}`}
            />
            <AvatarFallback>{branding.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-lg">{branding.name}</span>
        </div>
        <Product product={product} />
        <BuiltWithPayla />
      </div>
    </div>
  )
}
