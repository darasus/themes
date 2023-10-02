"use client"

import {Container} from "@/components/Container"
import {ComponentPreview} from "@/components/ComponentPreview"
import {FeaturesDemo} from "@/demos/ui/features/FeaturesDemo"
import {PricingDemo} from "@/demos/ui/pricing/PricingDemo"
import {HeroDemo} from "@/demos/ui/hero/HeroDemo"
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {FC, Fragment} from "react"
import {SignInFormDemo} from "@/demos/ui/authentication/SignInFormDemo"
import {ProductOverviewDemo} from "@/demos/ui/product-overviews/ProductOverviewDemo"
import Link from "next/link"
import {useParams} from "next/navigation"
import {Label} from "@/components/ui/label"

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
]

export default function UIPage() {
  const params = useParams()
  const type = params.type as ItemTypes

  const elements = items
    .filter((item) => item.type === type)
    .map((item) => (
      <Fragment key={item.title}>
        <Label className="text-lg">{item.title}</Label>
        <ComponentPreview>
          <item.demo />
        </ComponentPreview>
      </Fragment>
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
      <div className="pt-4">
        <div className="space-y-2">{elements}</div>
      </div>
    </Container>
  )
}
