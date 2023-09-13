import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {BuiltWithPayla} from "@/features/BuiltWithPayla/BuiltWithPayla"
import {Product} from "@/features/Product/Product"
import {fetchBranding} from "@/lib/actions"
import {parseHash} from "@/lib/parseHash"
import {notFound} from "next/navigation"

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: {
    hash: string | undefined
  }
  searchParams: {
    redirect_status: string | undefined
  }
}) {
  const isSuccess = searchParams.redirect_status === "succeeded"
  const product = parseHash(params.hash)

  if (!product) {
    notFound()
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
        {isSuccess && (
          <Card>
            <CardHeader>
              <CardTitle>Your purchase is successful!</CardTitle>
            </CardHeader>
            <CardContent>{product.description}</CardContent>
          </Card>
        )}
        {!isSuccess && <Product product={product} />}
        <BuiltWithPayla />
      </div>
    </div>
  )
}
