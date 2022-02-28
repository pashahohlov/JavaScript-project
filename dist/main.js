/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_services_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/services-modal */ \"./src/modules/services-modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_caculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/caculator */ \"./src/modules/caculator.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/form */ \"./src/modules/form.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_services_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_caculator__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n\n//# sourceURL=webpack://megaproject/./src/index.js?");

/***/ }),

/***/ "./src/modules/caculator.js":
/*!**********************************!*\
  !*** ./src/modules/caculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n    const calcBlock = document.querySelector('#calc')\r\n    const calcType = document.querySelector('#calc-type')\r\n    const calcTypeMaterial = document.querySelector('#calc-type-material')\r\n    const calcSquare = document.querySelector('#calc-input')\r\n    const calcTotal = document.querySelector('#calc-total')\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n        const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value\r\n        const calcSquareValue = calcSquare.value\r\n        let calcTotalValue = 0\r\n\r\n        if (calcType.value && calcTypeMaterial.value && calcSquare.value) {\r\n            calcTotalValue = calcTypeValue * calcTypeMaterialValue * calcSquareValue\r\n        } else {\r\n            calcTotalValue = 0\r\n        }\r\n\r\n        calcTotal.value = calcTotalValue\r\n    }\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n        if (e.target === calcType || e.target === calcTypeMaterial || e.target === calcSquare) {\r\n            countCalc()\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://megaproject/./src/modules/caculator.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst form = () => {\r\n    const forms = document.querySelectorAll('.form-horizontal')\r\n    console.log(forms);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n//# sourceURL=webpack://megaproject/./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const modal = document.querySelector('.header-modal')\r\n    const overlay = document.querySelector('.overlay')\r\n    const button = document.querySelector('.header-modal__btn')\r\n    const closeBtn = modal.querySelector('.header-modal__close')\r\n\r\n    button.addEventListener('click', () => {\r\n        modal.style.display = 'flex'\r\n        overlay.style.display = 'flex'\r\n    })\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        modal.style.display = 'none'\r\n        overlay.style.display = 'none'\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://megaproject/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const btn = document.querySelector('.smooth-scroll')\r\n    window.onscroll = () => {\r\n        if(window.scrollY > 300) {\r\n            btn.style.display = 'flex'\r\n        } else {\r\n            btn.style.display = 'none'\r\n        }\r\n    }\r\n\r\n    btn.onclick = () => {\r\n        window.scrollTo({\r\n            top: 0,\r\n            left: 0,\r\n            behavior: 'smooth'\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://megaproject/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/services-modal.js":
/*!***************************************!*\
  !*** ./src/modules/services-modal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst servicesModal = () => {\r\n    const servicesModal = document.querySelector('.services-modal')\r\n    const overlay = document.querySelector('.overlay')\r\n    const button = document.querySelectorAll('.btn-sm')\r\n    const closeBtn = servicesModal.querySelector('.services-modal__close')\r\n\r\n    button.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            servicesModal.style.display = 'flex'\r\n            overlay.style.display = 'flex'\r\n        })\r\n    })\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        servicesModal.style.display = 'none'\r\n        overlay.style.display = 'none'\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesModal);\n\n//# sourceURL=webpack://megaproject/./src/modules/services-modal.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = () => {\r\n    const timerBlocks = document.querySelectorAll('.count-wrap')\r\n\r\n    const getTimeRemaining = (deadline) => {\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n        return {timeRemaining, days, hours, minutes, seconds}\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining('28 february 2022')\r\n        timerBlocks.forEach(timerBlock => {\r\n            const timerDays = timerBlock.querySelector('#days')\r\n            const timerHours = timerBlock.querySelector('#hours')\r\n            const timerMinutes = timerBlock.querySelector('#minutes')\r\n            const timerSeconds = timerBlock.querySelector('#seconds') \r\n            \r\n            timerDays.textContent = getTime.days < 10 ? '0' + getTime.days : getTime.days;\r\n            timerHours.textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;\r\n            timerMinutes.textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;\r\n            timerSeconds.textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;\r\n\r\n            if (getTime.timeRemaining > 0) {\r\n                setTimeout(updateClock, 1000)\r\n            }\r\n        })\r\n\r\n    }\r\n    updateClock()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://megaproject/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;