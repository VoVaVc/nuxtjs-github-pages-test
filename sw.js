importScripts('nuxtjs-github-pages-test/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "nuxtjs-github-pages-test/_nuxt/307d5a0497481804c8c3.js",
    "revision": "2853ef70586e915517d17255c62fb17f"
  },
  {
    "url": "nuxtjs-github-pages-test/_nuxt/6b89a279e8ec9729667e.js",
    "revision": "dcde9f0c35498b0d3cdd1ec52530d593"
  },
  {
    "url": "nuxtjs-github-pages-test/_nuxt/768a7c26b7f47794e402.js",
    "revision": "389a0d0c309301c11b9534848a3a52e8"
  },
  {
    "url": "nuxtjs-github-pages-test/_nuxt/dd02f9122839358a7984.js",
    "revision": "7cd67de1caefaa978d855d321762e3e6"
  },
  {
    "url": "nuxtjs-github-pages-test/_nuxt/f8c2d79361ec377dfcc2.js",
    "revision": "74835479f59de0a463b972be9686475d"
  }
], {
  "cacheId": "nuxtjs-github-pages-test",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('nuxtjs-github-pages-test/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('nuxtjs-github-pages-test/.*'), workbox.strategies.networkFirst({}), 'GET')
