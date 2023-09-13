import {BuiltWithPayla} from "@/features/BuiltWithPayla/BuiltWithPayla"
import {Product} from "@/features/Product/Product"
import {parseHash} from "@/lib/parseHash"

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

  return (
    <div>
      <div className="m-auto max-w-md">
        <Product product={product} />
        <BuiltWithPayla />
      </div>
    </div>
  )
}
