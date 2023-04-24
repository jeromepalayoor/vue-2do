console.info('Service worker is running')

const toCache = [
	'images/favicon.ico',
	'manifest.json',
	'images/icons/icon-128x128.png',
	'images/icons/icon-144x144.png',
	'images/icons/icon-152x152.png',
	'images/icons/icon-192x192.png',
	'images/icons/icon-512x512.png',
	'images/icons/icon-72x72.png',
	'images/icons/icon-96x96.png',
	'sw.js',
	'reg_sw.js'
]

const assetCache = "asset";
const contentCache = "content";

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(assetCache).then(function (cache) {
			return cache.addAll(toCache);
		})
	);
});

self.addEventListener('fetch', event => {
    const req = event.request
    if (toCache.find(v => req.url.endsWith(v))) {
        event.respondWith(
            caches.open(assetCache)
                .then(cache => cache.match(req))
        )
        return
    }

    event.respondWith(
        fetch(req)
            .then(resp => {
                const copy = resp.clone()
                event.waitUntil(
                    caches.open(assetCache)
                        .then(cache => cache.put(req, copy))
                )
                return resp
            })
            .catch(err => {
                if (req.headers.get('Accept').includes('text/html')) {
                    return caches.open(assetCache)
                        .then(cache => cache.match(req))
                        .then(resp => {
                            if (!!resp)
                                return resp
                            return caches.open(assetCache)
                                .then(cache => cache.match(req))
                        })
                }
                return caches.match(req)
                
            }) 
    ) 
})