import {Button} from "@/components/ui/button"

export function HeroDemo() {
  return (
    <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
      <div className="flex sm:mb-8 sm:justify-center">
        <div className="flex items-center gap-1 rounded-full px-4 py-1 text-xs leading-6 ring-1 ring-primary/30 duration-1000 animate-in hover:ring-primary/70">
          Easy NextJS integration.{" "}
          <Button
            variant="link"
            className="h-auto p-0 text-xs hover:no-underline"
          >
            Read more
          </Button>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Build your next app with The Tailwind Theme
        </h1>
        <p className="mt-6 text-lg leading-8 text-secondary-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          sapien vel bibendum luctus, velit sapien bibendum nunc, vel bibendum
          sapien sapien vel.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <Button>Buy now</Button>
          <Button variant="secondary">Learn more</Button>
        </div>
      </div>
    </div>
  )
}
