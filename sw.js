importScripts('https://vovavc.github.io/nuxtjs-github-pages-test/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "https://vovavc.github.io/nuxtjs-github-pages-test/6b89a279e8ec9729667e.js",
    "revision": "dcde9f0c35498b0d3cdd1ec52530d593"
  },
  {
    "url": "https://vovavc.github.io/nuxtjs-github-pages-test/8f796589e78cc8daf312.js",
    "revision": "1067c37d619d1008be4870fb09255743"
  },
  {
    "url": "https://vovavc.github.io/nuxtjs-github-pages-test/b273fd0179c750a0d889.js",
    "revision": "fac724b81e05edb8bc98e88596d00636"
  },
  {
    "url": "https://vovavc.github.io/nuxtjs-github-pages-test/c23bcbbe91847ac11a6e.js",
    "revision": "e6f9f7270a5accb448dab8b4d48e84c1"
  },
  {
    "url": "https://vovavc.github.io/nuxtjs-github-pages-test/dd02f9122839358a7984.js",
    "revision": "7cd67de1caefaa978d855d321762e3e6"
  }
], {
  "cacheId": "nuxtjs-github-pages-test",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('https://vovavc.github.io/nuxtjs-github-pages-test/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('./nuxtjs-github-pages-test/.*'), workbox.strategies.networkFirst({}), 'GET')
