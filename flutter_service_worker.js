'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e96ffbc3c0ebfcd47167037841c69b26",
"version.json": "9e1efd4735fb681eef211e45bb73d9d6",
"index.html": "254ff5e8cb2128f4280b9d8545be55f5",
"/": "254ff5e8cb2128f4280b9d8545be55f5",
"main.dart.js": "b6932ab5197255037eafdd8fcfa4b3ca",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ddb3a5a35d0c473c5ab6b4302028f958",
".git/config": "b5aefeb7a3c12bc1e77d8f4fc07df10b",
".git/objects/0d/2c5a6cb830c64dc0f685ac93dddf0e2a18e592": "44dd3b6c9582679714ac24ae6bcb3c78",
".git/objects/03/47b1002d81a52525f76a9d2b9ce37cd476ace7": "1ce1aae36987bcb4c33d933e65c30ed0",
".git/objects/04/e7eb9bb12a63b1601e76a6811e7615cd758a49": "dc7c055eed07b8c8a91c49948715b4e7",
".git/objects/35/f59c4ac56743405fc490ef3d77de3c7fc272b7": "810ed03757f2913fbb90aff56cc1cb66",
".git/objects/3d/8989a2a12e0fab17ab2cd0766ad1874ed2a589": "0929de7bd35902e20ae854686e8c36aa",
".git/objects/9d/ed6592e95436d00b0e791511b9b52a111f98d3": "21d1725049bd27c4f91404ce0eafc712",
".git/objects/a3/a4ab7862aec81e4f07b9ea8c945adec4e01362": "bdcbe1ef491e12a51bf317d06e5a71b4",
".git/objects/ac/3dbcca52002ee1da077dc55aecd322a5e232d9": "892f0fda2829b19a3c611f2a25288140",
".git/objects/d7/2e0a0b2e65927927b4f46380459e26c121c83e": "c01847ecea8067fd6eae4d33036c5070",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/7c4658fc5e281527d57ea2a8a1f1c1f7f706e8": "23fe0347b9da4bbcccb83a0bc9928d26",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/4468bbe27c2acbf73498b7bbd2a526d182ea67": "58ec9deae9bd455b2053979a7b76f1c3",
".git/objects/c6/dba31c8d7e301b4f236f16fd18f4a4fa07fe64": "773e3c050c7ec512c2ca484e2b3db604",
".git/objects/16/2818a80bf032d7cb94f393988380c568fc4a57": "0d3aaa210a0aa06df99a0a966c86315a",
".git/objects/1f/0daf12e22beded0cc2829708953ae7cadfd04f": "efbb097ed88132e7b5d58fd4920248f4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1a/b7809b36db799a155e5b80423cadf55f806767": "62291874b10954622bcebac83422cd3c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/86087a484227e0cb41c9176cbfb0d1a3629240": "2ac39f69e5d44d5f6ca77e0138521b77",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/729abcedd69c6063f4a7bf414b9e47442d5d28": "45df0fe2b8824f23486c6e2441e87a8e",
".git/objects/6b/c9cf32692d86948253dbccfa0dab7fa9a1361f": "feff70aa0eaded1dfdf5cb1d86d12140",
".git/objects/3f/4d8610a05c23297cd195290e6fd92c874c5097": "88e164560f673ef5835b095ed98b3144",
".git/objects/08/309a0b02dff92236495cb4cde80c9585f9762e": "e42d7c89e9405f3b93f7b6a6400de0d0",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/90b42b8e0909cee49c8f9a3b696e948bbe8662": "71d37d965d85e4d23d7925a61a086925",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/acfa6ed9dae28a76762b290f4b3aa63f9d928f": "a841986d0191222734a24cedf1aa0e8e",
".git/objects/b6/d4fa247fc6c4429c7c1d3a3eb802bff852ceef": "3d99d26a5a57570fec9940cf84762c29",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/906db97d3dbf7a794931872d1d1a5b7d2e03db": "8d49c53258c62a7c1431cfb9b087d9bf",
".git/objects/e6/2764fb7e232b1f6d79e8520c018fe1944aa42e": "4db12d28d83a4aaf47ae91a419fffe1b",
".git/objects/e8/59585458d9cff733380e2076cf44902136f364": "15c9d4996d17644cef41b94355fce7ad",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/a22fd6a4d9b3ddc66081249baebff6f055efcb": "0a53ff8c6f7f66ae350f64095e07bfb2",
".git/objects/48/54578ef0f5eabef25b0025d8719d2f5fec7327": "5068278592bf7f01368234916cca175e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8e/f721f040810178bfdbae52babf1431ead3730b": "643f8338d2e7ef44b70cf15581f0c446",
".git/objects/22/b9d0ee85b749d89b07914ec69c320eeb7e721e": "e1ea85b7446d43a8f423b9034f8689b3",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1b6f10ce6f9b4458c1e50c4c792aff2",
".git/logs/refs/heads/main": "765d04291134e4adddf3cc66a057fc06",
".git/logs/refs/remotes/origin/main": "c81cce7376eca77a44e162b353ce507e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d5c2bbcc845fac92a1e9279b0ec03ff0",
".git/refs/remotes/origin/main": "d5c2bbcc845fac92a1e9279b0ec03ff0",
".git/index": "fb143ab0d5d0990674696e020227bf34",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "b292f843079b77a7bac179f4080d5253",
"assets/NOTICES": "90a91c5ccaffe1482b7a731dffdcd9b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "5ddc8df8fe0e297a6fe8bab06e8be47e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "af95b214f81f72678b9d7ba4d522268a",
"assets/fonts/MaterialIcons-Regular.otf": "df4df36025cbc65936994cf4d60382d8",
"assets/assets/pics/pic1.png": "ed8a962516b402b95cac04c7849786e7",
"assets/assets/pics/pic2.png": "94a27c9ced7c4231733ca5c8bc05246e",
"assets/assets/pics/pic_f.png": "5856cecea7c5c37c62769d410235dabe",
"assets/assets/pics/pic.png": "af60b5088b9562d10b9dcbc6ed662d6d",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "07d1cc991d9e350f595f8c1c213bc5d7",
"canvaskit/canvaskit.js.symbols": "8d1bd5cff406d02f11e3df1b7f231069",
"canvaskit/skwasm.wasm": "3a9f6a4ac1614369f188c0caa93122f4",
"canvaskit/chromium/canvaskit.js.symbols": "173d584980c3dd230b358fcd5eec12c1",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "73d32c2ea06c7c9d9fc4f2df1b8c8eeb",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "e7cf3ec5207fca3cc66003059fbe2dc8",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
