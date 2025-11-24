self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      icon: data.icon || '/icon-192x192.png',
      badge: '/icon-192x192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2',
        url: data.url || '/',
      },
    }
    event.waitUntil(self.registration.showNotification(data.title, options))
  }
})

self.addEventListener('notificationclick', function (event) {
  console.log('Notification click received.')
  event.notification.close()
  const urlToOpen = event.notification.data?.url || '/'
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
      // Check if there's already a window/tab open
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i]
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          client.navigate(urlToOpen)
          return client.focus()
        }
      }
      // If no window/tab is open, open a new one
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen)
      }
    })
  )
})

// Cache static assets for offline support
const CACHE_NAME = 'krishidhan-cache-v1'
const urlsToCache = [
  '/',
  '/about',
  '/products',
  '/contact',
  '/research',
  '/infrastructure',
  '/career',
  '/group-of-companies',
]

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Opened cache')
      return cache.addAll(urlsToCache)
    })
  )
  self.skipWaiting()
})

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheName) {
            return cacheName !== CACHE_NAME
          })
          .map(function (cacheName) {
            return caches.delete(cacheName)
          })
      )
    })
  )
  self.clients.claim()
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response
      }
      return fetch(event.request).then(function (response) {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response
        }
        // Clone the response
        const responseToCache = response.clone()
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache)
        })
        return response
      })
    }).catch(function () {
      // If both cache and network fail, show offline page
      return caches.match('/')
    })
  )
})
