/* Offline support: cache the app shell; always go to the network for Supabase/API calls. Bump VERSION on each release. */
const VERSION = 'ardu-v1';
const SHELL = [
  './', 'index.html', 'manifest.webmanifest', 'css/app.css',
  'js/config.js', 'js/store.js', 'js/engine.js', 'js/app.js',
  'data/catalogue.js', 'data/subjects/english.js', 'data/subjects/irish.js', 'data/subjects/maths.js',
  'data/subjects/biology.js', 'data/subjects/business.js', 'data/subjects/geography.js',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png'
];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return; // Supabase, CDN etc. go straight to network
  // Network-first so new content ships immediately; fall back to cache offline.
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return r; }).catch(() => caches.match(e.request)));
});
