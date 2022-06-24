/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "00-log/00-intro.html",
    "revision": "a790ef9d52bd2418075e127655b38c64"
  },
  {
    "url": "01-computer-science/00-intro.html",
    "revision": "4ed9b54b9a2ad1da5105e8e41463b552"
  },
  {
    "url": "02-web-basic/00-intro.html",
    "revision": "a9db3e215aa8cc6854fe504d8321d378"
  },
  {
    "url": "03-Django/00-intro.html",
    "revision": "0d083df04cf5bd9f121ecdc16eb115d7"
  },
  {
    "url": "404.html",
    "revision": "a0b369ccf5581c9aee5ae21ca38dd55b"
  },
  {
    "url": "assets/css/0.styles.3027d9ef.css",
    "revision": "9092177a51b8a8d2a9d7f82ee26ab48e"
  },
  {
    "url": "assets/js/1.e8bcebc1.js",
    "revision": "2db85cb826604f23fb34e7ab66d0b2f8"
  },
  {
    "url": "assets/js/10.f3d7477a.js",
    "revision": "1dfceadfa9dc7f310d244025a45b5e11"
  },
  {
    "url": "assets/js/11.852fd662.js",
    "revision": "d23eb1969a19a063450f6414a1d774b6"
  },
  {
    "url": "assets/js/12.5e0202b6.js",
    "revision": "9dc4957a001065f710409114f18fec0d"
  },
  {
    "url": "assets/js/13.69ce978e.js",
    "revision": "b140d28a477c488cb1fd6da111a9a908"
  },
  {
    "url": "assets/js/14.3e7a3c29.js",
    "revision": "d82ebf10f0ed951b85032925d856e766"
  },
  {
    "url": "assets/js/15.49a6ab95.js",
    "revision": "91e8c923360683d3fec0fb867ea099f1"
  },
  {
    "url": "assets/js/16.f88e3806.js",
    "revision": "dd8679828832b63e4334b64c6f6812ed"
  },
  {
    "url": "assets/js/17.fc0c7797.js",
    "revision": "61ea9882035a3c269486dd37ae72215d"
  },
  {
    "url": "assets/js/18.15524b9d.js",
    "revision": "3e4b1300161baa3eea24b48824ab1398"
  },
  {
    "url": "assets/js/19.e02e4758.js",
    "revision": "04943a99a0e644b7c4f6a47f03fb10ad"
  },
  {
    "url": "assets/js/20.d760128f.js",
    "revision": "fa40c58ec2cdcb74fd7cb07c871bf393"
  },
  {
    "url": "assets/js/21.6ae2b9ae.js",
    "revision": "556737434b365f85d48bc26fe60dc161"
  },
  {
    "url": "assets/js/22.aa927e78.js",
    "revision": "dc6b8458c569a05e513e6efdf3227370"
  },
  {
    "url": "assets/js/3.a438beff.js",
    "revision": "8d674649aba9a7b413f51ffa5a3746ea"
  },
  {
    "url": "assets/js/4.4b12e7a4.js",
    "revision": "5fc6c2b0a5ac437ecf7c8f80c6f7e3fb"
  },
  {
    "url": "assets/js/5.c576b59c.js",
    "revision": "75f1a9aedb2ca9863a647275e736b038"
  },
  {
    "url": "assets/js/6.e418d465.js",
    "revision": "fdf3b6e26851aebf4aa8b93234146576"
  },
  {
    "url": "assets/js/7.1999aea8.js",
    "revision": "f4ea463fdecd987cf6a1f32bc33af971"
  },
  {
    "url": "assets/js/8.f3681f3a.js",
    "revision": "7e1d3ea6e99eea813f76eec70b6da3a3"
  },
  {
    "url": "assets/js/9.da472cc4.js",
    "revision": "ff3e554e75c30186bd8ff087070ecf12"
  },
  {
    "url": "assets/js/app.08ec743f.js",
    "revision": "b688c93e63ace510a7201ba83fa599c2"
  },
  {
    "url": "images/android-icon-144x144.png",
    "revision": "acc0a1194add7f4fc76a7bda9a259c12"
  },
  {
    "url": "images/android-icon-192x192.png",
    "revision": "329e07947df995d04c2869b43b023030"
  },
  {
    "url": "images/android-icon-36x36.png",
    "revision": "bbc3f09ecd42230bfa3c14da28bebbab"
  },
  {
    "url": "images/android-icon-48x48.png",
    "revision": "21d0238ace0b118abb26c70eb6c8a59d"
  },
  {
    "url": "images/android-icon-72x72.png",
    "revision": "529c99a5daeaf323399bfdf325103da8"
  },
  {
    "url": "images/android-icon-96x96.png",
    "revision": "bc23558ae3433b454f58abbbc357faa0"
  },
  {
    "url": "images/apple-icon-114x114.png",
    "revision": "75c920ecc0de2acf4f479754315d6bc3"
  },
  {
    "url": "images/apple-icon-120x120.png",
    "revision": "054eba4731605b2775dbfc3010139b45"
  },
  {
    "url": "images/apple-icon-144x144.png",
    "revision": "926beda6753f4a89769721324e17f8e7"
  },
  {
    "url": "images/apple-icon-152x152.png",
    "revision": "f65cde4ba4ce566765d9af87e9104cd7"
  },
  {
    "url": "images/apple-icon-180x180.png",
    "revision": "34fc143a82da5a94b07872ddd7f42397"
  },
  {
    "url": "images/apple-icon-57x57.png",
    "revision": "1364cfadd9b8c6730bbcd62eb9cede01"
  },
  {
    "url": "images/apple-icon-60x60.png",
    "revision": "5ea6b37ebb1b2a234ed9354e83d99a63"
  },
  {
    "url": "images/apple-icon-72x72.png",
    "revision": "529c99a5daeaf323399bfdf325103da8"
  },
  {
    "url": "images/apple-icon-76x76.png",
    "revision": "e13d9f699f2c698075bea46452f52a48"
  },
  {
    "url": "images/apple-icon-precomposed.png",
    "revision": "33adb5157508491bd15a1ddee8b01c73"
  },
  {
    "url": "images/apple-icon.png",
    "revision": "33adb5157508491bd15a1ddee8b01c73"
  },
  {
    "url": "images/favicon-16x16.png",
    "revision": "5dfd71393348bd38c343f8f44bcc13c1"
  },
  {
    "url": "images/favicon-32x32.png",
    "revision": "646b1f5bd42fe1bfc6b2bc4ad4bf8821"
  },
  {
    "url": "images/favicon-96x96.png",
    "revision": "25544a4ad594921ec44b627bc400d2bf"
  },
  {
    "url": "images/ms-icon-144x144.png",
    "revision": "926beda6753f4a89769721324e17f8e7"
  },
  {
    "url": "images/ms-icon-150x150.png",
    "revision": "b012bef9e881a0c854357db4a18fc719"
  },
  {
    "url": "images/ms-icon-310x310.png",
    "revision": "e1d2eeda809eabc6638cc10c2383e7b1"
  },
  {
    "url": "images/ms-icon-70x70.png",
    "revision": "ca8ba1416c7c47431419b381e8398341"
  },
  {
    "url": "index.html",
    "revision": "917fb9c8fc857a1f68426d675226ed9a"
  },
  {
    "url": "intro.html",
    "revision": "bd5a8d7c88f8b8992c76616d1c4c4a05"
  },
  {
    "url": "kr/00-log/01-education.html",
    "revision": "b9b791832f396e1f164d43c110536e49"
  },
  {
    "url": "kr/00-log/02-teu-med.html",
    "revision": "dcbd78061ef9aee755bf5b4cdeb84e31"
  },
  {
    "url": "kr/00-log/03-TIL.html",
    "revision": "0dc41662daa8b7f489f7879b85665d8c"
  },
  {
    "url": "kr/01-computer-science/intro.html",
    "revision": "70a95be566f89ee6a6104ae4e971c25e"
  },
  {
    "url": "kr/index.html",
    "revision": "11a3150b0c66d8adf70752959e572245"
  },
  {
    "url": "template.html",
    "revision": "99e4a02cd3f6a2984be45eb39d801c01"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
