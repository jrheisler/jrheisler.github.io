'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "71a16a85a83ada3091f7370a50be3348",
"/": "71a16a85a83ada3091f7370a50be3348",
"jrheisler.github.io/README.md": "3bbe98fedba3cbbfc95b14029146ab8a",
"jrheisler.github.io/.git/config": "06e60dbc3779fccfadbd4ea352ee8b76",
"jrheisler.github.io/.git/objects/33/096191f9fd216049bd63f86d356b716f86e98a": "5485c3e5bf5199b8ba661d8795814ea0",
"jrheisler.github.io/.git/objects/91/b1964a60798e690d20ac5d992ec49cc7791a2e": "f981405134bfa90f579b264ee50054fe",
"jrheisler.github.io/.git/objects/a6/2ffc6a131b296f2af5165e029acf3348ad08dd": "6584c8ec79a79d3f78f01e1d8b9963a9",
"jrheisler.github.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"jrheisler.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"jrheisler.github.io/.git/logs/HEAD": "f383446ce067f6e1b84f704ef7b9456e",
"jrheisler.github.io/.git/logs/refs/heads/master": "f383446ce067f6e1b84f704ef7b9456e",
"jrheisler.github.io/.git/logs/refs/remotes/origin/HEAD": "f383446ce067f6e1b84f704ef7b9456e",
"jrheisler.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"jrheisler.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"jrheisler.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"jrheisler.github.io/.git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
"jrheisler.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"jrheisler.github.io/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"jrheisler.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"jrheisler.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"jrheisler.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"jrheisler.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"jrheisler.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"jrheisler.github.io/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"jrheisler.github.io/.git/refs/heads/master": "b7f35a13f028b725ac2d85e0f7490a1f",
"jrheisler.github.io/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"jrheisler.github.io/.git/index": "00b167a8fbe86e420dc4cb46a8c77c4d",
"jrheisler.github.io/.git/packed-refs": "0f9ab866112c8a005e619ad73285318c",
"main.dart.js": "50114169aeda15df1931de6df19c3bac",
"README.md": "3bbe98fedba3cbbfc95b14029146ab8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "9c27e15dc24c473eb4675dc701a08ff3",
"icons/Icon-512.png": "299d90e39d6d7e7e8c9a20730731bd15",
"manifest.json": "6e58d7cf2029ab06c6baa477046128a2",
".git/ORIG_HEAD": "9e680aa0f1f2f93b01000f398e19e0b0",
".git/config": "004274561a5638832b4f384e80b27482",
".git/objects/95/30d32e0aaa7c91b3b7d4e889a54d652d5cc2b7": "2a2b1093822a8b8812ef31fd79dde597",
".git/objects/95/98d2de04d3687a6e1666f9275eabac808b8a70": "e56d141f903e6c9bb9f4327a5c961cf0",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/92/86e843ea055a807041027c86c723b3860a630f": "4682b6435cbc53db7c7c67a7a864b0f0",
".git/objects/66/ba0905ceae10bb9cc7fe717d5dd8b2476d7e39": "afbc4cf1efcdf8d70b639cab24b89d5a",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/03/3caedd01f035aa4d930c6c944e8e80c7466226": "b10182cfe58955e707a20dd5f6b9d89d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/c302be021e67022b66f5e6f6ef72211792b71d": "2a4648fd75c50cbda5355fcacca1dc95",
".git/objects/3c/4a92707b2ebc6b9138c6e257783cbd0415345f": "56a5c6b732fd8d117e5884e2d55520ad",
".git/objects/51/28289fcf2e6bfa55cb34ca0f70f67b2f99ce3f": "b6a241e1246782102dac08f3773c75e3",
".git/objects/51/31c796e3d545911c11319f7c46b8d4f6a75965": "2b200b9c4193654e23095caf847d08eb",
".git/objects/33/d058fb10c9ba8f3a57ec86cd728f46bbaaf2c1": "2a4a1bf2085fc8b330e5a3e085f3fca8",
".git/objects/33/096191f9fd216049bd63f86d356b716f86e98a": "5485c3e5bf5199b8ba661d8795814ea0",
".git/objects/a4/2d0965ea901d4cd76773653230083165cc5ac6": "900f5d6b30ebe78eaac624e313998d0d",
".git/objects/a3/1cd5989f4bce7621e1b9b4e27cb3f0375c5c1a": "bb411763879cecae2d5dd7d7217d21f0",
".git/objects/ad/8f342da997d0e467f1dd13e4c8158e47339f92": "451835de747c86bb1cf31788e0dcd5bb",
".git/objects/ad/96c6b3fcaddc3d763ec70b80634afac7a71550": "375b8b834ee83af59904ad5fc69e1279",
".git/objects/d7/7e0dcfed8ea562a461e4138136aed39cc247dd": "cf04a7fb8ae2f8cd9055c6f510738fc3",
".git/objects/b3/87e57d2a3b5d02b32deb0ba3f47343bd325126": "b45b2a6a4f8299ca22923fff3b124ecf",
".git/objects/da/452baf056f165f71c3327c414ca3ef7af95b5f": "8300fcf29d1e5f2784b40411ed3c72ec",
".git/objects/a5/c863d36a10bee18f163a75910383ee51af766a": "23ed0ba43ab1a6f610e7e1241c41b88e",
".git/objects/f4/db664973a986421278ec99e130f38312456410": "73d934244ef200349c40dc780e127b8f",
".git/objects/f3/ad02f18e22bfd0eb2e9f9ba8727716c3becb9a": "21a0bf355b9edd9503fed092530e810c",
".git/objects/c9/00096cbeb0b3ca99e91e4dafa6fe471f83ffc3": "8f01618fe15cafbdc40ba4e588efe7db",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fb/ae8dbfb0a996c646af7d6b5eb82ab7bb90c83f": "223e4b8a0434fa22d047e57a07d05131",
".git/objects/ec/e841b6c50b03231bf74a7622016e2acbb83150": "981f75f3266d1c23d4e5316409ea5fdc",
".git/objects/4e/4f0bb13ca2827cca6658b5fddc70b57e4c3f86": "0877569c39eaaa1eecc999fc68fe802d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/6b345b9b68d65dd3bc6cb6f5f22c73fc248dc3": "946d5be67a523cd77583afe89fc62625",
".git/objects/11/2645509894c41fd6871ec1ca0731d2a62ff396": "d67e537dee75dd6e7be869fe30897565",
".git/objects/16/0c1af0903a94ada55fab3158ef25851c13cf3d": "01f4f23e18a4195dcf315663024cdbde",
".git/objects/73/d79ca2a292bf082dd5bc40546b71fc318c0f5a": "c3a5b95954debe39dc7a817e87a1b520",
".git/objects/1a/412088c0f53029fbe37f83cc035798c155dd75": "f1c06dfa8d91b6fb62ab8fcf4da73677",
".git/objects/17/8618b7f0e466122f27e40ddf2081fd24c7375d": "069116694563864613df49e82a20ec14",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/4e00e5ccdb0ee84c4609fc490e23984d81280a": "047b120ee8b58f73bfab8a51b4003497",
".git/objects/21/742767e994124885d565404a948f88f0909ab3": "2c3ffe214706dc45c75ccce8e061bf77",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/2a/13eae3569535e88db72e3bf1008040271ca1f7": "526b0f1799bb4558b759413393712230",
".git/objects/2f/c31c9652b9a93aec26b4c90e06788c6fe142d0": "7824008e88218ecfa9cc78cf2f6c3ef3",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/91/b1964a60798e690d20ac5d992ec49cc7791a2e": "f981405134bfa90f579b264ee50054fe",
".git/objects/5e/8e1caae06e19403d2597c8935b5e133e572347": "69d0030de257ad4f102259771222f0b7",
".git/objects/08/9d406f15ab64034eef2052a28bcaafd815446d": "6fa4510baba7ede42a604353fe5cd5ba",
".git/objects/06/4f8509137fa7098a55896f650b97765be411a6": "7fd988226d5f48c45196bdf3c15aa8d8",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/b1/788bd6a15d7c171e1da6057b57a228f5394ead": "b5bfe7957ddb29e3140bd5b32fc48b33",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/2ffc6a131b296f2af5165e029acf3348ad08dd": "6584c8ec79a79d3f78f01e1d8b9963a9",
".git/objects/ef/83f8fbdbfe684da212feb3c89f02e168b1fbce": "11deb05a5b3069c3a4baee99041f9160",
".git/objects/c4/434a8ff39cf893bd781cba0ae15543484e7383": "f8d3a7c31a57c0d21d3669effe480496",
".git/objects/ea/e05c16a10962142ef79d7a655311c8753bfaee": "f4789dc06bbc9205005b2477e9b2cbbe",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/f7/a4063ac1d0f3685f7090a2b6a24e8e2a2bac62": "f3194cecba3fd22ef25fb9b182ea2aa9",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/41/27eaa111a03a8a159ab5d4c147b8d39c1bef41": "f9c60a646cb30b244397b8d0dbe58353",
".git/objects/41/1e28f86ba22912aaa049ac682de863a28db041": "24e049c1dd56973ec15e187c5078db38",
".git/objects/48/60fd0ad19858c8bb0d3e21a5526a1db0aee7e6": "c7fda0a4b3b0113496c2d1af6e4f4a83",
".git/objects/1e/5fc8c2149f2c9271e38297d991d6d704cac571": "3e6c5731ec83fbd99a6e68de7affa5ad",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/24/ecf49ef9689fc00dfef6410d649961e9cac319": "b3fe472f0499f1584adf3ad39de72546",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/8c/2025a7ec075745ad71f2d0791068dd58086492": "1ba5cfaa8286bffca42f127ca799f91c",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/7f/fbda874bf760f63d82282e8e7997f6dd008b62": "88705b9766dd0c549d700906a5b5e086",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/8e/007e1e3750f807f3874a971dc0dd84003bc0e6": "213b7f2282c727f08cdd00fbbfb282f2",
".git/objects/8e/9d2973b253e33eb97856d87ab3957ae8fb2fa9": "d9a88cd78b3ec5b74b7a2ec00a4152e8",
".git/objects/22/66b7664a15c2aea63b1cadb73a413763d083f4": "475daa592ceedb074aa8caf4a3393914",
".git/objects/25/e683067ab63cf729ae60137b469a4bb4d72306": "cb2e8a32a66924bfadd618a13fd3b8cc",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d84fb3f30e275a68be895ac0a568e890",
".git/logs/refs/heads/master": "d84fb3f30e275a68be895ac0a568e890",
".git/logs/refs/remotes/origin/master": "18c1a46b182047bb34eeaf7b06ae1de7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "4b50ec3b8a11491b3693c9857da82767",
".git/refs/remotes/origin/master": "4b50ec3b8a11491b3693c9857da82767",
".git/index": "4ccce4e93b6a20ce225e6a657d5d6517",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/FETCH_HEAD": "c22c4035dcab67d4e812b414ba74d716",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "b839866cf3e47d61955af7afa5fe5141",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
