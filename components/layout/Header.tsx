"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  let pathname = usePathname() || "/"
  const [hoveredPath, setHoveredPath] = React.useState(pathname)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Group of Companies", href: "/group-of-companies" },
    { name: "Research", href: "/research" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Products", href: "/products" },
    { name: "Career", href: "/career" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12 lg:px-20 max-w-[1400px] w-full">
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center">
            <div className="relative h-14 w-48">
              <Image
                src="/krishidhan-logo.png"
                alt="Krishidhan"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 relative">
          {navLinks.map((link) => {
            const isActive = link.href === pathname
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-lg font-bold relative no-underline duration-300 ease-in",
                  isActive ? "text-green-600" : "text-gray-700"
                )}
                onMouseOver={() => setHoveredPath(link.href)}
                onMouseLeave={() => setHoveredPath(pathname)}
              >
                <span>{link.name}</span>
                {link.href === hoveredPath && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-full bg-green-100 rounded-md -z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: "100%",
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 9,
                      duration: 0.3,
                    }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center">
          <Link href="/contact">
            <Button className="bg-green-600 text-white hover:bg-green-700 rounded-full px-8 font-bold text-base h-11 shadow-md hover:shadow-lg transition-all">
              Contact
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-2 text-gray-600 hover:text-green-600 hover:bg-green-50"
              >
                <Menu className="h-8 w-8" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-white p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="relative h-10 w-36">
                    <Image
                      src="/krishidhan-logo.png"
                      alt="Krishidhan"
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                  <button
                    className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex flex-col gap-8 p-8 mt-4">
                  {navLinks.map((link) => {
                    const isActive = link.href === pathname
                    
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-3xl font-bold transition-colors",
                          isActive ? "text-green-600" : "text-gray-800 hover:text-green-600"
                        )}
                      >
                        {link.name}
                      </Link>
                    )
                  })}
                  <div className="flex flex-col gap-4 mt-4">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-green-600 text-white hover:bg-green-700 rounded-full text-xl font-bold h-14 shadow-lg">
                        Contact
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
