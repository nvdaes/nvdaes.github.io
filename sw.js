importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);
workbox.routing.setDefaultHandler(
  new workbox.strategies.NetworkOnly()
);

workbox.recipes.offlineFallback({
  pageFallback: '/offline.html'
});