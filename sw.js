importScripts('./nuxtjs-github-pages-test/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "./nuxtjs-github-pages-test/_nuxt/6b89a279e8ec9729667e.js",
    "revision": "dcde9f0c35498b0d3cdd1ec52530d593"
  },
  {
    "url": "./nuxtjs-github-pages-test/_nuxt/a447ed1b2b3488107b5b.js",
    "revision": "2e65a01e77384479004e3db3f4dc45dd"
  },
  {
    "url": "./nuxtjs-github-pages-test/_nuxt/b273fd0179c750a0d889.js",
    "revision": "fac724b81e05edb8bc98e88596d00636"
  },
  {
    "url": "./nuxtjs-github-pages-test/_nuxt/d8ab98dbe8a2d01ee1b0.js",
    "revision": "ae45bf0d31d228c9459fec47114ed597"
  },
  {
    "url": "./nuxtjs-github-pages-test/_nuxt/dd02f9122839358a7984.js",
    "revision": "7cd67de1caefaa978d855d321762e3e6"
  }
], {
  "cacheId": "nuxtjs-github-pages-test",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('./nuxtjs-github-pages-test/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('./nuxtjs-github-pages-test/.*'), workbox.strategies.networkFirst({}), 'GET')
