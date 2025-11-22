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
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
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
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const router = useRouter()

  // Keyboard shortcut: Cmd/Ctrl + K to open search, Escape to close
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false)
        setSearchQuery("")
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isSearchOpen])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

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
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-base font-semibold text-gray-700 hover:text-green-700 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-base font-semibold text-gray-700 hover:text-green-700 transition-colors">
            About Us
          </Link>
          <Link href="/products" className="text-base font-semibold text-gray-700 hover:text-green-700 transition-colors">
            Products
          </Link>
          <Link href="/research" className="text-base font-semibold text-gray-700 hover:text-green-700 transition-colors">
            R&D
          </Link>
          <Link href="/contact" className="text-base font-semibold text-gray-700 hover:text-green-700 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Inline Search */}
          <div className="relative">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10 pr-10 h-10 w-64 text-sm rounded-full bg-gray-50 border-gray-200"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all"
                >
                  <X className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-500 hover:text-green-700 hover:bg-green-50 rounded-full transition-all"
                aria-label="Search products"
              >
                <Search className="h-5 w-5" />
              </button>
            )}
          </div>
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
              <div className="px-6 py-4 border-b border-gray-100">
                <form onSubmit={(e) => {
                  handleSearch(e);
                  setIsOpen(false);
                }} className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10 pr-10 h-10 text-sm rounded-full bg-gray-50 border-gray-200"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </form>
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
