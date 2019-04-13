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

/***/ "./src/Obstacles.js":
/*!**************************!*\
  !*** ./src/Obstacles.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Obstacles; });\nclass Obstacles {\n    constructor(x, y, height, width, color){\n        this.x = x;\n        this.y = y;\n        this.height = height;\n        this.width = width;\n        this.color = color\n    }\n}\nObstacles.prototype.draw = function draw(ctx) {\n    ctx.beginPath();\n    ctx.rect(this.x, this.y, this.width, this.height);\n    ctx.fillStyle = this.color; // comment this out if you want remove barriers\n    ctx.fill();\n    ctx.closePath();\n\n}\n// \n\n//# sourceURL=webpack:///./src/Obstacles.js?");

/***/ }),

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Clock; });\nclass Clock {\n    constructor(sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {\n        this.sx = sx;\n        this.sy = sy;\n        this.sWidth = sWidth;\n        this.sHeight = sHeight;\n        this.dx = dx;\n        this.dy = dy;\n        this.dWidth = dWidth;\n        this.dHeight = dHeight;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Duo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Duo.js */ \"./src/Duo.js\");\n/* harmony import */ var _Obstacles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Obstacles */ \"./src/Obstacles.js\");\n/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./word */ \"./src/word.js\");\n/* harmony import */ var _vendor_keymaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vendor/keymaster */ \"./vendor/keymaster.js\");\n/* harmony import */ var _sentence_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sentence.js */ \"./src/sentence.js\");\n/* harmony import */ var _wordCollections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wordCollections */ \"./src/wordCollections.js\");\n/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clock.js */ \"./src/clock.js\");\n// console.log('webpack is working!')\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvas = document.getElementById('myCanvas');\n    const ctx = canvas.getContext('2d');\n    var sprite = new Image();\n    sprite.src = \"https://d7mj4aqfscim2.cloudfront.net/images/owl-sprite20.svg\";\n    // let treeSprite = new Image();\n    // treeSprite.src =\"http://clipart-library.com/images/8TznoXBXc.png\"\n    //                             /* objects!*/ \n\n    let duo = new _Duo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( 15, 15, 250, 300, 0, canvas.height - 90,  75, 100);\n    let platform = new _Obstacles__WEBPACK_IMPORTED_MODULE_1__[\"default\"](490, canvas.height - 200, 200, 200, \"black\" );\n    let terrace = new _Obstacles__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 200, 50, 200, \"color\");\n    \n    var level = 3;\n    var time = 30;\n    let rightPressed = false\n    let leftPressed = false;\n    let upPressed = false;\n    // let downPressed = false;\n    let enterPressed = false;\n    _wordCollections__WEBPACK_IMPORTED_MODULE_5__[\"DuoWords\"];\n    var DuoObjects = [\n        platform,\n        terrace\n    ]\n    var speed = 5;\n    var jump = 5;\n    var hit = false;\n\n\n    function timer(ctx) {\n        ctx.beginPath();\n        ctx.rect(canvas.width - 100, 100, 50, 50);\n        ctx.font = '14px serif'\n        ctx.fillText(time.toString(), 50, 50)\n        ctx.closePath();\n\n\n    }        \n\n    sprite.onload = function () {\n        ctx.drawImage(sprite, duo.sx, duo.sy, duo.sWidth, duo.sHeight, duo.dx, duo.dy, duo.dWidth, duo.dHeight);\n    }\n    \n\n    function wordCollisionDetection(object){\n        \n        if ( ((duo.dx > object.x - duo.dWidth) && (duo.dx < object.x + object.width)) && ( ( (duo.dy + duo.dHeight) >= object.y) && (duo.dy  <= object.y + object.height)) ) {\n            if (enterPressed && object.toggle) {\n                object.color='blue';\n                object.toggle = false\n            } else {\n                console.log(`revealing!`)\n                object.color = 'red';\n                object.toggle=true;\n            }\n        }\n    }\n\n    function YcollisionDetection(object, pos) {\n        if (((duo.dx > object.x - duo.dWidth) && (duo.dx < object.x + object.width)) && (((duo.dy + duo.dHeight) + pos >= object.y) && (duo.dy + pos <= object.y + object.height))) {\n            console.log(\"Duo's Y:\")\n            console.log(duo.dy)\n            console.log(object.y)\n            return true\n        }\n    }\n\n    function XcollisionDetection(object, pos) {\n        // if a movement would enter him into between x (start) AND the x+width (MAX LENGTH) of object\n        if ((duo.dx + pos > object.x - duo.dWidth && (duo.dx + pos < object.x + object.width)) && (((duo.dy + duo.dHeight) >= object.y) && (duo.dy <= object.y + object.height))) {\n            // if it would enter him into between y (start) AND y + height (end) range of the object\n\n            console.log(\"Duo's X:\")\n            return true\n        }\n    }\n\n    function draw() {\n        ctx.clearRect(duo.dx, duo.dy, duo.dWidth, duo.dHeight);\n        ctx.clearRect(canvas.width - 100, 100, 50, 50); //CLOCK CLEAR\n        // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);\n        // ctx.drawImage(treeSprite, 0, 0, 1200, 2400, 0, 175, 200, 470);\n        platform.draw(ctx);\n        terrace.draw(ctx); \n        timer(ctx);\n    \n\n\n        for(var i = 0; i < _wordCollections__WEBPACK_IMPORTED_MODULE_5__[\"allLevels\"][level].length; i++){\n            // debugger\n            let word= _wordCollections__WEBPACK_IMPORTED_MODULE_5__[\"allLevels\"][level][i];\n            ctx.clearRect(word.x, word.y, word.width, word.height)\n            word.draw(ctx);\n            \n            // allLevels[level][i].clear(ctx); //<-- if I debug, 'allLevels' is not defined; but if I remove this line, everything works wonderfully\n        } \n    \n        if (rightPressed && (duo.dx + duo.dWidth < canvas.width)) {\n            for (var i = 0; i < DuoObjects.length; i++) {\n                if (XcollisionDetection(DuoObjects[i], speed) === true) {\n                    console.log('right button problem')\n                    duo.dx += 0\n                    hit = true;\n                } \n                // for every button press, for each object duo doesn't collide with, dou.dx += speed\n            }\n            if (hit === false) { duo.dx += speed }\n        }\n        if (leftPressed && duo.dx > 0) {\n            for (var i = 0; i < DuoObjects.length; i++) {\n                if (XcollisionDetection(DuoObjects[i], -speed) === true) {\n                    console.log('left button problem')\n                    duo.dx += 0;\n                    hit = true;\n                }\n            }\n            if (hit === false) { duo.dx -= speed }\n        }\n\n        if (upPressed && duo.dy > 0) {\n\n            duo.dy -= jump;\n        }\n        if ((upPressed === false && duo.dy < canvas.height) && (duo.dy + duo.dHeight < canvas.height)) {\n            for (var i = 0; i < DuoObjects.length; i++) {\n                if (YcollisionDetection(DuoObjects[i], jump) === true) {\n                    duo.dy += 0;\n                    hit = true;\n                }\n            }\n            if (hit === false) { duo.dy += jump; }\n        }\n        ctx.drawImage(sprite, duo.sx, duo.sy, duo.sWidth, duo.sHeight, duo.dx, duo.dy, duo.dWidth, duo.dHeight);\n        hit = false;\n\n        if (enterPressed) {\n            for (var i = 0; i < _wordCollections__WEBPACK_IMPORTED_MODULE_5__[\"DuoWords\"].length; i++) {\n                if (wordCollisionDetection(_wordCollections__WEBPACK_IMPORTED_MODULE_5__[\"DuoWords\"][i]) === true) {\n                    // store 'has toggled started' in word\n                    // if false, start the timer; set to true\n                    // if true, do nothing\n                    console.log('word alert!')\n                }\n            }\n        }\n\n    }\n    \n    // QUESTION: need to put these in separate files\n    // keyDownHandler(e);\n    // keyUpHandler(e);\n    document.addEventListener(\"keydown\", keyDownHandler, false);\n    document.addEventListener(\"keyup\", keyUpHandler, false);\n    \n    function keyDownHandler(e) {\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            rightPressed = true;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            leftPressed = true;\n        }\n        else if (e.key == \"Up\" || e.key == \"ArrowUp\") {\n            upPressed = true;\n        }\n        else if (e.key == \"Down\" || e.key == \"ArrowDown\") {\n            downPressed = true;\n        } \n        else if (e.key == \"Enter\") {\n            enterPressed = true;\n        }\n\n    }\n    function keyUpHandler(e) {\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            rightPressed = false;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            leftPressed = false;\n        }\n        else if (e.key == \"Up\" || e.key == \"ArrowUp\") {\n            upPressed = false;\n        }\n        else if (e.key == \"Down\" || e.key == \"ArrowDown\") {\n            downPressed = false;\n        }\n        // QUESTION: why doesn't it return to false\n        else if (e.key == \"Enter\") {\n            enterPressed = false;\n            \n        }\n    }\n\n    function spriteify() {\n        if (duo.sx === 15) {\n            duo.sx = 340;\n        } else if (duo.sx === 340) {\n            duo.sx = 15;\n        }\n    }\n    // function clockSprite(){\n\n    // }\n    // QUESTION: Why doesn't this add to level and reset time\n    function stopWatch (){\n        time -= 1;\n        if (time <= 0 && level >= 3 === false) {\n            \n            level += 1; \n            time += 60;\n        }\n    }\n    function nextLevel (){ //if all hints are toggled, next level\n        for (var i = 0; i < _wordCollections__WEBPACK_IMPORTED_MODULE_5__[\"allLevels\"][level].length; i++) {\n            // debugger\n            let word = _wordCollections__WEBPACK_IMPORTED_MODULE_5__[\"allLevels\"][level][i];\n            if (word.toggle === true ) {\n                return false\n            } else if (i < _wordCollections__WEBPACK_IMPORTED_MODULE_5__[\"allLevels\"][level].length){\n                continue\n            } else {\n                debugger\n                level += 1\n                console.log('congrats!')\n            }\n        } \n    }\n    setInterval(draw, 15)\n    setInterval(spriteify, 750) //duo class?\n    setInterval(stopWatch, 500)\n    setInterval(nextLevel, 1000)\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/sentence.js":
/*!*************************!*\
  !*** ./src/sentence.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sentence; });\n\nclass Sentence {\n    constructor(sentence, x, y, height, width, color){\n        this.x = x;\n        this.y = y;\n        this.height = height;\n        this.width = width;\n        this.color = color;\n        this.sentence = sentence;\n    }\n}\nSentence.prototype.draw = function draw(ctx){\n    ctx.beginPath();\n    ctx.rect(this.x, this.y, this.width, this.height)\n    ctx.font = \"20px serif\";\n    ctx.fillText(this.sentence, this.x + this.width/8, this.y + this.height / 2)\n    \n    ctx.closePath();\n}\n\n//# sourceURL=webpack:///./src/sentence.js?");

/***/ }),

/***/ "./src/word.js":
/*!*********************!*\
  !*** ./src/word.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Word; });\nclass Word {\n    constructor(word1, word2, x, y, width, height, color, toggle){\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.word1 = word1;\n        this.word2 = word2;\n        this.height = height;\n        this.color = color;\n        this.toggle = toggle;\n    }\n}\n// Word('Weebu', canvas.width - 100, canvas.height-75, 150, 75)\n\nWord.prototype.draw = function draw(ctx) {\n    // ctx.clearRect(this.x, this.y, this.width, this.height);\n\n    ctx.beginPath();\n    // changed\n    ctx.rect(this.x, this.y, this.width, this.height)\n    ctx.font = '14px serif'\n    if (this.toggle) {\n        ctx.fillText(this.word1, this.x + this.width/8, this.y + this.height / 2 )\n    } else {\n        ctx.fillText(this.word2, this.x + this.width/8, this.y + this.height / 2)\n\n    }\n    ctx.strokeStyle =this.color;\n    ctx.stroke();\n    \n\n    ctx.closePath();\n}\n\nWord.prototype.clear = function clear(ctx) {\n    ctx.clearRect(this.x, this.y, this.width,this.height)\n}\n\n//# sourceURL=webpack:///./src/word.js?");

/***/ }),

/***/ "./src/wordCollections.js":
/*!********************************!*\
  !*** ./src/wordCollections.js ***!
  \********************************/
/*! exports provided: allLevels, DuoWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allLevels\", function() { return allLevels; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DuoWords\", function() { return DuoWords; });\n/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word */ \"./src/word.js\");\n/* harmony import */ var _sentence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sentence */ \"./src/sentence.js\");\n\n\n\n// constructor(word1, word2, x, y, width, height, color, toggle){\n/* group 1 */\n\n let dog = new _word__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('le chien', 'the dog', 860, 565, 70, 50, 'red', true);\n let cat = new _word__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('el gato', 'the cat', 15, 150, 70, 50, 'red', true);\n//  let sentence = new Sentence(\"Translate this sentence!\", 710, 25, 50, 230, 'yellow')\n let Demo = new _sentence__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Examine the words', 760, 75, 200, 200, 'green');\n\n/* group 2*/\n let iWord = new _word__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('私は', 'I', 860, 565, 70, 50, 'red', true);\n let am = new _word__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('です', 'am', 15, 150, 70, 50, 'red', true);\n let boy = new _word__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('男の子', 'boy', 550, 370, 70, 50, 'red', true);\n let IamABoy = new _sentence__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('私は男の子です', 760, 75, 100, 200, 'green');\n\n/* group 3*/\n let Pret = new _word__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Pret', 'Ready', 860, 565, 70, 50, 'red', true);\n let Manger = new _word__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Manger', 'To eat', 15, 150, 70, 50, 'red', true);\n let PretSentence = new _sentence__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Pret A Manger', 760, 75, 100, 200, 'green');\n\n/* group 4*/\nlet metouf = new _word__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`m'étouffer`, 'suffocate me', 860, 565, 70, 50, 'red', true );\nlet papa = new _word__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('papa', 'daddy', 15, 150, 70, 50, 'red', true);\nlet metoufSentence = new _sentence__WEBPACK_IMPORTED_MODULE_1__[\"default\"](`étouffer-moi, papa`, 760, 75, 200, 200, 'green');\n /* levels */\nlet level1 = [dog,cat, Demo];\nlet level2 = [iWord,am,boy, IamABoy];\nlet level3 = [Pret, Manger, PretSentence];\nlet level4 = [metouf, papa, metoufSentence]\n\n\nconst allLevels = {1: level1, 2: level2, 3:level3, 4:level4};\nconst DuoWords = [\n    am, iWord, boy, Pret, Manger, dog, cat, metouf, papa\n]\n//     constructor(sentence, x, y, height, width, color)\n\n\n//# sourceURL=webpack:///./src/wordCollections.js?");

/***/ }),

/***/ "./vendor/keymaster.js":
/*!*****************************!*\
  !*** ./vendor/keymaster.js ***!
  \*****************************/
/*! exports provided: rightPressed, leftPressed, upPressed, downPressed, keyDownHandler, keyUpHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rightPressed\", function() { return rightPressed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"leftPressed\", function() { return leftPressed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"upPressed\", function() { return upPressed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"downPressed\", function() { return downPressed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keyDownHandler\", function() { return keyDownHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keyUpHandler\", function() { return keyUpHandler; });\n\n\n let rightPressed = false;\n let leftPressed = false;\n let upPressed = false;\n let downPressed = false;\n\n\nconst keyDownHandler = (e)=> {\n    if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n        rightPressed = true;\n    }\n    else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n        leftPressed = true;\n    }\n    else if (e.key == \"Up\" || e.key == \"ArrowUp\") {\n        upPressed = true;\n    }\n    else if (e.key == \"Down\" || e.key == \"ArrowDown\") {\n        downPressed = true;\n    }\n}\n\nconst keyUpHandler = (e)=> {\n    if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n        rightPressed = false;\n    }\n    else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n        leftPressed = false;\n    }\n    else if (e.key == \"Up\" || e.key == \"ArrowUp\") {\n        upPressed = false;\n    }\n    else if (e.key == \"Down\" || e.key == \"ArrowDown\") {\n        downPressed = false;\n    }\n}\n\n\n\n//# sourceURL=webpack:///./vendor/keymaster.js?");

/***/ })

/******/ });