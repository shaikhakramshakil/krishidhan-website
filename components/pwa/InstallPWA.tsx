'use client'

import { useEffect } from 'react'

export function InstallPWA() {
  useEffect(() => {
    // Just capture and store the prompt, don't show any custom UI
    const handleBeforeInstallPrompt = (e: Event) => {
      // Don't prevent default - let the browser show its native prompt
      console.log('PWA install prompt available')
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  // Return null - we're not rendering any custom UI
  return null
}
