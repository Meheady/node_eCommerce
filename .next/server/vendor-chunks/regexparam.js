"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/regexparam";
exports.ids = ["vendor-chunks/regexparam"];
exports.modules = {

/***/ "(rsc)/./node_modules/regexparam/dist/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/regexparam/dist/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inject: () => (/* binding */ inject),\n/* harmony export */   parse: () => (/* binding */ parse)\n/* harmony export */ });\nfunction parse(str, loose) {\n\tif (str instanceof RegExp) return { keys:false, pattern:str };\n\tvar c, o, tmp, ext, keys=[], pattern='', arr = str.split('/');\n\tarr[0] || arr.shift();\n\n\twhile (tmp = arr.shift()) {\n\t\tc = tmp[0];\n\t\tif (c === '*') {\n\t\t\tkeys.push('wild');\n\t\t\tpattern += '/(.*)';\n\t\t} else if (c === ':') {\n\t\t\to = tmp.indexOf('?', 1);\n\t\t\text = tmp.indexOf('.', 1);\n\t\t\tkeys.push( tmp.substring(1, !!~o ? o : !!~ext ? ext : tmp.length) );\n\t\t\tpattern += !!~o && !~ext ? '(?:/([^/]+?))?' : '/([^/]+?)';\n\t\t\tif (!!~ext) pattern += (!!~o ? '?' : '') + '\\\\' + tmp.substring(ext);\n\t\t} else {\n\t\t\tpattern += '/' + tmp;\n\t\t}\n\t}\n\n\treturn {\n\t\tkeys: keys,\n\t\tpattern: new RegExp('^' + pattern + (loose ? '(?=$|\\/)' : '\\/?$'), 'i')\n\t};\n}\n\nvar RGX = /(\\/|^)([:*][^/]*?)(\\?)?(?=[/.]|$)/g;\n\n// error if key missing?\nfunction inject(route, values) {\n\treturn route.replace(RGX, (x, lead, key, optional) => {\n\t\tx = values[key=='*' ? 'wild' : key.substring(1)];\n\t\treturn x ? '/'+x : (optional || key=='*') ? '' : '/' + key;\n\t});\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVnZXhwYXJhbS9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPO0FBQ1AscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YiLCJzb3VyY2VzIjpbIi9ob21lL21laGVhZHkvcHJvamVjdHMvbm9kZV9lY29tbWVyY2Uvbm9kZV9tb2R1bGVzL3JlZ2V4cGFyYW0vZGlzdC9pbmRleC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHN0ciwgbG9vc2UpIHtcblx0aWYgKHN0ciBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIHsga2V5czpmYWxzZSwgcGF0dGVybjpzdHIgfTtcblx0dmFyIGMsIG8sIHRtcCwgZXh0LCBrZXlzPVtdLCBwYXR0ZXJuPScnLCBhcnIgPSBzdHIuc3BsaXQoJy8nKTtcblx0YXJyWzBdIHx8IGFyci5zaGlmdCgpO1xuXG5cdHdoaWxlICh0bXAgPSBhcnIuc2hpZnQoKSkge1xuXHRcdGMgPSB0bXBbMF07XG5cdFx0aWYgKGMgPT09ICcqJykge1xuXHRcdFx0a2V5cy5wdXNoKCd3aWxkJyk7XG5cdFx0XHRwYXR0ZXJuICs9ICcvKC4qKSc7XG5cdFx0fSBlbHNlIGlmIChjID09PSAnOicpIHtcblx0XHRcdG8gPSB0bXAuaW5kZXhPZignPycsIDEpO1xuXHRcdFx0ZXh0ID0gdG1wLmluZGV4T2YoJy4nLCAxKTtcblx0XHRcdGtleXMucHVzaCggdG1wLnN1YnN0cmluZygxLCAhIX5vID8gbyA6ICEhfmV4dCA/IGV4dCA6IHRtcC5sZW5ndGgpICk7XG5cdFx0XHRwYXR0ZXJuICs9ICEhfm8gJiYgIX5leHQgPyAnKD86LyhbXi9dKz8pKT8nIDogJy8oW14vXSs/KSc7XG5cdFx0XHRpZiAoISF+ZXh0KSBwYXR0ZXJuICs9ICghIX5vID8gJz8nIDogJycpICsgJ1xcXFwnICsgdG1wLnN1YnN0cmluZyhleHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwYXR0ZXJuICs9ICcvJyArIHRtcDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGtleXM6IGtleXMsXG5cdFx0cGF0dGVybjogbmV3IFJlZ0V4cCgnXicgKyBwYXR0ZXJuICsgKGxvb3NlID8gJyg/PSR8XFwvKScgOiAnXFwvPyQnKSwgJ2knKVxuXHR9O1xufVxuXG52YXIgUkdYID0gLyhcXC98XikoWzoqXVteL10qPykoXFw/KT8oPz1bLy5dfCQpL2c7XG5cbi8vIGVycm9yIGlmIGtleSBtaXNzaW5nP1xuZXhwb3J0IGZ1bmN0aW9uIGluamVjdChyb3V0ZSwgdmFsdWVzKSB7XG5cdHJldHVybiByb3V0ZS5yZXBsYWNlKFJHWCwgKHgsIGxlYWQsIGtleSwgb3B0aW9uYWwpID0+IHtcblx0XHR4ID0gdmFsdWVzW2tleT09JyonID8gJ3dpbGQnIDoga2V5LnN1YnN0cmluZygxKV07XG5cdFx0cmV0dXJuIHggPyAnLycreCA6IChvcHRpb25hbCB8fCBrZXk9PScqJykgPyAnJyA6ICcvJyArIGtleTtcblx0fSk7XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/regexparam/dist/index.mjs\n");

/***/ })

};
;