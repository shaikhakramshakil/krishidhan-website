import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Krishidhan Seeds Private Limited',
    short_name: 'Krishidhan',
    description: 'Leading seed company providing quality agricultural seeds and solutions for Indian farmers',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#16a34a',
    orientation: 'portrait-primary',
    icons: [
      // Android icons
      {
        src: '/android-icon-36x36.png',
        sizes: '36x36',
        type: 'image/png',
      },
      {
        src: '/android-icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/android-icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/android-icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/android-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/android-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      // Apple icons
      {
        src: '/apple-icon-180x180.png',
        sizes: '180x180',
        type: 'image/png',
      },
      // MS icons (largest for high-res displays)
      {
        src: '/ms-icon-310x310.png',
        sizes: '310x310',
        type: 'image/png',
      },
      {
        src: '/ms-icon-150x150.png',
        sizes: '150x150',
        type: 'image/png',
      },
    ],
    categories: ['agriculture', 'business', 'productivity'],
    lang: 'en',
    dir: 'ltr',
  }
}
