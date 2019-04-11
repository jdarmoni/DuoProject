/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Duo.js":
/*!********************!*\
  !*** ./src/Duo.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Duo; });\nclass Duo {\n    constructor(sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight){\n        this.sx = sx;\n        this.sy = sy;\n        this.sWidth = sWidth;\n        this.sHeight = sHeight;\n        this.dx = dx;\n        this.dy = dy;\n        this.dWidth = dWidth;\n        this.dHeight = dHeight;\n    }  \n}\n\n\n// Duo.prototype.draw = function draw(ctx) {\n\n// }\n\n//# sourceURL=webpack:///./src/Duo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Duo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Duo.js */ \"./src/Duo.js\");\n/* harmony import */ var _platforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platforms */ \"./src/platforms.js\");\n/* harmony import */ var _vendor_keymaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendor/keymaster */ \"./vendor/keymaster.js\");\n/* harmony import */ var _vendor_keymaster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendor_keymaster__WEBPACK_IMPORTED_MODULE_2__);\nconsole.log('webpack is working!')\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvas = document.getElementById('myCanvas');\n    const ctx = canvas.getContext('2d');\n    var sprite = new Image();\n    sprite.src = \"https://d7mj4aqfscim2.cloudfront.net/images/owl-sprite20.svg\";\n    let duo = new _Duo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( 15, 15, 250, 300, 0, canvas.height - 90,  75, 100)\n    let platform = new _platforms__WEBPACK_IMPORTED_MODULE_1__[\"default\"](490, canvas.height - 200, 200, 200, \"black\" )\n    let terrace = new _platforms__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 200, 50, 200, \"color\")\n    let rightPressed = false\n    let leftPressed = false;\n    let upPressed = false;\n    let downPressed = false;\n    var DuoObjects = [\n        platform,\n        terrace\n    ]\n    var speed = 5;\n    var jump = 5;\n    var hit = false;\n\n    sprite.onload = function () {\n        ctx.drawImage(sprite, duo.sx, duo.sy, duo.sWidth, duo.sHeight, duo.dx, duo.dy, duo.dWidth, duo.dHeight);\n    }\n\n\n    function YcollisionDetection(object, pos) {\n        if (((duo.dx > object.x - duo.dWidth) && (duo.dx < object.x + object.width)) && (((duo.dy + duo.dHeight) + pos >= object.y) && (duo.dy + pos <= object.y + object.height))) {\n            console.log(\"Duo's Y:\")\n            console.log(duo.dy)\n            console.log(object.y)\n            return true\n        }\n    }\n\n    function XcollisionDetection(object, pos) {\n        // if a movement would enter him into between x (start) AND the x+width (MAX LENGTH) of object\n        if ((duo.dx + pos > object.x - duo.dWidth && (duo.dx + pos < object.x + object.width)) && (((duo.dy + duo.dHeight) >= object.y) && (duo.dy <= object.y + object.height))) {\n            // if it would enter him into between y (start) AND y + height (end) range of the object\n\n            console.log(\"Duo's X:\")\n            return true\n        }\n    }\n\n\n    function draw() {\n        ctx.clearRect(duo.dx, duo.dy, duo.dWidth, duo.dHeight);\n        platform.draw(ctx);\n        terrace.draw(ctx);\n\n        if (rightPressed && (duo.dx + duo.dWidth < canvas.width)) {\n            for (var i = 0; i < DuoObjects.length; i++) {\n                if (XcollisionDetection(DuoObjects[i], speed) === true) {\n                    console.log('right button problem')\n                    duo.dx += 0\n                    hit = true;\n                }\n                // for every button press, for each object duo doesn't collide with, dou.dx += speed\n            }\n            if (hit === false) { duo.dx += speed }\n        }\n        if (leftPressed && duo.dx > 0) {\n            for (var i = 0; i < DuoObjects.length; i++) {\n                if (XcollisionDetection(DuoObjects[i], -speed) === true) {\n                    console.log('left button problem')\n                    duo.dx += 0;\n                    hit = true;\n                }\n            }\n            if (hit === false) { duo.dx -= speed }\n        }\n\n        if (upPressed && duo.dy > 0) {\n\n            duo.dy -= jump;\n        }\n        if ((upPressed === false && duo.dy < canvas.height) && (duo.dy + duo.dHeight < canvas.height)) {\n            for (var i = 0; i < DuoObjects.length; i++) {\n                if (YcollisionDetection(DuoObjects[i], jump) === true) {\n                    duo.dy += 0;\n                    hit = true;\n                }\n            }\n            if (hit === false) { duo.dy += jump; }\n        }\n\n        ctx.drawImage(sprite, duo.sx, duo.sy, duo.sWidth, duo.sHeight, duo.dx, duo.dy, duo.dWidth, duo.dHeight);\n        hit = false;\n    }\n\n    \n    function spriteify() {\n        // own class?\n            if (duo.sx === 15) {\n                duo.sx = 340;\n            } else if (duo.sx === 340) {\n                duo.sx = 15;\n            }\n        }\n\n    document.addEventListener(\"keydown\", keyDownHandler, false);\n    document.addEventListener(\"keyup\", keyUpHandler, false);\n\n    // QUESTION: need to put these in separate files\n    function keyDownHandler(e) {\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            rightPressed = true;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            leftPressed = true;\n        }\n        else if (e.key == \"Up\" || e.key == \"ArrowUp\") {\n            upPressed = true;\n        }\n        else if (e.key == \"Down\" || e.key == \"ArrowDown\") {\n            downPressed = true;\n        }\n    }\n    function keyUpHandler(e) {\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            rightPressed = false;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            leftPressed = false;\n        }\n        else if (e.key == \"Up\" || e.key == \"ArrowUp\") {\n            upPressed = false;\n        }\n        else if (e.key == \"Down\" || e.key == \"ArrowDown\") {\n            downPressed = false;\n        }\n    }\n    setInterval(draw, 15)\n    setInterval(spriteify, 750) //duo class?\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/platforms.js":
/*!**************************!*\
  !*** ./src/platforms.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Obstacles; });\nclass Obstacles {\n    constructor(x, y, height, width, color){\n        this.x = x;\n        this.y = y;\n        this.height = height;\n        this.width = width;\n        this.color = color\n    }\n}\nObstacles.prototype.draw = function draw(ctx) {\n    ctx.beginPath();\n    ctx.rect(this.x, this.y, this.width, this.height);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath();\n\n}\n\n\n//# sourceURL=webpack:///./src/platforms.js?");

/***/ }),

/***/ "./vendor/keymaster.js":
/*!*****************************!*\
  !*** ./vendor/keymaster.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n// export let rightPressed = false;\n// export let leftPressed = false;\n// export let upPressed = false;\n// export let downPressed = false;\n\n\n// export const keyDownHandler = (e)=> {\n//     if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n//         rightPressed = true;\n//     }\n//     else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n//         leftPressed = true;\n//     }\n//     else if (e.key == \"Up\" || e.key == \"ArrowUp\") {\n//         upPressed = true;\n//     }\n//     else if (e.key == \"Down\" || e.key == \"ArrowDown\") {\n//         downPressed = true;\n//     }\n// }\n\n// export const keyUpHandler = (e)=> {\n//     if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n//         rightPressed = false;\n//     }\n//     else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n//         leftPressed = false;\n//     }\n//     else if (e.key == \"Up\" || e.key == \"ArrowUp\") {\n//         upPressed = false;\n//     }\n//     else if (e.key == \"Down\" || e.key == \"ArrowDown\") {\n//         downPressed = false;\n//     }\n// }\n\n\n\n//# sourceURL=webpack:///./vendor/keymaster.js?");

/***/ })

/******/ });