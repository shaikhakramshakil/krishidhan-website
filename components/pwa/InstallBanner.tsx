'use client'

import { useState, useEffect } from 'react'
import { X, Smartphone } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function InstallBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    // Check if banner was dismissed before
    const dismissed = localStorage.getItem('install-banner-dismissed')
    if (dismissed) {
      const dismissedTime = parseInt(dismissed)
      const daysSinceDismissal = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24)
      // Don't show again for 7 days
      if (daysSinceDismissal < 7) {
        return
      }
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      
      // Show banner after 3 seconds
      setTimeout(() => {
        setShowBanner(true)
      }, 3000)
    }

    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowBanner(false)
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
    if (!deferredPrompt) return

    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      setIsInstalled(true)
    }

    setShowBanner(false)
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShowBanner(false)
    localStorage.setItem('install-banner-dismissed', Date.now().toString())
  }

  // Don't show if installed or banner not ready
  if (isInstalled || !showBanner || !deferredPrompt) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Green accent bar */}
        <div className="h-1 bg-gradient-to-r from-green-500 to-green-600" />
        
        <div className="p-4">
          <div className="flex items-start gap-4">
            {/* App icon */}
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-7 h-7 text-green-600" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 text-lg">
                Install Krishidhan App
              </h3>
              <p className="text-sm text-gray-600 mt-0.5">
                Quick access • Works offline • No app store needed
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleInstallClick}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors"
            >
              Install Now
            </button>
            <button
              onClick={handleDismiss}
              className="px-4 py-2.5 text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              Later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
