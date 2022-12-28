importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);
workbox.loadModule('workbox-strategies');
workbox.loadModule('workbox-routing');
workbox.loadModule('workbox-recipes');

setDefaultHandler(new workbox.strategies.NetworkOnly());
workbox.recipes.offlineFallback();
