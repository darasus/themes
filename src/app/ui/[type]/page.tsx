"use client"

import {Container} from "@/components/Container"
import {ComponentPreview} from "@/components/ComponentPreview"
import {FeaturesDemo} from "@/demos/ui/features/FeaturesDemo"
import {PricingDemo} from "@/demos/ui/pricing/PricingDemo"
import {HeroDemo} from "@/demos/ui/hero/HeroDemo"
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {FC} from "react"
import {SignInFormDemo} from "@/demos/ui/authentication/SignInFormDemo"
import {ProductOverviewDemo} from "@/demos/ui/ecommerce/product-overviews/ProductOverviewDemo"
import Link from "next/link"
import {useParams} from "next/navigation"
import {Label} from "@/components/ui/label"
import {ProductGridDemo} from "@/demos/ui/ecommerce/product-lists/ProductGrid"

type ItemTypes = "page-sections" | "application-ui" | "ecommerce"

const items: {title: string; demo: FC; type: ItemTypes}[] = [
  {title: "Hero", demo: HeroDemo, type: "page-sections"},
  {title: "Features", demo: FeaturesDemo, type: "page-sections"},
  {title: "Pricing", demo: PricingDemo, type: "page-sections"},
  {title: "Sign in form", demo: SignInFormDemo, type: "application-ui"},
  {
    title: "Product overview",
    demo: ProductOverviewDemo,
    type: "ecommerce",
  },
  {
    title: "Product grid",
    demo: ProductGridDemo,
    type: "ecommerce",
  },
]

export default function UIPage() {
  const params = useParams()
  const type = params.type as ItemTypes

  const elements = items
    .filter((item) => item.type === type)
    .map((item) => (
      <div key={item.title} className="space-y-4">
        <Label className="text-2xl">{item.title}</Label>
        <ComponentPreview>
          <item.demo />
        </ComponentPreview>
      </div>
    ))

  return (
    <Container size="lg">
      <Tabs value={type}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="page-sections" asChild>
            <Link href="/ui/page-sections">Page sections</Link>
          </TabsTrigger>
          <TabsTrigger value="application-ui" asChild>
            <Link href="/ui/application-ui">Application UI</Link>
          </TabsTrigger>
          <TabsTrigger value="ecommerce" asChild>
            <Link href="/ui/ecommerce">Ecommerce</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex flex-col gap-8 pt-4">{elements}</div>
    </Container>
  )
}
