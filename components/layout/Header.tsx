"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "R&D", href: "/research" },
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
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-gray-700 hover:text-green-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
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
                  <Button
                    variant="ghost"
                    className="px-2 text-gray-500 hover:text-green-600 hover:bg-green-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-8 w-8" />
                  </Button>
                </div>
                <div className="flex flex-col gap-8 p-8 mt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-bold text-gray-800 hover:text-green-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-4">
                    <Button className="w-full bg-green-600 text-white hover:bg-green-700 rounded-full text-xl font-bold h-14 shadow-lg">
                      Contact
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
