"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Cotton",
    href: "/products/cotton",
    description: "High-yielding cotton hybrids resistant to pests.",
  },
  {
    title: "Paddy",
    href: "/products/paddy",
    description: "Premium paddy varieties for various agro-climatic zones.",
  },
  {
    title: "Soybean",
    href: "/products/soybean",
    description: "Oil-rich soybean seeds with high germination rates.",
  },
  {
    title: "Wheat",
    href: "/products/wheat",
    description: "Disease-resistant wheat varieties for superior yield.",
  },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/80 shadow-sm overflow-x-hidden">
      <div className="container mx-auto flex h-24 items-center justify-between px-6 md:px-12 lg:px-20 max-w-[1400px] w-full">
        <div className="mr-4 hidden md:flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
              K
            </div>
            <span className="hidden font-extrabold sm:inline-block text-2xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              KRISHIDHAN
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-semibold text-gray-700 hover:text-green-600")}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-semibold text-gray-700 hover:text-green-600")}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/products" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-semibold text-gray-700 hover:text-green-600")}>
                    Products
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/research" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-semibold text-gray-700 hover:text-green-600")}>
                    R&D
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-semibold text-gray-700 hover:text-green-600")}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Mobile Menu */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Link href="/" className="flex md:hidden items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
              K
            </div>
            <span className="font-extrabold text-xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              KRISHIDHAN
            </span>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-3 text-base hover:bg-green-50 md:hidden rounded-xl"
              >
                <Menu className="h-6 w-6 text-green-600" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 w-80">
              <div className="px-6">
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    K
                  </div>
                  <span className="font-extrabold text-xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    KRISHIDHAN
                  </span>
                </Link>
              </div>
              <div className="flex flex-col gap-2 mt-8 px-6">
                  <Link href="/" onClick={() => setIsOpen(false)} className="text-base font-semibold text-gray-700 hover:text-green-600 hover:bg-green-50 p-3 rounded-xl transition-colors">Home</Link>
                  <Link href="/about" onClick={() => setIsOpen(false)} className="text-base font-semibold text-gray-700 hover:text-green-600 hover:bg-green-50 p-3 rounded-xl transition-colors">About Us</Link>
                  <Link href="/products" onClick={() => setIsOpen(false)} className="text-base font-semibold text-gray-700 hover:text-green-600 hover:bg-green-50 p-3 rounded-xl transition-colors">Products</Link>
                  <Link href="/research" onClick={() => setIsOpen(false)} className="text-base font-semibold text-gray-700 hover:text-green-600 hover:bg-green-50 p-3 rounded-xl transition-colors">R&D</Link>
                  <Link href="/contact" onClick={() => setIsOpen(false)} className="text-base font-semibold text-gray-700 hover:text-green-600 hover:bg-green-50 p-3 rounded-xl transition-colors">Contact</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-2xl p-4 leading-none no-underline outline-none transition-all hover:bg-green-50 hover:shadow-md border border-transparent hover:border-green-200",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none text-gray-900">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
