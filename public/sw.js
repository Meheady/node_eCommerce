if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise(s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()}).then(()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e}));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>i(e,t),u={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map(e=>u[e]||r(e))).then(e=>(n(...e),c))}}define(["./workbox-4754cb34"],function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"dc0ea67087d665d176ac3407d03d34b3"},{url:"/_next/static/OzViDMOK8YOYwjA5zkuJ1/_buildManifest.js",revision:"07916d63c9c191cc40a374075afa0a65"},{url:"/_next/static/OzViDMOK8YOYwjA5zkuJ1/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1517-762d78fb6592faa5.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/1846-058fc08ddc0ae07e.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/3067-c6e01a9b045be574.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/3413-e2593ab493c14515.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/4010-60c8183b0f427fdd.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/4101-f88eacc1660660de.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/4bd1b696-08525989d349767c.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/5565-dedb2ae369ee6d43.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/7396-5e09df3b901e6d06.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/7864-9be9f34218bfc709.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/7993-31defdc1872d81f8.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/aaea2bcf-36b51025ada2ec13.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/_not-found/page-4cfd8f98d6b36f38.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/admin/admin/settings/admins/page-3a75881f227a6858.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/admin/admin/settings/website/page-534863e9b8bb7aa9.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/admin/categories/new/page-8a5e27575b8bd10b.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/admin/categories/page-9d74e98fcde58c46.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/admin/layout-7e91093fbea9ea55.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/admin/page-0c5206d323e5cc6f.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/admin/products/%5Bid%5D/page-6f2b2839f49958c5.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/admin/products/new/page-b9403a77066c4b38.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/admin/products/page-94561d14e092e0d2.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/admin/profile/page-b9dbbe204cdf7458.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/api/admin/dashboard/route-95e14d1fb436bb84.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/api/admin/settings/website/route-d6c9e36919b34217.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/api/admin/users/%5Bid%5D/route-492d224c4ecab9d8.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/api/admin/users/route-fbe57bf7cd349846.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/api/auth/%5B...nextauth%5D/route-f41592abe2b82907.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/api/auth/login/route-c98a4fbaac55afd2.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/api/categories/%5Bid%5D/route-d7aeb4c0f3b5e8bd.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/api/categories/route-3d47fe022a357225.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/api/home/route-a760f64c1052adf8.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/api/products/%5Bid%5D/route-aa7393871e1607de.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/api/products/route-cc26faa9079891b5.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/api/register/route-495987a290252111.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/category/%5Bid%5D/page-64e1567119e2ad20.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/layout-9d75af64c981e5b4.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/login/admin/page-b822aed1ba140a46.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/login/page-5402b76fb34bdc37.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/page-46b635a55d4d917e.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/products/%5Bid%5D/page-78cb096f429e9a08.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/profile/page-d3a66a7fd11821c2.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/app/register/page-eab7cb4df62fd73a.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/framework-f840e08b65b2bbef.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/main-app-a3c34d0b28482846.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/main-e84fc05f091ae67b.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/pages/_app-00b41aece417ee52.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/pages/_error-6b43ce36a8d09a61.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-4e52656ae571baf2.js",revision:"OzViDMOK8YOYwjA5zkuJ1"},{url:"/_next/static/css/2d7af8c719074f5d.css",revision:"2d7af8c719074f5d"},{url:"/_next/static/css/cd1facef58729f2c.css",revision:"cd1facef58729f2c"},{url:"/_next/static/css/d071dca61fbb01bf.css",revision:"d071dca61fbb01bf"},{url:"/_next/static/media/24c15609eaa28576-s.woff2",revision:"be8ee93a8cf390eb9cb6e6aadf1a3bf0"},{url:"/_next/static/media/2c07349e02a7b712-s.woff2",revision:"399fb80a20ea7d2a53a1d6dc1e5f392a"},{url:"/_next/static/media/47cbc4e2adbc5db9-s.p.woff2",revision:"4746809ed1c17447d45d2a96c64796d4"},{url:"/_next/static/media/627d916fd739a539-s.woff2",revision:"c46f88e9518178fd56311db461452f8d"},{url:"/_next/static/media/74c003a2abab0c4f-s.woff2",revision:"99ebacc4dfd7bd21bf48d21306c0dd42"},{url:"/_next/static/media/84602850c8fd81c3-s.woff2",revision:"bdf2a9a2d904dc21d9b593b82887af52"},{url:"/_next/static/media/90da053edc2b7de3-s.woff2",revision:"5489c188e786a745bd9ba1bc9fbf7f71"},{url:"/_next/static/media/ac3b7908202f8517-s.woff2",revision:"9df032a6b99e0fce98ec4ad311b0fd7d"},{url:"/_next/static/media/b5ee789b512e4d1b-s.woff2",revision:"6f64aa964b323b9c0e5dbce214081225"},{url:"/globals.css",revision:"5a034201815379240356bf075aee62d6"},{url:"/logo.webp",revision:"42896e1b9fbf272779a3e91b22b240fd"},{url:"/manifest.json",revision:"b53adc0f7f2d713a20ccc8ca624280d9"},{url:"/placeholder.jpg",revision:"5632598c913a4107afee98e7ce1f9e4a"},{url:"/pwa-icon-192x192.png",revision:"d2235f8ad6fb590844f4cd74e124d2bd"},{url:"/pwa-icon-512x512.png",revision:"c0ee3ec502216b3d27030c76f7d64f73"},{url:"/screenshots/desktop.png",revision:"23c66a5541dfa9ec2102908f538393af"},{url:"/screenshots/mobile.png",revision:"5020c7bf5a7c71617817093a3b15e1d0"},{url:"/style.css",revision:"517fb0f44c5905a76559833598b15f3f"},{url:"/website.css",revision:"6614a9924ac430c741610b63a04820c9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")},new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")},new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(({url:e})=>!(self.origin===e.origin),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")});
/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-e43f5367'], (function (workbox) { 'use strict';

  importScripts();
  self.skipWaiting();
  workbox.clientsClaim();
  workbox.registerRoute("/", new workbox.NetworkFirst({
    "cacheName": "start-url",
    plugins: [{
      cacheWillUpdate: async ({
        request,
        response,
        event,
        state
      }) => {
        if (response && response.type === 'opaqueredirect') {
          return new Response(response.body, {
            status: 200,
            statusText: 'OK',
            headers: response.headers
          });
        }
        return response;
      }
    }]
  }), 'GET');
  workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
    "cacheName": "dev",
    plugins: []
  }), 'GET');

}));
