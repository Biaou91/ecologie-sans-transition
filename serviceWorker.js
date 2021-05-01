const cacheName = "cache-v1";
const assets = [
                "/", 
                "/index.html", 
                "/style.css", 
                "/index.js",
                "/jquery.js",
                "/fonts/oswald-v35-latin-regular.ttf", 
                "/video/video.mp4", 
                "/video/videocarre.mp4",
            ];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            cache.addAll(assets);
        })
    );
});


// fetcher le cache
self.addEventListener("fetch", (e) => {
    console.log(e.request);
    e.respondWith(
      caches.match(e.request).then((cache) => {
        return cache || fetch(e.request);
      })
    );
  });
