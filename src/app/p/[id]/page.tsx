import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {BuiltWithPayla} from "@/features/BuiltWithPayla/BuiltWithPayla"
import {renderToHTML} from "@/features/Editor/editor/renderToHTML"
import {Product} from "@/features/Product/Product"
import {fetchBranding, getProduct} from "@/lib/actions"
import {getBaseUrl} from "@/lib/utils"
import {Metadata, ResolvingMetadata} from "next"
import {notFound} from "next/navigation"

interface Props {
  params: {
    id: string | undefined
  }
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  if (!props.params.id) {
    return {}
  }

  const product = await getProduct(props.params.id)

  if (!product) {
    notFound()
  }

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${product.title} | Payla`,
    description: product.description
      ? renderToHTML(JSON.parse(product.description)).replace(/<[^>]+>/g, "")
      : undefined,
    openGraph: {
      images: product.imageSrc ? [product.imageSrc] : previousImages,
      url: `${getBaseUrl()}/p/${props.params.id}`,
    },
  }
}

export default async function ProductPage({params}: Props) {
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
        <Product product={product} productId={params.id} />
        <BuiltWithPayla />
      </div>
    </div>
  )
}
