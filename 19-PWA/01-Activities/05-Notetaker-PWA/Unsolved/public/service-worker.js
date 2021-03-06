const CACHE_NAME = "my-site-cache-v2";
const DATA_CACHE_NAME = "data-cache-v2";

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/favicon.ico',
    '/manifest.json',
    '/app.js',
    '/assets/css/style.css',
    '/assets/images/icons/icon-72x72.png',
    '/assets/images/icons/icon-96x96.png',
    '/assets/images/icons/icon-128x128.png',
    '/assets/images/icons/icon-144x144.png'
];

// Install service worker
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Your files were pre-cached successfully!');
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
})

// Activate service worker
self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if(key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log('Removing old cache data', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );

    self.clients.claim();
})

// Intercept fetch requests
self.addEventListener('fetch', function(e) {
    if(e.request.url.includes('/api/')) {
        e.respondWith(
            caches
                .open(DATA_CACHE_NAME)
                .then(cache => {
                    return fetch(e.request)
                        .then(response => {
                            if(response.status === 200) {
                                cache.put(e.request.url, response.clone());
                            }

                            return response;
                        })
                        .catch(err => {
                            return cache.match(e.request);
                        });
                })
                .catch(err => console.log(err))
        );

        return;
    }
    e.respondWith(
        fetch(e.request).catch(function() {
            return caches.match(e.request).then(function(response) {
                if(response) {
                    return response;
                } else if (e.request.headers.get('accept').includes('text/html')) {
                    return caches.match('/')
                }
            });
        })
    );
});