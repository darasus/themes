import {Container} from "@/components/Container"
import {ComponentPreview} from "@/components/ComponentPreview"
import {FeaturesDemo} from "@/demos/ui/features/FeaturesDemo"
import {PricingDemo} from "@/demos/ui/pricing/PricingDemo"
import {HeroDemo} from "@/demos/ui/hero/HeroDemo"

const items = [
  {title: "Hero", demo: HeroDemo},
  {title: "Features", demo: FeaturesDemo},
  {title: "Pricing", demo: PricingDemo},
]

export default function Theme() {
  return (
    <Container size="lg">
      <div className="space-y-4">
        {items.map((item) => (
          <>
            <h2 className="text-3xl">{item.title}</h2>
            <ComponentPreview>
              <item.demo />
            </ComponentPreview>
          </>
        ))}
      </div>
    </Container>
  )
}
