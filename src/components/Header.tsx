"use client"

import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu"
import {forwardRef} from "react"
import {cn} from "@/lib/utils"

export function Header() {
  return (
    <div className="sticky top-6 z-50 flex justify-center">
      <NavigationMenu className="relative rounded-full border px-3 py-2 backdrop-blur-md">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Item href="/">TTT</Item>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Item href="/components">Components</Item>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Item href="/ui">UI</Item>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const Item = forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({className, children, ...props}, ref) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md px-1.5 py-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          "text-sm font-medium leading-none",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    </NavigationMenuLink>
  )
})

Item.displayName = "Item"
