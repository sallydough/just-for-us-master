/* global importScripts*/
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.2.3/workbox-sw.js');

console.log('Service Worker: Loaded');

const cacheNames = ['my-cache'];

// Precache assets during install
/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing');

  event.waitUntil(
    caches.open(cacheNames[0]).then((cache) => {
      return cache.addAll([
        '/index.html',
        '/static/css/main.css',
        // Add more files to cache as needed
      ]);
    }).then(() => {
      console.log('Service Worker: Installation complete');
    }).catch((error) => {
      console.error('Service Worker: Error during installation', error);
    })
  );
});

// Delete old caches during activate
/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');

  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.forEach((key) => {
        if (!cacheNames.includes(key)) {
          return caches.delete(key);
        }
      }));
    }).then(() => {
      console.log('Service Worker: Old caches removed');
    }).catch((error) => {
      console.error('Service Worker: Error during activation', error);
    })
  );
});

// Fetch from cache or network
/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('fetch', (event) => {
  console.log('Service Worker: Fetching', event.request.url);

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchResponse) => {
        return caches.open(cacheNames[0]).then((cache) => {
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    }).catch((error) => {
      console.error('Service Worker: Error fetching:', error);
    })
  );
});
