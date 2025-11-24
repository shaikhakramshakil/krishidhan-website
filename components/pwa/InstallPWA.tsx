'use client'

import { useEffect, useState } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [canInstall, setCanInstall] = useState(false)
  const [accepted, setAccepted] = useState<null | boolean>(null)

  useEffect(() => {
    function onBeforeInstallPrompt(e: Event) {
      const ev = e as BeforeInstallPromptEvent
      // Prevent the mini-infobar from appearing on mobile
      ev.preventDefault()
      // Store the event for later
      setDeferredPrompt(ev)
      setCanInstall(true)
      console.log('beforeinstallprompt event fired - app is installable')
    }

    function onAppInstalled() {
      setAccepted(true)
      setDeferredPrompt(null)
      setCanInstall(false)
      console.log('PWA was installed')
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt as EventListener)
    window.addEventListener('appinstalled', onAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt as EventListener)
      window.removeEventListener('appinstalled', onAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      setCanInstall(false)
      return
    }

    // Show the native prompt
    deferredPrompt.prompt()

    // Wait for the user's choice
    const choice = await deferredPrompt.userChoice
    if (choice && choice.outcome === 'accepted') {
      setAccepted(true)
      console.log('User accepted the install prompt')
    } else {
      setAccepted(false)
      console.log('User dismissed the install prompt')
    }

    // Clean up as prompt can only be used once
    setDeferredPrompt(null)
    setCanInstall(false)
  }

  // Only show install button if native prompt is available
  if (!canInstall) {
    return null
  }

  return (
    <button
      onClick={handleInstallClick}
      className="fixed bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg z-50 flex items-center gap-2"
      aria-label="Install app"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Install App
    </button>
  )
}
