import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Classic Hoodie",
    href: "#",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    imageAlt: "",
    price: "$35",
    color: "Navy",
  },
  {
    id: 2,
    name: "Crewneck Sweatshirt",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2680&q=80",
    imageAlt: "",
    price: "$40",
    color: "Gray",
  },
  {
    id: 3,
    name: "Zip-Up Hoodie",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80",
    imageAlt: "",
    price: "$45",
    color: "Black",
  },
  {
    id: 4,
    name: "Pullover Hoodie",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    imageAlt: "",
    price: "$50",
    color: "Green",
  },
]

export function ProductGridDemo() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight">Selected products</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-xl">
                  <Link href="#">{product.name}</Link>
                </h3>
                <p className="mt-1 text-sm">{product.color}</p>
              </div>
              <p className="text-xl font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
