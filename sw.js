importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);
workbox.loadModule('workbox-strategies');

const imageRoute = new Route(({ request }) => {
  return request.destination === 'image'
}, new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'images'
}));

// Handle scripts:
const scriptsRoute = new Route(({ request }) => {
  return request.destination === 'script';
}, new workbox.strategies.NetworkFirst({
  cacheName: 'scripts'
}));

// Handle styles:
const stylesRoute = new Route(({ request }) => {
  return request.destination === 'style';
}, new workbox.strategies.CacheFirst({
  cacheName: 'styles'
}));
// Handle pages:
const pagesRoute = new Route(({ request }) => {
  return request.destination === 'page';
}, new workbox.strategies.NetworkFirst({
  cacheName: 'pages'
}));

// Register routes
registerRoute(imageRoute);
registerRoute(scriptsRoute);
registerRoute(stylesRoute);
registerRoute(pagesRoute);
