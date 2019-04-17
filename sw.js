importScripts('./nuxtjs-github-pages-test//workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "./nuxtjs-github-pages-test/3f5f92e4ce74ae1e5280.js",
    "revision": "78541dbad8b2548c30e2a8a57760685b"
  },
  {
    "url": "./nuxtjs-github-pages-test/6b89a279e8ec9729667e.js",
    "revision": "dcde9f0c35498b0d3cdd1ec52530d593"
  },
  {
    "url": "./nuxtjs-github-pages-test/b273fd0179c750a0d889.js",
    "revision": "fac724b81e05edb8bc98e88596d00636"
  },
  {
    "url": "./nuxtjs-github-pages-test/dd02f9122839358a7984.js",
    "revision": "7cd67de1caefaa978d855d321762e3e6"
  },
  {
    "url": "./nuxtjs-github-pages-test/fd849fc4866f5c4c2fe0.js",
    "revision": "4611cb249a7117f7fa6a2ec353878eae"
  }
], {
  "cacheId": "nuxtjs-github-pages-test",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('./nuxtjs-github-pages-test//.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('./nuxtjs-github-pages-test/.*'), workbox.strategies.networkFirst({}), 'GET')
