"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Download, Smartphone } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function Footer() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }

    const handleAppInstalled = () => {
      setIsInstalled(true)
      setDeferredPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      alert('To install: Click the menu button in your browser and select "Install App" or "Add to Home Screen"')
      return
    }
    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      setIsInstalled(true)
    }
    setDeferredPrompt(null)
  }
  return (
    <footer className="border-t bg-gray-50 w-full overflow-x-hidden">
      <div className="container mx-auto max-w-[1400px] py-16 md:py-20 px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-6">
            <img
              src="/krishidhan_logo.png"
              alt="Krishidhan Seeds"
              className="h-auto w-auto max-w-[200px]"
            />
            <p className="text-xl text-gray-600 leading-relaxed">
              Leading technology driven Indian agri input company providing access to latest technologies for farmers.
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-xl font-semibold uppercase tracking-wider text-gray-900">Company</h4>
            <ul className="space-y-4 text-lg text-gray-600">
              <li><Link href="/about" className="hover:text-green-700 transition-colors">About Us</Link></li>
              <li><Link href="/group-of-companies" className="hover:text-green-700 transition-colors">Group of Companies</Link></li>
              <li><Link href="/research" className="hover:text-green-700 transition-colors">Research</Link></li>
              <li><Link href="/infrastructure" className="hover:text-green-700 transition-colors">Infrastructure</Link></li>
              <li><Link href="/career" className="hover:text-green-700 transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xl font-semibold uppercase tracking-wider text-gray-900">Products</h4>
            <ul className="space-y-4 text-lg text-gray-600">
              <li><Link href="/products/cotton" className="hover:text-green-700 transition-colors">Cotton</Link></li>
              <li><Link href="/products/paddy" className="hover:text-green-700 transition-colors">Paddy</Link></li>
              <li><Link href="/products/soybean" className="hover:text-green-700 transition-colors">Soybean</Link></li>
              <li><Link href="/products/wheat" className="hover:text-green-700 transition-colors">Wheat</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xl font-semibold uppercase tracking-wider text-gray-900">Contact</h4>
            <address className="text-sm text-gray-600 not-italic space-y-2 leading-relaxed">
              <p>Krishidhan Seeds Pvt. Ltd.</p>
              <p>"Krishidhan Bhawan", D3-D6,</p>
              <p>Additional MIDC, Aurangabad Road,</p>
              <p>Jalna - 431 203, Maharashtra, India</p>
              <p>Phone: +91 2482 222600</p>
              <p>Email: info@krishidhanseeds.com</p>
            </address>
          </div>
        </div>
        
        {/* Certifications & Partners Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 lg:gap-28">
            <div className="hover:scale-105 transition-transform duration-300">
              <img
                src="/logo1.png"
                alt="Certification Partner"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <img
                src="/logo2.png"
                alt="Industry Partner"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <img
                src="/logo3.png"
                alt="Association Partner"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg text-gray-500">© {new Date().getFullYear()} Krishidhan Seeds Pvt. Ltd. All rights reserved.</p>
          
          {!isInstalled && (
            <button
              onClick={handleInstallClick}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              <Smartphone className="w-4 h-4" />
              <span>Get our App</span>
            </button>
          )}
        </div>
      </div>
    </footer>
  )
}
