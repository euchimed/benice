'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "34ae91709a53651cbdb7d1bf045f421f",
".git/config": "f0995265b9f3463fb821738fe62ca4a6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "290bfb5a66415fc3a164c3ca8ec4e3d0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc206b24b0efbb2ff407fc0cefdff1b5",
".git/logs/refs/heads/main": "63b9737020a61183a8f94b0a6c4a12f4",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/07/1b10dcb4b81c3cbba0dd617ce783bc5b06c01a": "33d49d537c8b7b28e08a23d366710f4f",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/e602677973d292699f0739de5a001ad0dd2498": "54b84dba1778e3f05fac49f3544db1ac",
".git/objects/19/7a472acc98b0f272e8c131e4d910750472fe2c": "2e36a0a5be47ffc0b0a104afcda60937",
".git/objects/1d/581dc876cd9853d1a009fe24ac309e18368257": "8b87582806aa130a3a49d71edb82dfb2",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/28/bb824e16a810db0495e7b3c367a04581e41bfb": "960dbb7e07f104316e2a6c011e53c742",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/b7d264fa57ede49f75661aafa7f9bd7807112e": "ed9837373573451235e7cacd47bf6d03",
".git/objects/33/1f3abf1ee5ebc1ad83ae754cdb59a7140aa996": "9537f2ff231175f0a8a479adf86a0b10",
".git/objects/3b/051cca416f32fae88f3e0ecfdee0059d601922": "8aede9f33a11e5e05d5e8eeb60aae8f7",
".git/objects/3b/1695dcbaa75b10cd059153ebe6a52d0c3e8339": "1d99e8cac7759f8d2b173a0cbb7d2226",
".git/objects/3b/aa27ad5d2a119a9ec403c2571337bb378575a3": "00d64283f77b5a02f5fd9b62222c1d64",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/9d3cbff30ca085bde58c497717cd3669768ac1": "81b48fbcd5424146a30f254d03cf1836",
".git/objects/50/d2e219be9a198685207ea9895d7773a992e4c5": "cc503b890f82b2d6a8b7c56e79649a14",
".git/objects/53/490c9258bc46b143dfe8b7faf0ce5343eded38": "8b9703a714b529b6bf8304200cf32a35",
".git/objects/57/e8f3bf32e505e00419977e547b48b1cfe85256": "65b0f33a66729f1e02a74a3a2cc5d027",
".git/objects/5a/b3d48c2e4821b898014b2bfd9f07b42ab67078": "4a7afe444916c65281c31ca18a0c7950",
".git/objects/64/b0e95cd32aa8ded9e568d2f03edcc6f49b7e7f": "52094457ff8c8cb11a2ed4b6bfe62224",
".git/objects/68/0dc961e11acdd915be2dcfbe9c273a97a83784": "c1c9960e1f00776c0f71b63ff9418441",
".git/objects/72/bde0312e74b7e94c77becdc1bafc4060c2ee18": "30ebb892d2cb51761b3543961ca28f78",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/2ec15660679b8a4bd8073b5870e4102222cfbc": "ab997d2193b02b06e9f37273922ca8b0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/c7b9e05e360b8d88b5dd7d52ed8418c8646f91": "db749ae175021c708aeee369f5adee8f",
".git/objects/7e/cd4498c199f3eb4d38b6c2d7a3a564a5700b15": "59bd596cfd337544b69b7ca074b365d0",
".git/objects/88/37b84b316bfa4f5c6eec9fee24e16c4a7aaee1": "96a3eb08ab0a561615780136ec81ca6c",
".git/objects/88/5c92bd4c2eb163226cec0bfe8d0321fc303bb8": "6b4785a9e32ecd2031d97020c107cdd3",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8c/89bb8fb3c73008122ff3cf6aa7798589a1056d": "9421ae8805276562b5bb77241e7dc316",
".git/objects/8d/ea98ba77102581b155e27bf043836dbfccf3eb": "749b78e21bcd64cc824369d05c293336",
".git/objects/99/b9d4c25f59e27a959bf265ed59e9be002ed004": "4a799c971ba94b09b4aadf4d0ecd869e",
".git/objects/9f/27e59361f2058d919171a06f32b2603e05b287": "ac6718d181e82805580fc9f6be729c7f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/b0/7e5feef57fe0b08720fb3d5ab1977696e8db45": "733820bd0274f135d2bd495e8e924736",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/9529cc1e90971946378b3d88bbdee802fd4be2": "0f955897b9a443cdd29c5ece99b6a3fd",
".git/objects/c4/141124fdb78b6dc9eec642231d20e67ed76f63": "996f60c747ed78e7af96f2b6a458b378",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d5/19dc45cdbb0f9ffe27b28b622137894e42a700": "cc5326df41ad44a7e6fe068d3c190f12",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/4d86d7ea47911f9d083b704ca79040111f111e": "3f69547ef79fb623f5eaca7baea91f44",
".git/objects/dd/c789f567361d84d554ecfdb883c84d6aa206d1": "4d2f6099dca7145d4a6776b8e233f51c",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e4/7ed6ea3ddf24f07d97bfc96c0cfb150a540a75": "a5af5ded1f351d9cfa39d3d0b3c2acc7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/29e929647bd206077a2bcbb31bdb5f6bd34158": "5c9079e0e1b9af4cfc61050b811f90dd",
".git/objects/f5/5924c266ae0488fff04b377245ae3d594f022f": "7e74fb8cd956cfc0d44a504afd399d84",
".git/refs/heads/main": "11aa322025c4e14460a7cdbe8c902a1c",
"assets/AssetManifest.json": "c5e956d6b1944a44a256cd08f67552a8",
"assets/assets/fonts/Cairo/Cairo-Bold.ttf": "28fb788ee6123377f5c93164e67eebd3",
"assets/assets/fonts/Cairo/Cairo-Regular.ttf": "882f12f7383f7b4be762259cc763fb64",
"assets/assets/fonts/PlayfairDisplay/PlayfairDisplay-Bold.ttf": "48ebb38b5445196e567f948e132230ca",
"assets/assets/fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf": "a96ecd13655587d30a21265c547cd8aa",
"assets/assets/icons/apps.svg": "99639af74d900f557a215096b239c542",
"assets/assets/icons/envelope.svg": "09ff13ab7cc563323bfe5794eb98c408",
"assets/assets/icons/facebook.png": "74265e5edadbafc0ffb101db1cdf228b",
"assets/assets/icons/google.png": "bc69e0101521c74e6658b9661f301981",
"assets/assets/icons/heart-outlined.svg": "d32bfea4eafb69c26e80b1756ea5290c",
"assets/assets/icons/heart.svg": "266018d6d9cac0e00bddddf4cc1dd288",
"assets/assets/icons/home.svg": "c25f832d5fa52a377e2b61e73ebe3d24",
"assets/assets/icons/list.svg": "ceb734c3ccec4f31725b8c0334b1489c",
"assets/assets/icons/lock.svg": "d9f45a5bf9fa968d92d04247a9bfaec7",
"assets/assets/icons/mobile-notch.svg": "6e91a1a6194bba51de5d26fc161c3b2b",
"assets/assets/icons/shopping-cart-add.svg": "0049196f57cda4a7e092e7a40b5cefb7",
"assets/assets/icons/shopping-cart.svg": "b995ff2ca1c1275f0af54889696a5095",
"assets/assets/icons/unlock.svg": "393b6c1ffe0eb0e3535b5285e6646e11",
"assets/assets/icons/user.svg": "d58d4d5a63e901fd55f3d9318dafb627",
"assets/assets/images/404-error.jpg": "a7e0e77367f660ec846d66753c81d6bb",
"assets/assets/images/background-login.jpg": "46c16e8ee722dd62b1b790ce0cd4639d",
"assets/assets/images/error.jpg": "8d0d2e2ee9c7543d59306694cb1582d2",
"assets/assets/images/logo.png": "072bc54bb2eb0c5996d189c6a77dca86",
"assets/assets/images/no-connection.jpg": "f89d1e47bc69387b90581917c107c03a",
"assets/assets/images/no-data.jpg": "029453a0a60e00c08f42670835638546",
"assets/assets/images/onboarding_one.jpg": "19c5d00a6980865555cfaa6f3772fda8",
"assets/assets/images/onboarding_three.jpg": "7409e80f62ebd1d99f7ba7f3f0ad9c2c",
"assets/assets/images/onboarding_two.jpg": "e79e15bdd58824554d43893f03c04fb3",
"assets/FontManifest.json": "17bd5ace91236c97115f87c98a2150a3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "87ad896c74dbf097f76aed23f1d89be9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "50469e01ea43ca7a2742f754add8564b",
"/": "50469e01ea43ca7a2742f754add8564b",
"main.dart.js": "4e9c49f9c8e5dcc2730abade98297e77",
"manifest.json": "cabade4ef61a971538cbd5366da347c5",
"version.json": "03a607b5a8693e6d8f130561528f4a78"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
