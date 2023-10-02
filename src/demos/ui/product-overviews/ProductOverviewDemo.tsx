import {useState} from "react"
import {cn} from "@/lib/utils"
import {HeartIcon, StarIcon} from "lucide-react"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"

const product = {
  name: "Zip Tote Basket",
  price: "$140",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Product image",
      src: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
      alt: "",
    },
    {
      id: 2,
      name: "Product image",
      src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
      alt: "",
    },
    {
      id: 3,
      name: "Product image",
      src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3560&q=80",
      alt: "",
    },
  ],
  colors: [
    {
      name: "Green",
      bgColor: "bg-green-500",
    },
    {name: "Red", bgColor: "bg-red-500"},
    {name: "Yellow", bgColor: "bg-yellow-500"},
  ],
  description:
    "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    {
      name: "Specs",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
  ],
}

export function ProductOverviewDemo() {
  const [selectedImage, setSelectedImage] = useState(product.images[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="h-full w-full"
                fill
                style={{
                  objectFit: "cover",
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="mx-auto grid w-full max-w-2xl grid-cols-3 gap-4 lg:max-w-none">
              {product.images.map((image) => (
                <button key={image.id} onClick={() => setSelectedImage(image)}>
                  <div
                    className={cn(
                      {
                        "ring ring-primary": selectedImage.id === image.id,
                      },
                      "relative aspect-square overflow-hidden rounded-lg"
                    )}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full"
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight">
              {product.name}
            </h1>
            <div className="mt-3">
              <p className="text-3xl tracking-tight">{product.price}</p>
            </div>
            <div className="mt-3">
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={cn(
                        product.rating > rating
                          ? "text-primary"
                          : "text-primary/30",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="space-y-6 text-base">{product.description}</div>
            </div>
            <div className="mt-6">
              <div>
                <h3 className="mb-2 text-sm">Color</h3>
                <RadioGroup
                  value={selectedColor.name}
                  onValueChange={(value) => {
                    setSelectedColor(
                      product.colors.find((c) => c.name === value)!
                    )
                  }}
                  className="flex gap-4"
                >
                  {product.colors.map((color) => {
                    const id = `id-radio-${color.name}`
                    const isActive = selectedColor.name === color.name

                    return (
                      <div className="flex items-center" key={color.name}>
                        <RadioGroupItem value={color.name} id={id} hidden />
                        <Label
                          htmlFor={id}
                          className={cn(
                            color.bgColor,
                            isActive ? "ring ring-primary" : "",
                            "relative h-9 w-9 cursor-pointer rounded-full"
                          )}
                        />
                      </div>
                    )
                  })}
                </RadioGroup>
              </div>
              <div className="mt-10 flex gap-2">
                <Button>Add to bag</Button>
                <Button variant={"secondary"}>
                  <HeartIcon className="mr-1 -translate-x-1" />
                  Add to favorites
                </Button>
              </div>
            </div>
            <section aria-labelledby="details-heading" className="mt-12">
              <Accordion type="single" collapsible className="w-full">
                {product.details.map((detail) => {
                  return (
                    <AccordionItem value={detail.name} key={detail.name}>
                      <AccordionTrigger>{detail.name}</AccordionTrigger>
                      <AccordionContent>
                        <ul role="list">
                          {detail.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
