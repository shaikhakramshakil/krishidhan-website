// Minimal service worker for PWA installability
const CACHE_NAME = 'krishidhan-v1'

self.addEventListener('install', (event) => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim())
})

self.addEventListener('fetch', (event) => {
  // Just pass through - no caching needed for basic PWA
  event.respondWith(fetch(event.request))
})
