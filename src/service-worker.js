self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('ultrasky-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/styles.css',
                '/js/app.js',
                '/manifest.json',
                '/assets/icons/icon-192x192.png',
                '/assets/icons/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});