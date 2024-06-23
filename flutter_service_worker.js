'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "22139959e47577673e9cf4a252a6d653",
"assets/AssetManifest.bin.json": "0d39bb0e21797ddb97a2d754edfadd5d",
"assets/AssetManifest.json": "27692b5563db7bc25cbea2878be7f3ab",
"assets/assets/gallery/img1.jpg": "14808c54fa44ba4cf9dedbea92b78c2c",
"assets/assets/gallery/img10.jpg": "bb63802a014f698dabba2c721eb2b232",
"assets/assets/gallery/img11.jpg": "73e349daa74213c3ad47b3fd22ba98ca",
"assets/assets/gallery/img12.jpg": "d04167e2807b5517fdcc117113090da4",
"assets/assets/gallery/img13.jpg": "7ee9d3b95096f6bfd0e516f1fd319827",
"assets/assets/gallery/img14.jpg": "cead652ae17e3846d3fcd6764dc4f154",
"assets/assets/gallery/img15.jpg": "6ec91f6138b58acc393b82af90c27495",
"assets/assets/gallery/img16.jpg": "c35ee58b467ad4ca19447a3c306c0ab1",
"assets/assets/gallery/img2.jpg": "9fec3fdf10b0997f309592e185a7ea74",
"assets/assets/gallery/img3.jpg": "360329de16c4dbc066f6a76aa538419f",
"assets/assets/gallery/img4.jpg": "b892eb8b78a43fae584ed25e8f19b283",
"assets/assets/gallery/img5.jpg": "425e3d10bf8d46ccb025bb41d2e8086a",
"assets/assets/gallery/img6.jpg": "8eaeb721b1e27dd830d35a8e4ac271b9",
"assets/assets/gallery/img7.jpg": "f6b1558850aeaf603d968741c05140f6",
"assets/assets/gallery/img8.jpg": "e391e00b47c26ba144cf2ef43a58ab92",
"assets/assets/gallery/img9.jpg": "f82c51edefb3e8148eeb1279f6967b0b",
"assets/assets/images/2vagm1.png": "9322f8c61965e3e0565cfff2fe7e4fbb",
"assets/assets/images/2vagm2.png": "83f17bd68523181c7c9f5f1457f20758",
"assets/assets/images/2vagm3.png": "f3e6392f93dc97899c59c76cf7410e88",
"assets/assets/images/2vagm4.png": "edb93de44b135cc46ca872b8cabd98d0",
"assets/assets/images/2vgel1.png": "96ab36da435830960f7c3a51b8422cdd",
"assets/assets/images/2vgel2.png": "9a7361361ddac76b049bb3060627dcf8",
"assets/assets/images/agm1.png": "78d44fb852281232122c1b07f80a4ea0",
"assets/assets/images/agm2.png": "7d6f716778690cdd5e0edc87cd33dd46",
"assets/assets/images/agm3.png": "a4d51dd7913f6f7c6a955b032795ea55",
"assets/assets/images/agm4.png": "f2ce23b8c71ce4cc59f01b30e9edc07f",
"assets/assets/images/agm5.png": "a4ae577e5d2ffde6d801e30c12c65485",
"assets/assets/images/agm_delkor.png": "80792e02221503b936e520db1cdc92ca",
"assets/assets/images/atlas.jpg": "d82af2bdd02cb90d36254d6a50dc10d3",
"assets/assets/images/atlas_agm.png": "ca038d290e701fd2c2888c0e4c06171e",
"assets/assets/images/atlas_agm_b.png": "3a293563d0c6744218733a37bd7cd09c",
"assets/assets/images/atlas_bs_b.png": "caf7745ab926495878bd53354d25808e",
"assets/assets/images/atlas_bx.png": "3f078bbce615dc1c8ff194da8ddea439",
"assets/assets/images/atlas_bx_bus.png": "8548779839886303a06afb28ba8c06d1",
"assets/assets/images/atlas_flo_b.png": "5ac8e7c975739c27fad58b030f5c4aad",
"assets/assets/images/atlas_itx.png": "278a3130766f929a05c430dcef752acf",
"assets/assets/images/atlas_itx_b.png": "39b3c20b3d08a7e4bc7909afc53c13b3",
"assets/assets/images/atlas_kbx_b.png": "2d0b9a0571f911e9d4509914e5f79702",
"assets/assets/images/atlas_kb_b.png": "fbe8bbda991c57c4badb4b8d179136b6",
"assets/assets/images/atlas_sb.png": "86ceab948acbeeb28d902dcc49e5c883",
"assets/assets/images/bf_branch_image.png": "1b13ceb24ce6abd097ac5479844c1901",
"assets/assets/images/bf_icon.png": "c171d061ffa0963d442135453c10ec61",
"assets/assets/images/bg_greeting.jpg": "aa592b825f638686829433780dfc8866",
"assets/assets/images/calcium_delkor.png": "0b3bc28503c3ec4bbcd23f45c87543ee",
"assets/assets/images/car-b-01.jpg": "1ab00c6c7e7614760387f35cd7ba58ca",
"assets/assets/images/car-b-02.jpg": "bf50690d293b5c9531291ba7801af7e4",
"assets/assets/images/car-b-03.jpg": "b2eb0019c9f28ed2d11f8c074e9e554d",
"assets/assets/images/car-b-04.jpg": "6d774bcd4a9092524d3b6e3827ed4ad9",
"assets/assets/images/company_info_bg_company.jpg": "508198be30f9bb1768d06b276eb2c35d",
"assets/assets/images/delkor.jpg": "6fc7918042cded6b3535c08716ff03ed",
"assets/assets/images/delkor_agm_b.png": "8f2039405754675699b8107d0f441a36",
"assets/assets/images/delkor_flo_b.png": "00c9d5e4302a42dc0b7694464b1682ee",
"assets/assets/images/delkor_hica_b.png": "1f55658a2d46e898f299f55e489c5c69",
"assets/assets/images/face01.png": "07047f22ed5bc21223703d5a3f3c25a8",
"assets/assets/images/face02.png": "9bb9a808d17665c4ceef59badfa97f22",
"assets/assets/images/face03.png": "e13b9d43201c847e820177a4f20b1ab5",
"assets/assets/images/face04.png": "266de111ff5ee721231ff49368c1919d",
"assets/assets/images/face05.png": "94ccdb083df3a444e604ddcd35c515a2",
"assets/assets/images/factory.jpg": "d9df190b36bfa3b4a0381c1a436e2d5c",
"assets/assets/images/gm.jpg": "7721675428a6b53b270aefaf6e8c94d1",
"assets/assets/images/hica100.png": "67510c477d97146c8b9c003d0820c9bf",
"assets/assets/images/history_img.png": "0d0ea321eaca059b367ab3999bdc0fc8",
"assets/assets/images/logo.png": "c171d061ffa0963d442135453c10ec61",
"assets/assets/images/logo_sbtech.png": "400ee899dc2d4f5bcd4f116af010a2b8",
"assets/assets/images/mainpage.gif": "7d44ab4dbcce3cce50cf4ac4eae9857c",
"assets/assets/images/mainpage2.png": "8ff74a5abd7eebcb9db4e17d1a37405d",
"assets/assets/images/mainpage3.jpg": "c88d2efca6923416fd07cc9f82b7b3a6",
"assets/assets/images/main_banner_img09.jpg": "c6b2063f771d2268a480dcaec358ee44",
"assets/assets/images/movie_bg.jpg": "d773e08065726256aaaabdfb12501d8b",
"assets/assets/images/newmox.png": "d7d13e193f5642fc5819bed35abc1293",
"assets/assets/images/newmox_pnbg.png": "242df4606296b714fc831537d07dea48",
"assets/assets/images/newmox_pnb_b.png": "f7656ad80fc684b4a370ece4726068a1",
"assets/assets/images/newmox_pnc_b(gel).png": "98671d81e7f6cf5cd487d3a5f3aae41f",
"assets/assets/images/newmox_pnc_b.png": "c1a2ca2c7a7044f60dab8ecde34f10c9",
"assets/assets/images/newmox_upn.png": "ef61af6d109c54de2615046268147220",
"assets/assets/images/organization.png": "b1c2ed0443d84c71511c69f33d192a01",
"assets/assets/images/premier_delkor.png": "14e24ef9f533dee205076dbfea179b71",
"assets/assets/images/rocket_agm.png": "42f957a02f4e0df1ff80b91092d7b30d",
"assets/assets/images/rocket_agm_b.png": "8ba433635a8fc53940ebb75aaac9cf97",
"assets/assets/images/rocket_boat.png": "601b88e274349d326e79011bcffd6233",
"assets/assets/images/rocket_es_b.png": "63e97489b02797b16f27e98bba8efc34",
"assets/assets/images/rocket_flo.png": "0adbd35b49dc5d3e847150667d92cc98",
"assets/assets/images/rocket_flo_b.png": "0d7e560e99597d98211c40a5f1032548",
"assets/assets/images/rocket_gb.png": "5f95cc29b771561929350af219610a9a",
"assets/assets/images/rocket_gp.png": "c2a618c2452f1817103ae89b9073a81f",
"assets/assets/images/rocket_idus.png": "a5a933b7e7e7de063add1f203d1e1a6c",
"assets/assets/images/rocket_logo.png": "455adf0d104dedd9d865692cdaa36580",
"assets/assets/images/rocket_motor.png": "5f310d7a4531b7c5970fe3bc9325bc94",
"assets/assets/images/rocket_rp_b.png": "3fc6471533cf3ec3eef3f38628daf0bc",
"assets/assets/images/rocket_taxi.png": "efb4a2bd91e4e78e3dd8385f5f73d8af",
"assets/assets/images/rocket_vgs.png": "8483be708d63df4752f47dfaf3bf1972",
"assets/assets/images/rp.png": "2c969f983c226ff94a78cb4895808cb0",
"assets/assets/images/sbtech.png": "c1510c6c50d97145c8cb3e110b5afc90",
"assets/assets/images/sbtech_bg.png": "b27b4503ce45ea4b0e910fd2b488ee4a",
"assets/assets/images/sbtech_logo.png": "c145ac97e6b65c137d97d8a1504ca58e",
"assets/assets/images/sbtech_logo_r.png": "8314949d588368857009b2d545a06248",
"assets/assets/images/share_twitter.png": "071e33e54712261cf457b304d5fb7a19",
"assets/assets/images/sns_icon/example_image.png": "d65f1e9ecbeb3f1e45fc15dd6d9ff8e9",
"assets/assets/images/sns_icon/facebook_icon.png": "8f5ce27564945d2c9a10ef827549a78c",
"assets/assets/images/sns_icon/insta_icon.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/sns_icon/kakao_icon.png": "d65f1e9ecbeb3f1e45fc15dd6d9ff8e9",
"assets/assets/images/solite1.png": "4622447e0da3d80b4481c7de4b87442c",
"assets/assets/images/solite2.png": "b2b24b90c4c3fd48e99a8c6eaaec878b",
"assets/assets/images/solite3.png": "77448f82c24d77f5561f595bf2fbf1ab",
"assets/assets/images/solite4.png": "250790e57f002ad18af18573314591d7",
"assets/assets/images/solite_agm_b.png": "45320b4e07dcbc260216d225f60648fe",
"assets/assets/images/solite_face.jpg": "94ccdb083df3a444e604ddcd35c515a2",
"assets/assets/images/solite_flo_b.png": "5fab04d22c49da4fe209fc58531fb72c",
"assets/assets/images/ssangyong.jpg": "0f42564b0ebb0b9f82ab7689d6c5edf9",
"assets/assets/images/sub_visual01.jpg": "289fe1337121ac8626120142bd41411e",
"assets/assets/images/sub_visual02.jpg": "3fe5daabe7d100aa335ef8e20611931d",
"assets/assets/images/sub_visual03.jpg": "9841ef493dd681ffc64bd2a484af2aaa",
"assets/assets/images/sub_visual04.jpg": "0f608a948533ea6580611213b00cc42b",
"assets/assets/images/sub_visual05.jpg": "e5a442323bd3c4357790bdcdb08d5b44",
"assets/assets/images/sub_visual06.jpg": "45d11a95339f2c78ac634b1e798a71eb",
"assets/assets/images/tl_center_banner_left.jpg": "cbc93ca38ef93c109933029c574d93ce",
"assets/assets/images/trojan_logo.png": "dbd2769c2338e7f5e10152015b8e4d72",
"assets/assets/images/us_logo.png": "7b6b669096b3840f22c13f6b3350468d",
"assets/assets/images/work_page_bg.jpg": "c48e385eaab6eb2bc8a0ca4ac850e362",
"assets/assets/images/xp1.png": "7fc1755c83b1f1fbfcab5b3aaa0aa5b8",
"assets/assets/images/xp2.png": "b8c3c1cd43f37abcb4973ceab67ca61a",
"assets/assets/images/xp3.png": "84059cc7d64eeb12ca793cf256493c0b",
"assets/assets/images/xpro.jpg": "aebd2df9cae621a7c221203dfa469351",
"assets/assets/images/xpro_agm_b.png": "7464d237ab8426a281360510b3b5b6c4",
"assets/assets/images/xpro_face.jpg": "ddd0456f19fc677f7f308f7b4b7b092f",
"assets/assets/images/xpro_flo_b.png": "795e58a603131f435f15994ca0dd24c2",
"assets/assets/images/xpro_vgs.png": "a81614b70c0c2204aa10fa294cd6ac0e",
"assets/assets/images/XP_R1.pdf": "1a3999b1aaafc4a66a69d4076c9956b7",
"assets/assets/pdf/Company%2520Profile(SB%2520Tech)-221222.pdf": "304bfe5b083af18f64a64185613c37b5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "77da025f72a9154c5c71354269c55c9f",
"assets/NOTICES": "dfc15d78c67c62ee20f8dcb05da918bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e9f9eba6217abf74d431c01fdea2b20b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "33e5be9b075c26d6f258a89b8013927c",
"/": "33e5be9b075c26d6f258a89b8013927c",
"main.dart.js": "df37b30a04242f07e92c5f54d122f984",
"manifest.json": "8e8b947052d8e234a0cdc8561e168417",
"sitemap.xml": "d556b353e66d3a2dfb2a9b82842e147f",
"splash/img/dark-1x.png": "58cbab8dea5fdfe7e2311a7bf679b2f9",
"splash/img/dark-2x.png": "9ffa7a0f8a307d6cdae440e5bcaa056b",
"splash/img/dark-3x.png": "4e4c467fe6fa0d38f23823e6af271853",
"splash/img/dark-4x.png": "0f9774f2432b734e8d2152c38ea5fc57",
"splash/img/light-1x.png": "58cbab8dea5fdfe7e2311a7bf679b2f9",
"splash/img/light-2x.png": "9ffa7a0f8a307d6cdae440e5bcaa056b",
"splash/img/light-3x.png": "4e4c467fe6fa0d38f23823e6af271853",
"splash/img/light-4x.png": "0f9774f2432b734e8d2152c38ea5fc57",
"version.json": "81fd2eb3428d1ff92fde325755177552"};
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
