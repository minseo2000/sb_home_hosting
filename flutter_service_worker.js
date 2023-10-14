'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9a33fa293bc57c21127de43299be8c4e",
"index.html": "90fcd91b5c52ae92f3430d7a8ade92ea",
"/": "90fcd91b5c52ae92f3430d7a8ade92ea",
"main.dart.js": "aa97c82b53f131b0c30a311fae31430c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "354310c1bf781634b81c5073caa3ccc2",
"assets/AssetManifest.json": "e4db52f41dc4e41a6b1e00b177c086b4",
"assets/NOTICES": "96a1709b7b0efd3693d64f4b5446d6e5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c5a51acae2d4052b63ab35b3bcfd5e9c",
"assets/fonts/MaterialIcons-Regular.otf": "3c0cf69d44602bdfe3f523c37d3466be",
"assets/assets/images/bg_greeting.jpg": "aa592b825f638686829433780dfc8866",
"assets/assets/images/face05.png": "91f1d9188e08a303fa12a6421878b550",
"assets/assets/images/factory.jpg": "d9df190b36bfa3b4a0381c1a436e2d5c",
"assets/assets/images/face04.png": "cb19cff11819097dc87d0deac95d275c",
"assets/assets/images/xpro_vgs.png": "a81614b70c0c2204aa10fa294cd6ac0e",
"assets/assets/images/sub_visual06.jpg": "45d11a95339f2c78ac634b1e798a71eb",
"assets/assets/images/sub_visual04.jpg": "0f608a948533ea6580611213b00cc42b",
"assets/assets/images/xpro_flo_b.png": "795e58a603131f435f15994ca0dd24c2",
"assets/assets/images/newmox_pnbg.png": "242df4606296b714fc831537d07dea48",
"assets/assets/images/atlas_bs_b.png": "caf7745ab926495878bd53354d25808e",
"assets/assets/images/solite_flo_b.png": "5fab04d22c49da4fe209fc58531fb72c",
"assets/assets/images/sub_visual05.jpg": "e5a442323bd3c4357790bdcdb08d5b44",
"assets/assets/images/sub_visual01.jpg": "289fe1337121ac8626120142bd41411e",
"assets/assets/images/face03.png": "e13b9d43201c847e820177a4f20b1ab5",
"assets/assets/images/face02.png": "65de7fe4fdca64f9abc31aefda9f0142",
"assets/assets/images/sub_visual02.jpg": "3fe5daabe7d100aa335ef8e20611931d",
"assets/assets/images/rocket_rp_b.png": "3fc6471533cf3ec3eef3f38628daf0bc",
"assets/assets/images/about_img_file.jpg": "c88d2efca6923416fd07cc9f82b7b3a6",
"assets/assets/images/atlas_kb_b.png": "fbe8bbda991c57c4badb4b8d179136b6",
"assets/assets/images/newmox_pnc_b(gel).png": "98671d81e7f6cf5cd487d3a5f3aae41f",
"assets/assets/images/face01.png": "eb8b3f0edbdb6733a7f36471982b55d0",
"assets/assets/images/sub_visual03.jpg": "9841ef493dd681ffc64bd2a484af2aaa",
"assets/assets/images/xpro_agm_b.png": "7464d237ab8426a281360510b3b5b6c4",
"assets/assets/images/solite_agm_b.png": "45320b4e07dcbc260216d225f60648fe",
"assets/assets/images/work_page_bg.jpg": "c48e385eaab6eb2bc8a0ca4ac850e362",
"assets/assets/images/main_banner_img09.jpg": "c6b2063f771d2268a480dcaec358ee44",
"assets/assets/images/rocket_logo.png": "455adf0d104dedd9d865692cdaa36580",
"assets/assets/images/text-bg.png": "8ff74a5abd7eebcb9db4e17d1a37405d",
"assets/assets/images/company_info_bg_company.jpg": "0baf26fa82e175ffe674462aea4876f3",
"assets/assets/images/car-b-04.jpg": "6d774bcd4a9092524d3b6e3827ed4ad9",
"assets/assets/images/us_logo.png": "7b6b669096b3840f22c13f6b3350468d",
"assets/assets/images/rocket_flo_b.png": "0d7e560e99597d98211c40a5f1032548",
"assets/assets/images/trojan_logo.png": "dbd2769c2338e7f5e10152015b8e4d72",
"assets/assets/images/ssangyong.jpg": "0f42564b0ebb0b9f82ab7689d6c5edf9",
"assets/assets/images/tl_center_banner_left.jpg": "cbc93ca38ef93c109933029c574d93ce",
"assets/assets/images/delkor.jpg": "3c57f257965292cd755d6b0671a96a24",
"assets/assets/images/gm.jpg": "67ac2473d123ccde56a8c62a10f36bc8",
"assets/assets/images/logo.png": "c171d061ffa0963d442135453c10ec61",
"assets/assets/images/delkor_hica_b.png": "1f55658a2d46e898f299f55e489c5c69",
"assets/assets/images/car-b-02.jpg": "bf50690d293b5c9531291ba7801af7e4",
"assets/assets/images/xpro.jpg": "aebd2df9cae621a7c221203dfa469351",
"assets/assets/images/delkor_flo_b.png": "00c9d5e4302a42dc0b7694464b1682ee",
"assets/assets/images/newmox_pnc_b.png": "c1a2ca2c7a7044f60dab8ecde34f10c9",
"assets/assets/images/car-b-03.jpg": "b2eb0019c9f28ed2d11f8c074e9e554d",
"assets/assets/images/newmox_upn.png": "ef61af6d109c54de2615046268147220",
"assets/assets/images/atlas.jpg": "8ba6d59e507ac52b9bd39f30bc920e3e",
"assets/assets/images/car-b-01.jpg": "1ab00c6c7e7614760387f35cd7ba58ca",
"assets/assets/images/atlas_agm_b.png": "3a293563d0c6744218733a37bd7cd09c",
"assets/assets/images/XP_R1.pdf": "1a3999b1aaafc4a66a69d4076c9956b7",
"assets/assets/images/atlas_itx_b.png": "39b3c20b3d08a7e4bc7909afc53c13b3",
"assets/assets/images/movie_bg.jpg": "eb039513dec602fe91033dc124c92b09",
"assets/assets/images/rocket_agm_b.png": "8ba433635a8fc53940ebb75aaac9cf97",
"assets/assets/images/sns_icon/instagram.png": "c7f1ab465363f491eac7c48e3483c10c",
"assets/assets/images/sns_icon/twitter.jpg": "66a4a7b4d383ecba28d896058fe0817c",
"assets/assets/images/sns_icon/thread.jpg": "a97433a4de2a52b20abfa0c03264e322",
"assets/assets/images/sns_icon/kakao.png": "d65f1e9ecbeb3f1e45fc15dd6d9ff8e9",
"assets/assets/images/rocket_es_b.png": "63e97489b02797b16f27e98bba8efc34",
"assets/assets/images/share_twitter.png": "071e33e54712261cf457b304d5fb7a19",
"assets/assets/images/atlas_kbx_b.png": "2d0b9a0571f911e9d4509914e5f79702",
"assets/assets/images/delkor_agm_b.png": "8f2039405754675699b8107d0f441a36",
"assets/assets/images/rocket_vgs.png": "8483be708d63df4752f47dfaf3bf1972",
"assets/assets/images/atlas_flo_b.png": "5ac8e7c975739c27fad58b030f5c4aad",
"assets/assets/images/organization.png": "b1c2ed0443d84c71511c69f33d192a01",
"assets/assets/images/newmox_pnb_b.png": "f7656ad80fc684b4a370ece4726068a1",
"assets/assets/gallery/img9.jpg": "f82c51edefb3e8148eeb1279f6967b0b",
"assets/assets/gallery/img8.jpg": "e391e00b47c26ba144cf2ef43a58ab92",
"assets/assets/gallery/img5.jpg": "425e3d10bf8d46ccb025bb41d2e8086a",
"assets/assets/gallery/img4.jpg": "b892eb8b78a43fae584ed25e8f19b283",
"assets/assets/gallery/img6.jpg": "8eaeb721b1e27dd830d35a8e4ac271b9",
"assets/assets/gallery/img7.jpg": "f6b1558850aeaf603d968741c05140f6",
"assets/assets/gallery/img3.jpg": "360329de16c4dbc066f6a76aa538419f",
"assets/assets/gallery/img2.jpg": "9fec3fdf10b0997f309592e185a7ea74",
"assets/assets/gallery/img1.jpg": "14808c54fa44ba4cf9dedbea92b78c2c",
"assets/assets/gallery/img16.jpg": "c35ee58b467ad4ca19447a3c306c0ab1",
"assets/assets/gallery/img14.jpg": "cead652ae17e3846d3fcd6764dc4f154",
"assets/assets/gallery/img15.jpg": "6ec91f6138b58acc393b82af90c27495",
"assets/assets/gallery/img11.jpg": "73e349daa74213c3ad47b3fd22ba98ca",
"assets/assets/gallery/img10.jpg": "bb63802a014f698dabba2c721eb2b232",
"assets/assets/gallery/img12.jpg": "d04167e2807b5517fdcc117113090da4",
"assets/assets/gallery/img13.jpg": "7ee9d3b95096f6bfd0e516f1fd319827",
"assets/assets/pdf/Company%2520Profile(SB%2520Tech)-221222.pdf": "304bfe5b083af18f64a64185613c37b5",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
