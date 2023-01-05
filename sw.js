const addResourcesToCache = async (resources) => {
  const cache = await caches.open('v1');
  await cache.addAll(resources);
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    addResourcesToCache([
      '/web_mobile_tp1/',
      '/web_mobile_tp1/index.html',
      '/web_mobile_tp1/index.css',
      '/web_mobile_tp1/app.js',
      '/web_mobile_tp1/logo.png',
    ])
  );
});

self.addEventListener('fetch', () => console.log('fetch'));
