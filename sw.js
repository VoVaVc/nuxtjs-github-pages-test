importScripts('/nuxtjs-github-pages-test/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxtjs-github-pages-test/_nuxt/307d5a0497481804c8c3.js",
    "revision": "2853ef70586e915517d17255c62fb17f"
  },
  {
    "url": "/nuxtjs-github-pages-test/_nuxt/64a00d8c0892962526b3.js",
    "revision": "218fa7bd3bd97782f712c40c7c0e5bb9"
  },
  {
    "url": "/nuxtjs-github-pages-test/_nuxt/6b89a279e8ec9729667e.js",
    "revision": "dcde9f0c35498b0d3cdd1ec52530d593"
  },
  {
    "url": "/nuxtjs-github-pages-test/_nuxt/ce239af73fd3cff12e80.js",
    "revision": "733889b9cb0af5548b1f79c668623273"
  },
  {
    "url": "/nuxtjs-github-pages-test/_nuxt/dd02f9122839358a7984.js",
    "revision": "7cd67de1caefaa978d855d321762e3e6"
  }
], {
  "cacheId": "nuxtjs-github-pages-test",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/nuxtjs-github-pages-test/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/nuxtjs-github-pages-test/.*'), workbox.strategies.networkFirst({}), 'GET')
