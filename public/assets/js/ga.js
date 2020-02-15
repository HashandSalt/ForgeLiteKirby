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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ga-lite/dist/ga-lite.min.js":
/*!**************************************************!*\
  !*** ./node_modules/ga-lite/dist/ga-lite.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return(r={},o.m=n=[function(e,t){Array.from=Array.from||function(){var e;return(e=Array.prototype.slice).call.apply(e,arguments)}},function(e,t,n){"use strict";n.r(t);var o={};function f(e){return o[e]}function r(t){if("undefined"!=typeof navigator&&navigator.sendBeacon&&navigator.sendBeacon(t))return;try{var e=new window.XMLHttpRequest;e.open("GET",t,!1),e.send()}catch(e){(new window.Image).src=t}}var i="uid";function c(e,t){var n=1<arguments.length&&void 0!==t?t:[];return!e||-1<n.indexOf(void 0)?"":"&"+e+"="+n.map(encodeURIComponent).join("")}function u(e){return"boolean"==typeof e?+e:e}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(n){return Object.keys(n).filter(function(e){return Object.prototype.hasOwnProperty.call(d,e)}).filter(function(e){return n[e]}).reduce(function(e,t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){l(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},e,l({},d[t],n[t]))},{})}var d={anonymizeIp:"aip",dataSource:"ds",queueTime:"qt",userId:"uid",sessionControl:"sc",referrer:"dr",campaignName:"cn",campaignSource:"cs",campaignMedium:"cm",campaignKeyword:"ck",campaignContent:"cc",campaignId:"ci",screenResolution:"sr",viewportSize:"vp",encoding:"de",screenColors:"sd",language:"ul",javaEnabled:"je",flashVersion:"fl",hitType:"t",nonInteraction:"ni",location:"dl",hostname:"dh",page:"dp",title:"dt",screenName:"cd",linkid:"linkid",appName:"an",appId:"aid",appVersion:"av",appInstallerId:"aiid",eventCategory:"ec",eventAction:"ea",eventLabel:"el",eventValue:"ev",currencyCode:"cu",socialNetwork:"sn",socialAction:"sa",socialTarget:"st",timingCategory:"utc",timingVar:"utv",timingValue:"utt",timingLabel:"utl",exDescription:"exd",exFatal:"exf",expId:"xid",expVar:"xvar"};function p(e,t,n,r,o){var i=4<arguments.length&&void 0!==o&&o,a=function(e){var t=0<arguments.length&&void 0!==e?e:{};return Object.keys(t).map(function(e){return[e,t[e]].map(u).map(encodeURIComponent).join("=")}).join("&")}(s(3<arguments.length&&void 0!==r?r:{}));return"https://www.google-analytics.com/collect?v=1&ul=en-us&de=UTF-8"+c("dl",[document.location.href])+c("dt",[document.title])+c("sd",[window.screen.colorDepth,"-bit"])+c("sr",[window.screen.availWidth,"x",window.screen.availHeight])+c("vp",[window.innerWidth,"x",window.innerHeight])+c("dr",[document.referrer])+(a?"&"+a:"")+(i?"&aip=1":"")+"&cid="+n+"&tid="+e+"&z="+t}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m="t0",w=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.fields={trackingId:e},this.userId=function(e){var t=0<arguments.length&&void 0!==e?e:window?window.localStorage:null;if(t&&t.getItem(i))return t.getItem(i);var n=Math.random()+"."+Math.random();return t&&t.setItem(i,n),n}(),this._sendTo=r,this._getTime=h}return function(e,t,n){t&&b(e.prototype,t),n&&b(e,n)}(t,[{key:"send",value:function(e){if(!function(e){return!0===window["ga-disable-".concat(e)]}(this.fields.trackingId)){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(n,!0).forEach(function(e){g(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({hitType:e},function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];{if(1===t.length&&t[0].constructor===Object)return t[0];switch(e){case"pageview":return{page:v(t,1)[0]};case"event":var n=v(t,4),r=n[0],o=n[1],i=n[2],a=n[3];return{eventCategory:r,eventAction:o,eventLabel:i,eventValue:a};case"social":var c=v(t,3),u=c[0],l=c[1],f=c[2];return{socialNetwork:u,socialAction:l,socialTarget:f};case"timing":var s=v(t,4),d=s[0],p=s[1],y=s[2],g=s[3];return{timingCategory:d,timingVar:p,timingValue:y,timingLabel:g};default:return{}}}}(e,n),{},this.fields),i=p(this.fields.trackingId,this._getTime(),this.userId,o);this._sendTo(i)}}},{key:"get",value:function(e){return this.fields[e]}},{key:"set",value:function(e,t){this.fields[e]=t}}]),t}();function h(){return(new Date).getTime()}var O={create:function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:m,r=new w(e);return function(e,t){o[e]=t}(n,r),r},getByName:function(e){return f(e)}};n(0);function j(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(e){if(1!==parseInt(navigator.msDoNotTrack||window.doNotTrack||navigator.doNotTrack,10)){for(var t=P(function(e){return"string"==typeof e&&-1<e.indexOf(".")?e.split("."):[m,e]}(e),2),n=t[0],r=t[1],o=!!O[e],i=!!w.prototype[r]&&"constructor"!==r,a=arguments.length,c=new Array(1<a?a-1:0),u=1;u<a;u++)c[u-1]=arguments[u];if(o)O[e].apply(O,c);else if(i){var l=f(n);l&&l[r].apply(l,c)}else{if("function"!=typeof e)throw new Error("Command ".concat(e," is not available in ga-lite"));e(f(n))}}}n.d(t,"default",function(){return x}),Object.keys(O).forEach(function(e){x[e]=O[e]}),("undefined"==typeof window?[]:window.galite&&window.galite.q||[]).forEach(function(e){return x.apply(void 0,j(e))})}],o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)).default;function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var n,r});

/***/ }),

/***/ "./src/js/ga.js":
/*!**********************!*\
  !*** ./src/js/ga.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ======================================================================
// Tracking
// ======================================================================
var galite = __webpack_require__(/*! ga-lite */ "./node_modules/ga-lite/dist/ga-lite.min.js"); // ======================================================================
// Google Analytics
// ======================================================================
// console.log(location.hostname);


host = location.hostname;
pattern = /(dev)|(test)|(localhost)/;

if (!host.match(pattern)) {
  // console.log('live domain');
  galite('create', 'UA-XXXXXXXXX-1', 'auto');
  galite('send', 'pageview');
  window.addEventListener('unload', function () {
    galite('send', 'timing', 'JS Dependencies', 'unload');
  });
} else {// console.log('test domain');
}

/***/ }),

/***/ 1:
/*!****************************!*\
  !*** multi ./src/js/ga.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Server/Forge/ForgeLite/src/js/ga.js */"./src/js/ga.js");


/***/ })

/******/ });
//# sourceMappingURL=ga.js.map