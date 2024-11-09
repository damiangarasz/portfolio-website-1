const assets = [
  "/",
  "/JS/hamburger.js",
  "/JS/search.js",
  "/img/bottom-image.jpg",
  "/img/icon-web.png",
  "/img/image-1.webp",
  "/img/image-2.webp",
  "/img/image-3.webp",
  "/img/image-4.webp",
  "/img/right-image.png",
  "/img/tight-image.webp",
  "/css/body.css",
  "/css/header.css",
  "/css/main.css",
  "/css/search-bar.css",
  "/main.js",
];

self.addEventListener("install", (event) => {
  event.waitUntill(
    caches.open("assets").then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open("assets").then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          console.log("Cache hit:", event.request.url);
          return cachedResponse;
        } else {
          console.log("Cache miss:", event.request.url);
          return fetch(event.request);
        }
      });
    })
  );
});

// TODO obejrzeć jeszcze raz film o PDW
