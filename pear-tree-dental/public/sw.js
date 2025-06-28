// Service Worker for Pear Tree Dental - Performance Optimization
const CACHE_NAME = 'pear-tree-dental-v1';
const STATIC_CACHE = 'static-cache-v1';

// Assets to cache immediately
const CACHE_ASSETS = [
  '/',
  '/images/Pear_tree_dental_smile_design.webp',
  '/images/general-dentistry.webp',
  '/images/cosmetic-dentistry.webp',
  '/images/implant-dentistry.webp',
  '/images/orthodontics.webp',
  '/images/restorative-dentistry.webp',
  '/images/emergency-dentistry.webp',
];

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('SW: Cache opened');
        return cache.addAll(CACHE_ASSETS);
      })
      .then(() => {
        console.log('SW: Assets cached');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== CACHE_NAME) {
              console.log('SW: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('SW: Cache cleanup complete');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip chrome-extension requests
  if (event.request.url.startsWith('chrome-extension://')) return;

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          return response;
        }

        // Clone the request for fetch
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then((response) => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone response for cache
            const responseToCache = response.clone();

            // Cache images and static assets
            if (event.request.destination === 'image' ||
                event.request.url.includes('.webp') ||
                event.request.url.includes('.jpg') ||
                event.request.url.includes('.png') ||
                event.request.url.includes('.css') ||
                event.request.url.includes('.js')) {

              caches.open(STATIC_CACHE)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
            }

            return response;
          })
          .catch(() => {
            // Return offline fallback if needed
            if (event.request.destination === 'document') {
              return new Response(
                '<!DOCTYPE html><html><head><title>Offline</title></head><body><h1>You are offline</h1><p>Please check your internet connection.</p></body></html>',
                { headers: { 'Content-Type': 'text/html' } }
              );
            }
          });
      })
  );
});

// Background sync for when connection is restored
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('SW: Background sync triggered');
    // Handle any background sync tasks here
  }
});

// Handle push notifications (future enhancement)
self.addEventListener('push', (event) => {
  if (event.data) {
    const notificationData = event.data.json();

    const options = {
      body: notificationData.body,
      icon: '/images/icon-192x192.png',
      badge: '/images/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: notificationData.primaryKey
      }
    };

    event.waitUntil(
      self.registration.showNotification(notificationData.title, options)
    );
  }
});
