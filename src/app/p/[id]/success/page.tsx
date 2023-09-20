import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {BuiltWithPayla} from "@/features/BuiltWithPayla/BuiltWithPayla"
import {proseClassName} from "@/features/Editor/constants"
import {renderToHTML} from "@/features/Editor/editor/renderToHTML"
import {fetchBranding, getProduct} from "@/lib/actions"
import {notFound} from "next/navigation"

export default async function CheckoutSuccessPage({
  params,
}: {
  params: {
    id: string | undefined
  }
}) {
  if (!params.id) {
    notFound()
  }

  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  const branding = product?.stripeAccountId
    ? await fetchBranding(product?.stripeAccountId)
    : null

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4 m-auto max-w-md">
        {branding && (
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
        )}
        <Card>
          <CardHeader>
            <CardTitle>Your purchase is successful!</CardTitle>
          </CardHeader>
          {product.successMessage && (
            <CardContent>
              <div
                className={proseClassName}
                dangerouslySetInnerHTML={{
                  __html: renderToHTML(JSON.parse(product.successMessage)),
                }}
              />
            </CardContent>
          )}
        </Card>
        <BuiltWithPayla />
      </div>
    </div>
  )
}
