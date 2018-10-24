var dataCacheName = 'weatherData-v1';
var cacheName = 'weatherPWA-step-6-1';
var filesToCache = [
'/prototype/practice-pwa/',
'/prototype/practice-pwa/index.html',
'/prototype/practice-pwa/scripts/app.js',
'/prototype/practice-pwa/styles/inline.css',
'/prototype/practice-pwa/images/clear.png',
'/prototype/practice-pwa/images/cloudy-scattered-showers.png',
'/prototype/practice-pwa/images/cloudy.png',
'/prototype/practice-pwa/images/fog.png',
'/prototype/practice-pwa/images/ic_add_white_24px.svg',
'/prototype/practice-pwa/images/ic_refresh_white_24px.svg',
'/prototype/practice-pwa/images/partly-cloudy.png',
'/prototype/practice-pwa/images/rain.png',
'/prototype/practice-pwa/images/scattered-showers.png',
'/prototype/practice-pwa/images/sleet.png',
'/prototype/practice-pwa/images/snow.png',
'/prototype/practice-pwa/images/thunderstorm.png',
'/prototype/practice-pwa/images/wind.png'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    }));
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(caches.keys().then(function(keyList) {
    return Promise.all(keyList.map(function(key) {
      if (key !== cacheName && key !== dataCacheName) {
        console.log('[ServiceWorker] Removing old cache', key);
        return caches.delete(key);
      } // if
    }))
  }));
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  var dataUrl = 'https://query.yahooapis.com/v1/public/yql';

  if (e.request.url.indexOf(dataUrl) > -1) {
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response) {
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  } // if
});
