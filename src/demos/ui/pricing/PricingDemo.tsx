import {Button} from "@/components/ui/button"
import {CheckCircleIcon} from "lucide-react"

const packages = [
  {
    title: "Starter",
    cost: {perMonth: "$15", perYear: "$12"},
    details: "All you need to begin.",
    perks: [
      "5 items",
      "Max of 1,000 followers",
      "Basic stats",
      "Support replies within 48 hours",
    ],
  },
  {
    title: "Standard",
    cost: {perMonth: "$30", perYear: "$24"},
    details:
      "Includes everything in Starter, plus crucial resources to expand your venture.",
    perks: [
      "25 items",
      "Max of 10,000 followers",
      "Enhanced stats",
      "Support replies within 24 hours",
      "Sales triggers",
    ],
  },
  {
    title: "Expansion",
    cost: {perMonth: "$60", perYear: "$48"},
    details:
      "Everything in Standard, enhanced with teamwork capabilities and in-depth data analysis.",
    perks: [
      "No limit on items",
      "Infinite followers",
      "Enhanced stats",
      "Dedicated 1-hour support reply",
      "Sales triggers",
      "Personalized data insights",
    ],
  },
]

export function PricingDemo() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Absolute best pricing possible
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-secondary-foreground sm:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus
          velit, bibendum vel nunc eget, bibendum bibendum sapien. Sed euismod,
          sapien vel bibendum bibendum, sapien sapien bibendum sapien, vel
          bibendum sapien sapien vel sapien. Sed bibendum sapien sapien, vel
          bibendum sapien sapien.
        </p>
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-secondary sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {packages.map((tier, i) => (
              <div key={i} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3
                  id={i.toString()}
                  className="text-base font-semibold leading-7"
                >
                  {tier.title}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight">
                    {tier.cost.perMonth}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-secondary-foreground">
                    /month
                  </span>
                </p>
                <p className="mt-3 text-sm leading-6 text-secondary-foreground">
                  {tier.cost.perYear} per month if paid annually
                </p>
                <Button className="mt-10 w-full">Buy plan</Button>
                <p className="mt-10 text-sm font-semibold leading-6 text-secondary-foreground">
                  {tier.details}
                </p>
                <ul role="list" className="mt-6 space-y-3 text-sm leading-6">
                  {tier.perks.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon className="h-6 w-5 flex-none text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
