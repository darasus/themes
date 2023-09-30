import {ChatBubbleIcon} from "@radix-ui/react-icons"
import {CloudLightningIcon, LinkIcon, SettingsIcon} from "lucide-react"

interface Feature {
  name: string
  description: string
  icon: React.ComponentType<{className?: string}>
}

const features: Feature[] = [
  {
    name: "Real-time updates",
    description:
      "Get instant updates on your dashboard with real-time data streaming.",
    icon: CloudLightningIcon,
  },
  {
    name: "Customizable widgets",
    description:
      "Choose from a variety of widgets and customize them to fit your needs.",
    icon: SettingsIcon,
  },
  {
    name: "Integrations",
    description:
      "Connect with your favorite tools and services to streamline your workflow.",
    icon: LinkIcon,
  },
  {
    name: "Analytics",
    description:
      "Track your performance and gain insights with powerful analytics tools.",
    icon: ChatBubbleIcon,
  },
]

export function FeaturesDemo() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Best features possible
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to build your app
          </p>
          <p className="mt-6 text-lg leading-8 text-secondary-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus
            velit, bibendum vel nunc eget, bibendum bibendum sapien. Sed
            euismod, sapien vel bibendum bibendum, sapien sapien bibendum
            sapien, vel bibendum sapien sapien vel sapien.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-primary">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg border border-primary">
                    <feature.icon
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-secondary-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
