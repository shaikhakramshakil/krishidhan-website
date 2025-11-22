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
import { Search } from "lucide-react"
import Image from "next/image"

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
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-8 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <Image 
            src="/krishidhan-logo.png" 
            alt="Krishidhan" 
            width={180} 
            height={50} 
            className="h-10 md:h-12 w-auto object-contain" 
            priority 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">
            About Us
          </Link>
          <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">
            Products
          </Link>
          <Link href="/research" className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">
            R&D
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:text-green-700 hover:bg-green-50 rounded-full transition-all">
            <Search className="h-5 w-5" />
          </button>
          <Button className="bg-green-700 hover:bg-green-800 text-white rounded-full px-6 h-10 text-sm font-medium">
            Get in Touch
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-700"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
            <div className="flex flex-col h-full bg-white">
              <div className="p-6 border-b border-gray-100">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <Image src="/krishidhan-logo.png" alt="Krishidhan" width={140} height={40} className="h-10 w-auto object-contain" />
                </Link>
              </div>
              <div className="flex flex-col py-6">
                <Link href="/" onClick={() => setIsOpen(false)} className="px-6 py-3 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors">Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="px-6 py-3 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors">About Us</Link>
                <Link href="/products" onClick={() => setIsOpen(false)} className="px-6 py-3 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors">Products</Link>
                <Link href="/research" onClick={() => setIsOpen(false)} className="px-6 py-3 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors">R&D</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="px-6 py-3 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 transition-colors">Contact</Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
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
