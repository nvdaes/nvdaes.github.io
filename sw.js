importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.recipes.pageCache();
workbox.recipes.offlineFallback({
  pageFallback: '/offline.html'
});