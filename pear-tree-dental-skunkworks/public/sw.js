const CACHE_NAME = 'pear-tree-dental-v1';
const OFFLINE_URL = '/offline';
const API_CACHE_NAME = 'api-cache-v1';
const STATIC_CACHE_NAME = 'static-cache-v1';

// Define what to cache during install
const PRECACHE_URLS = [
  '/',
  '/services/general',
  '/services/cosmetic',
  '/about',
  '/contact',
  '/membership',
  '/urgent-dental-pain',
  '/offline',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/favicon.svg'
];

// Static assets that should be cached
const STATIC_ASSETS = [
  /\.css$/,
  /\.js$/,
  /\.woff2?$/,
  /\.png$/,
  /\.jpg$/,
  /\.jpeg$/,
  /\.webp$/,
  /\.svg$/
];

// API endpoints to cache
const API_ENDPOINTS = [
  '/api/'
];

self.addEventListener('install', event => {
  console.log('[ServiceWorker] Install');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[ServiceWorker] Pre-caching offline page and critical resources');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => {
        console.log('[ServiceWorker] Skip waiting on install');
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activate');

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME &&
              cacheName !== API_CACHE_NAME &&
              cacheName !== STATIC_CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[ServiceWorker] Claiming clients');
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  // Skip non-http requests
  if (!event.request.url.startsWith('http')) return;

  // Skip requests with 'no-cache' header
  if (event.request.headers.get('cache-control') === 'no-cache') return;

  const { request } = event;
  const url = new URL(request.url);

  // Handle navigation requests (page loads)
  if (request.mode === 'navigate') {
    event.respondWith(handleNavigationRequest(request));
    return;
  }

  // Handle API requests
  if (isApiRequest(url)) {
    event.respondWith(handleApiRequest(request));
    return;
  }

  // Handle static assets
  if (isStaticAsset(url)) {
    event.respondWith(handleStaticAssetRequest(request));
    return;
  }

  // Default: try network first, then cache
  event.respondWith(
    fetch(request)
      .then(response => {
        // Clone the response before caching
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(request, responseClone);
        });
        return response;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});

// Handle navigation requests with network-first strategy
async function handleNavigationRequest(request) {
  try {
    // Try network first
    const response = await fetch(request);

    // If successful, cache the response
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());

    return response;
  } catch (error) {
    console.log('[ServiceWorker] Network failed, trying cache', error);

    // Try to find the page in cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // If not in cache, return offline page
    const offlineResponse = await caches.match(OFFLINE_URL);
    if (offlineResponse) {
      return offlineResponse;
    }

    // Fallback response if even offline page is not cached
    return new Response(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Offline - Pear Tree Dental</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                   text-align: center; padding: 2rem; background: #f8fafc; }
            .container { max-width: 400px; margin: 0 auto; }
            .icon { font-size: 4rem; margin-bottom: 1rem; }
            h1 { color: #1e3a8a; margin-bottom: 1rem; }
            p { color: #64748b; line-height: 1.6; }
            .retry-btn { background: #1e3a8a; color: white; border: none;
                        padding: 0.75rem 1.5rem; border-radius: 0.5rem;
                        margin-top: 1rem; cursor: pointer; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="icon">🦷</div>
            <h1>You're Offline</h1>
            <p>It looks like you're not connected to the internet. Please check your connection and try again.</p>
            <p>You can still access previously visited pages when you're back online.</p>
            <button class="retry-btn" onclick="window.location.reload()">Try Again</button>
          </div>
        </body>
      </html>`,
      {
        status: 200,
        statusText: 'OK',
        headers: { 'Content-Type': 'text/html' }
      }
    );
  }
}

// Handle API requests with cache-first strategy for better performance
async function handleApiRequest(request) {
  const cache = await caches.open(API_CACHE_NAME);

  try {
    // Try network first for API requests to get fresh data
    const response = await fetch(request);

    // Only cache successful responses
    if (response.status === 200) {
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    console.log('[ServiceWorker] API request failed, trying cache', error);

    // If network fails, try cache
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Return a JSON error response if no cache available
    return new Response(
      JSON.stringify({
        error: 'Network unavailable',
        message: 'This feature requires an internet connection.'
      }),
      {
        status: 503,
        statusText: 'Service Unavailable',
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Handle static assets with cache-first strategy
async function handleStaticAssetRequest(request) {
  const cache = await caches.open(STATIC_CACHE_NAME);

  // Try cache first for static assets
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    // If not in cache, fetch from network
    const response = await fetch(request);

    // Cache successful responses
    if (response.status === 200) {
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    console.log('[ServiceWorker] Static asset request failed', error);

    // For images, return a placeholder
    if (request.destination === 'image') {
      return new Response(
        `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
          <rect width="200" height="200" fill="#f3f4f6"/>
          <text x="100" y="100" text-anchor="middle" dy="0.3em" font-family="Arial" font-size="14" fill="#9ca3af">
            Image Unavailable
          </text>
        </svg>`,
        {
          headers: { 'Content-Type': 'image/svg+xml' }
        }
      );
    }

    throw error;
  }
}

// Helper functions
function isApiRequest(url) {
  return API_ENDPOINTS.some(endpoint => url.pathname.startsWith(endpoint));
}

function isStaticAsset(url) {
  return STATIC_ASSETS.some(pattern => pattern.test(url.pathname));
}

// Handle background sync for form submissions
self.addEventListener('sync', event => {
  console.log('[ServiceWorker] Background sync', event.tag);

  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForms());
  }

  if (event.tag === 'appointment-sync') {
    event.waitUntil(syncAppointments());
  }
});

// Sync contact forms when back online
async function syncContactForms() {
  try {
    const requests = await getStoredRequests('contact-forms');

    for (const requestData of requests) {
      try {
        await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData)
        });

        // Remove from storage after successful sync
        await removeStoredRequest('contact-forms', requestData.id);
        console.log('[ServiceWorker] Contact form synced successfully');
      } catch (error) {
        console.log('[ServiceWorker] Failed to sync contact form', error);
      }
    }
  } catch (error) {
    console.log('[ServiceWorker] Background sync failed', error);
  }
}

// Sync appointment requests when back online
async function syncAppointments() {
  try {
    const requests = await getStoredRequests('appointments');

    for (const requestData of requests) {
      try {
        await fetch('/api/appointments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData)
        });

        await removeStoredRequest('appointments', requestData.id);
        console.log('[ServiceWorker] Appointment synced successfully');
      } catch (error) {
        console.log('[ServiceWorker] Failed to sync appointment', error);
      }
    }
  } catch (error) {
    console.log('[ServiceWorker] Appointment sync failed', error);
  }
}

// Helper functions for IndexedDB operations
async function getStoredRequests(storeName) {
  // This would typically use IndexedDB
  // For now, return empty array
  return [];
}

async function removeStoredRequest(storeName, requestId) {
  // This would typically remove from IndexedDB
  console.log(`[ServiceWorker] Would remove ${requestId} from ${storeName}`);
}

// Handle service worker updates
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  console.log('[ServiceWorker] Notification click received.');

  event.notification.close();

  const urlToOpen = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then(clientList => {
      // Check if there's already a window/tab open with the target URL
      for (const client of clientList) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }

      // If not, open a new window/tab
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});

console.log('[ServiceWorker] SW registered');
