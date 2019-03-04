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

/***/ "./src/acordeon.js":
/*!*************************!*\
  !*** ./src/acordeon.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultSettings = {
  hideAll: false,
  showAll: false,
  onlyOne: false,
  showId: undefined,
  openClass: '-open',
  headerSelector: '.collapse-header',
  contentSelector: '.collapse-content'
};

var Acordeon = function Acordeon(_ref) {
  var _this = this;

  var selector = _ref.selector,
      _ref$settings = _ref.settings,
      settings = _ref$settings === void 0 ? {} : _ref$settings,
      _ref$onShow = _ref.onShow,
      _onShow = _ref$onShow === void 0 ? function () {} : _ref$onShow,
      _ref$onHide = _ref.onHide,
      _onHide = _ref$onHide === void 0 ? function () {} : _ref$onHide;

  _classCallCheck(this, Acordeon);

  _defineProperty(this, "Show", function (el) {
    var onShow = _this.onShow,
        hideAll = _this.hideAll;
    var _this$settings = _this.settings,
        openClass = _this$settings.openClass,
        contentSelector = _this$settings.contentSelector,
        onlyOne = _this$settings.onlyOne;

    var _el$querySelectorAll = el.querySelectorAll(contentSelector),
        _el$querySelectorAll2 = _slicedToArray(_el$querySelectorAll, 1),
        content = _el$querySelectorAll2[0];

    var scrollHeight = content.scrollHeight,
        style = content.style;
    var maxHeight = "".concat(scrollHeight, "px");
    style.maxHeight = maxHeight;
    el.classList.add(openClass);
    if (onlyOne) hideAll({
      ignore: el
    });
    onShow(el);
  });

  _defineProperty(this, "Hide", function (el) {
    var onHide = _this.onHide;
    var _this$settings2 = _this.settings,
        openClass = _this$settings2.openClass,
        contentSelector = _this$settings2.contentSelector;

    var _el$querySelectorAll3 = el.querySelectorAll(contentSelector),
        _el$querySelectorAll4 = _slicedToArray(_el$querySelectorAll3, 1),
        content = _el$querySelectorAll4[0];

    var scrollHeight = content.scrollHeight,
        style = content.style;
    var maxHeight = "0px";
    style.maxHeight = maxHeight;
    el.classList.remove(openClass);
    onHide(el);
  });

  _defineProperty(this, "toggle", function (el) {
    var Show = _this.Show,
        Hide = _this.Hide;
    var openClass = _this.settings.openClass;
    if (el.classList.contains(openClass)) Hide(el);else Show(el);
  });

  _defineProperty(this, "toggleById", function (id) {
    var panels = _this.panels;
    var el = panels[id];

    _this.toggle(el);
  });

  _defineProperty(this, "showAll", function () {
    var show = _this.show,
        panels = _this.panels;
    var _this$settings3 = _this.settings,
        openClass = _this$settings3.openClass,
        contentSelector = _this$settings3.contentSelector;
    panels.forEach(function (el) {
      Show(el);
    });
  });

  _defineProperty(this, "hideAll", function (_ref2) {
    var _ref2$ignore = _ref2.ignore,
        ignore = _ref2$ignore === void 0 ? undefined : _ref2$ignore;
    var Hide = _this.Hide,
        panels = _this.panels;
    panels.forEach(function (el) {
      if (ignore !== el) Hide(el);
    });
  });

  _defineProperty(this, "init", function () {
    var panels = _this.panels;
    var _this$settings4 = _this.settings,
        showAll = _this$settings4.showAll,
        hideAll = _this$settings4.hideAll,
        showFirst = _this$settings4.showFirst,
        showId = _this$settings4.showId,
        headerSelector = _this$settings4.headerSelector;
    panels.forEach(function (el) {
      var _el$querySelectorAll5 = el.querySelectorAll(headerSelector),
          _el$querySelectorAll6 = _slicedToArray(_el$querySelectorAll5, 1),
          header = _el$querySelectorAll6[0];

      if (!header) return;
      header.addEventListener('click', function (e) {
        e.preventDefault();

        _this.toggle(el);
      });
    });
    if (showAll) _this.showAll();
    if (hideAll) _this.hideAll();
    if (showId) _this.toggleById(parseInt(showId, 10));
  });

  this.settings = _objectSpread({}, defaultSettings, settings);
  this.selector = selector;
  this.onShow = _onShow;
  this.onHide = _onHide;
  this.panels = document.querySelectorAll(selector);
};

/* harmony default export */ __webpack_exports__["default"] = (Acordeon);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _acordeon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acordeon.js */ "./src/acordeon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _acordeon_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.map