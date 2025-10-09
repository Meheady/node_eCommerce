/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/products/route";
exports.ids = ["app/api/products/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.js&appDir=%2Fhome%2Fmeheady%2Fprojects%2Fnode_ecommerce%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmeheady%2Fprojects%2Fnode_ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.js&appDir=%2Fhome%2Fmeheady%2Fprojects%2Fnode_ecommerce%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmeheady%2Fprojects%2Fnode_ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_meheady_projects_node_ecommerce_src_app_api_products_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/products/route.js */ \"(rsc)/./src/app/api/products/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/products/route\",\n        pathname: \"/api/products\",\n        filename: \"route\",\n        bundlePath: \"app/api/products/route\"\n    },\n    resolvedPagePath: \"/home/meheady/projects/node_ecommerce/src/app/api/products/route.js\",\n    nextConfigOutput,\n    userland: _home_meheady_projects_node_ecommerce_src_app_api_products_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9kdWN0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJvZHVjdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcm9kdWN0cyUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGbWVoZWFkeSUyRnByb2plY3RzJTJGbm9kZV9lY29tbWVyY2UlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZtZWhlYWR5JTJGcHJvamVjdHMlMkZub2RlX2Vjb21tZXJjZSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDbUI7QUFDaEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL21laGVhZHkvcHJvamVjdHMvbm9kZV9lY29tbWVyY2Uvc3JjL2FwcC9hcGkvcHJvZHVjdHMvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2R1Y3RzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvZHVjdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb2R1Y3RzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvbWVoZWFkeS9wcm9qZWN0cy9ub2RlX2Vjb21tZXJjZS9zcmMvYXBwL2FwaS9wcm9kdWN0cy9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.js&appDir=%2Fhome%2Fmeheady%2Fprojects%2Fnode_ecommerce%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmeheady%2Fprojects%2Fnode_ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/products/route.js":
/*!***************************************!*\
  !*** ./src/app/api/products/route.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.js\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nasync function GET() {\n    try {\n        const products = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].product.findMany({\n            include: {\n                category: true\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(products);\n    } catch (error) {\n        console.error(\"Error fetching products:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Error fetching products'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const data = await request.formData();\n        console.log(\"Form data received:\", data);\n        const name = data.get('name');\n        const description = data.get('description');\n        const price = data.get('price');\n        const categoryId = data.get('categoryId');\n        const thumbnailFile = data.get('thumbnail');\n        const imageFiles = data.getAll('images');\n        console.log(\"Fields:\", {\n            name,\n            description,\n            price,\n            categoryId\n        });\n        const uploadDir = (0,path__WEBPACK_IMPORTED_MODULE_3__.join)(process.cwd(), 'public/uploads');\n        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.mkdir)(uploadDir, {\n            recursive: true\n        });\n        let thumbnail;\n        if (thumbnailFile) {\n            const bytes = await thumbnailFile.arrayBuffer();\n            const buffer = Buffer.from(bytes);\n            const filename = `${Date.now()}-${thumbnailFile.name}`;\n            const path = (0,path__WEBPACK_IMPORTED_MODULE_3__.join)(uploadDir, filename);\n            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.writeFile)(path, buffer);\n            thumbnail = `/uploads/${filename}`;\n            console.log(\"Thumbnail uploaded:\", thumbnail);\n        }\n        let images = [];\n        if (imageFiles.length > 0) {\n            for (const file of imageFiles){\n                const bytes = await file.arrayBuffer();\n                const buffer = Buffer.from(bytes);\n                const filename = `${Date.now()}-${file.name}`;\n                const path = (0,path__WEBPACK_IMPORTED_MODULE_3__.join)(uploadDir, filename);\n                await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.writeFile)(path, buffer);\n                images.push(`/uploads/${filename}`);\n            }\n            console.log(\"Images uploaded:\", images);\n        }\n        try {\n            const newProduct = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].product.create({\n                data: {\n                    name,\n                    description,\n                    price: parseFloat(price),\n                    categoryId: parseInt(categoryId),\n                    thumbnail,\n                    images: images.join(',')\n                }\n            });\n            console.log(\"Product created:\", newProduct);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(newProduct, {\n                status: 201\n            });\n        } catch (prismaError) {\n            console.error(\"Prisma error:\", prismaError);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Error creating product in database'\n            }, {\n                status: 500\n            });\n        }\n    } catch (error) {\n        console.error(\"Error creating product:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Error creating product'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxZQUFZO2dCQUFFaEMsUUFBUTtZQUFJO1FBQ3JELEVBQUUsT0FBT29DLGFBQWE7WUFDcEJyQyxRQUFRRCxLQUFLLENBQUMsaUJBQWlCc0M7WUFDL0IsT0FBT2xELHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBcUMsR0FBRztnQkFBRUUsUUFBUTtZQUFJO1FBQzFGO0lBRUYsRUFBRSxPQUFPRixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1FBQ3pDLE9BQU9aLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF5QixHQUFHO1lBQUVFLFFBQVE7UUFBSTtJQUM5RTtBQUNGIiwic291cmNlcyI6WyIvaG9tZS9tZWhlYWR5L3Byb2plY3RzL25vZGVfZWNvbW1lcmNlL3NyYy9hcHAvYXBpL3Byb2R1Y3RzL3JvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBwcmlzbWEgZnJvbSAnQC9saWIvcHJpc21hJztcbmltcG9ydCB7IHdyaXRlRmlsZSB9IGZyb20gJ2ZzL3Byb21pc2VzJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IG1rZGlyIH0gZnJvbSAnZnMvcHJvbWlzZXMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgcHJpc21hLnByb2R1Y3QuZmluZE1hbnkoe1xuICAgICAgaW5jbHVkZToge1xuICAgICAgICBjYXRlZ29yeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHByb2R1Y3RzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdHM6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICAgIGNvbnNvbGUubG9nKFwiRm9ybSBkYXRhIHJlY2VpdmVkOlwiLCBkYXRhKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkYXRhLmdldCgnbmFtZScpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGF0YS5nZXQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgcHJpY2UgPSBkYXRhLmdldCgncHJpY2UnKTtcbiAgICBjb25zdCBjYXRlZ29yeUlkID0gZGF0YS5nZXQoJ2NhdGVnb3J5SWQnKTtcbiAgICBjb25zdCB0aHVtYm5haWxGaWxlID0gZGF0YS5nZXQoJ3RodW1ibmFpbCcpO1xuICAgIGNvbnN0IGltYWdlRmlsZXMgPSBkYXRhLmdldEFsbCgnaW1hZ2VzJyk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkZpZWxkczpcIiwgeyBuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UsIGNhdGVnb3J5SWQgfSk7XG5cbiAgICBjb25zdCB1cGxvYWREaXIgPSBqb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMvdXBsb2FkcycpO1xuICAgIGF3YWl0IG1rZGlyKHVwbG9hZERpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG5cbiAgICBsZXQgdGh1bWJuYWlsO1xuICAgIGlmICh0aHVtYm5haWxGaWxlKSB7XG4gICAgICBjb25zdCBieXRlcyA9IGF3YWl0IHRodW1ibmFpbEZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcbiAgICAgIGNvbnN0IGZpbGVuYW1lID0gYCR7RGF0ZS5ub3coKX0tJHt0aHVtYm5haWxGaWxlLm5hbWV9YDtcbiAgICAgIGNvbnN0IHBhdGggPSBqb2luKHVwbG9hZERpciwgZmlsZW5hbWUpO1xuICAgICAgYXdhaXQgd3JpdGVGaWxlKHBhdGgsIGJ1ZmZlcik7XG4gICAgICB0aHVtYm5haWwgPSBgL3VwbG9hZHMvJHtmaWxlbmFtZX1gO1xuICAgICAgY29uc29sZS5sb2coXCJUaHVtYm5haWwgdXBsb2FkZWQ6XCIsIHRodW1ibmFpbCk7XG4gICAgfVxuXG4gICAgbGV0IGltYWdlcyA9IFtdO1xuICAgIGlmIChpbWFnZUZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBpbWFnZUZpbGVzKSB7XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgZmlsZS5hcnJheUJ1ZmZlcigpO1xuICAgICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShieXRlcyk7XG4gICAgICAgIGNvbnN0IGZpbGVuYW1lID0gYCR7RGF0ZS5ub3coKX0tJHtmaWxlLm5hbWV9YDtcbiAgICAgICAgY29uc3QgcGF0aCA9IGpvaW4odXBsb2FkRGlyLCBmaWxlbmFtZSk7XG4gICAgICAgIGF3YWl0IHdyaXRlRmlsZShwYXRoLCBidWZmZXIpO1xuICAgICAgICBpbWFnZXMucHVzaChgL3VwbG9hZHMvJHtmaWxlbmFtZX1gKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwiSW1hZ2VzIHVwbG9hZGVkOlwiLCBpbWFnZXMpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBuZXdQcm9kdWN0ID0gYXdhaXQgcHJpc21hLnByb2R1Y3QuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgcHJpY2U6IHBhcnNlRmxvYXQocHJpY2UpLFxuICAgICAgICAgIGNhdGVnb3J5SWQ6IHBhcnNlSW50KGNhdGVnb3J5SWQpLFxuICAgICAgICAgIHRodW1ibmFpbCxcbiAgICAgICAgICBpbWFnZXM6IGltYWdlcy5qb2luKCcsJyksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvZHVjdCBjcmVhdGVkOlwiLCBuZXdQcm9kdWN0KTtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihuZXdQcm9kdWN0LCB7IHN0YXR1czogMjAxIH0pO1xuICAgIH0gY2F0Y2ggKHByaXNtYUVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUHJpc21hIGVycm9yOlwiLCBwcmlzbWFFcnJvcik7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0Vycm9yIGNyZWF0aW5nIHByb2R1Y3QgaW4gZGF0YWJhc2UnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHByb2R1Y3Q6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0Vycm9yIGNyZWF0aW5nIHByb2R1Y3QnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwid3JpdGVGaWxlIiwiam9pbiIsIm1rZGlyIiwiR0VUIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiZmluZE1hbnkiLCJpbmNsdWRlIiwiY2F0ZWdvcnkiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhdHVzIiwiUE9TVCIsInJlcXVlc3QiLCJkYXRhIiwiZm9ybURhdGEiLCJsb2ciLCJuYW1lIiwiZ2V0IiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImNhdGVnb3J5SWQiLCJ0aHVtYm5haWxGaWxlIiwiaW1hZ2VGaWxlcyIsImdldEFsbCIsInVwbG9hZERpciIsInByb2Nlc3MiLCJjd2QiLCJyZWN1cnNpdmUiLCJ0aHVtYm5haWwiLCJieXRlcyIsImFycmF5QnVmZmVyIiwiYnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsImZpbGVuYW1lIiwiRGF0ZSIsIm5vdyIsInBhdGgiLCJpbWFnZXMiLCJsZW5ndGgiLCJmaWxlIiwicHVzaCIsIm5ld1Byb2R1Y3QiLCJjcmVhdGUiLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJwcmlzbWFFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/products/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.js":
/*!***************************!*\
  !*** ./src/lib/prisma.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsSUFBSUM7QUFFSixJQUFJQyxLQUFxQyxFQUFFLEVBRTFDLE1BQU07SUFDTCxJQUFJLENBQUNDLE9BQU9GLE1BQU0sRUFBRTtRQUNsQkUsT0FBT0YsTUFBTSxHQUFHLElBQUlELHdEQUFZQTtJQUNsQztJQUNBQyxTQUFTRSxPQUFPRixNQUFNO0FBQ3hCO0FBRUEsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL21laGVhZHkvcHJvamVjdHMvbm9kZV9lY29tbWVyY2Uvc3JjL2xpYi9wcmlzbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5sZXQgcHJpc21hO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5wcmlzbWEpIHtcbiAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICB9XG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicHJvY2VzcyIsImdsb2JhbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fproducts%2Froute&page=%2Fapi%2Fproducts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fproducts%2Froute.js&appDir=%2Fhome%2Fmeheady%2Fprojects%2Fnode_ecommerce%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmeheady%2Fprojects%2Fnode_ecommerce&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();