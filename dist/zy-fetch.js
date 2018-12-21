(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _zyFetchs = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

if (typeof window !== 'undefined' && typeof self !== 'undefined') {
  self.fetch = _zyFetchs.default;
}

if (global) {
  global.fetch = _zyFetchs.default;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _zyFetch = _interopRequireDefault(__webpack_require__(3));

var _config = _interopRequireDefault(__webpack_require__(15));

var _nativeFetch = _interopRequireDefault(__webpack_require__(16));

var _extend = __webpack_require__(19);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var nativeFetch = (0, _nativeFetch.default)();

function createInstance(option) {
  var zy = new _zyFetch.default(option, nativeFetch);
  var instance = proxy(zy.send, zy);

  function proxy(fn, thisArgs) {
    return function (init, option) {
      return fn.call(thisArgs, init, option);
    };
  } // extend method


  Object.getOwnPropertyNames(_zyFetch.default.prototype).forEach(function (name) {
    instance[name] = zy[name];
  }); // extend own  prop

  Object.getOwnPropertyNames(zy).forEach(function (name) {
    instance[name] = zy[name];
  });
  return instance;
}

var zyFetch = createInstance((0, _extend.deepCopy)(_config.default));

zyFetch.create = function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var option = (0, _extend.deepCopy)(_config.default);
  Object.assign(option, config);
  return createInstance(option);
};

module.exports = zyFetch; //for TypeScript.

exports.default = zyFetch;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interceptor = _interopRequireDefault(__webpack_require__(4));

var _transformResponse = _interopRequireDefault(__webpack_require__(5));

var _transformRequest = _interopRequireDefault(__webpack_require__(6));

var _checkStatus = _interopRequireDefault(__webpack_require__(8));

var _timeout = _interopRequireDefault(__webpack_require__(9));

var _promiseTask = _interopRequireDefault(__webpack_require__(10));

var _buildSearchParams = _interopRequireDefault(__webpack_require__(11));

var _typeCheck = __webpack_require__(7);

var _baseUrl = __webpack_require__(12);

var _normalizeHeaderName = _interopRequireDefault(__webpack_require__(13));

var _retry = _interopRequireDefault(__webpack_require__(14));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var zyFetch =
/*#__PURE__*/
function () {
  function zyFetch(config, fetch) {
    _classCallCheck(this, zyFetch);

    this.config = config;
    this.nativeFetch = fetch;
    this.interceptors = {
      request: new _interceptor.default(),
      response: {
        transform: new _interceptor.default(),
        noTransform: new _interceptor.default()
      }
    };
  }

  _createClass(zyFetch, [{
    key: "send",
    value: function send(init) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var config = {}; // merge config

      Object.assign(config, this.config, option);

      var request = this._getRequest(init, config);

      var promiseTask = new _promiseTask.default();

      this._initPromiseTask(promiseTask, config, request);

      return promiseTask.execute(request);
    }
  }, {
    key: "get",
    value: function get(init, option) {
      option = this._methodsOptionMerge(option, 'get');
      return this.send(init, option);
    }
  }, {
    key: "delete",
    value: function _delete(init, option) {
      option = this._methodsOptionMerge(option, 'get');
      return this.send(init, option);
    }
  }, {
    key: "options",
    value: function options(init, option) {
      option = this._methodsOptionMerge(option, 'get');
      return this.send(init, option);
    }
  }, {
    key: "head",
    value: function head(init, option) {
      option = this._methodsOptionMerge(option, 'get');
      return this.send(init, option);
    }
  }, {
    key: "post",
    value: function post(init, body, option) {
      option = this._methodsOptionMerge(option, 'post', body);
      return this.send(init, option);
    }
  }, {
    key: "put",
    value: function put(init, body, option) {
      option = this._methodsOptionMerge(option, 'put', body);
      return this.send(init, option);
    }
  }, {
    key: "patch",
    value: function patch(init, body, option) {
      option = this._methodsOptionMerge(option, 'patch', body);
      return this.send(init, option);
    }
    /**
     *
     * @param fetchs some fetch
     * @returns {Promise.<*[]>} return promise
     */

  }, {
    key: "all",
    value: function all(fetchs) {
      return Promise.all(fetchs);
    }
    /**
     * Execute fetch in sequence
     * @param fetchs some fetch
     */

  }, {
    key: "allByOrder",
    value: function allByOrder(fetchs) {
      var _this = this;

      var responseArray = [];
      var promise = null;

      var _loop = function _loop(i) {
        if (!promise) {
          promise = Promise.resolve(function () {
            fetchs[i].call(_this);
          });
        } else {
          promise = promise.then(function (data) {
            responseArray.push(data);

            if (i === fetchs.length) {
              return responseArray;
            }

            return fetchs[i].call(_this);
          });
        }
      };

      for (var i = 0; i <= fetchs.length; i++) {
        _loop(i);
      }

      return promise.then();
    }
    /**
     * 将函数的数组参数解构 [1,2,3] => 1,2,3
     * @param cb
     * @returns {Function}
     */

  }, {
    key: "spread",
    value: function spread(cb) {
      return function (args) {
        return cb.apply(null, args);
      };
    }
  }, {
    key: "_initPromiseTask",
    value: function _initPromiseTask(promiseTask, config, request) {
      var interceptors = this.interceptors; // set request promise

      interceptors.request.forEach(function (interceptor) {
        promiseTask.add(interceptor.onFulfilled, interceptor.onRejected);
      });
      var fetch; //set timeout

      if (config.timeout && config.timeout > 0) {
        fetch = (0, _timeout.default)(this.nativeFetch, config.timeout);
        promiseTask.add(fetch);
      } else {
        fetch = this.nativeFetch;
        promiseTask.add(fetch);
      } //set checkStatus promise


      promiseTask.add(_checkStatus.default); //set retry

      if (config.retry && config.retry > 1) {
        promiseTask.add.apply(promiseTask, _toConsumableArray((0, _retry.default)(fetch, request, {
          'retryCount': config.retry,
          'retryTimeout': config.retryTimeout
        })));
      } //set before transform response interceptors promise


      interceptors.response.noTransform.forEach(function (interceptor) {
        promiseTask.add(interceptor.onFulfilled, interceptor.onRejected);
      }); //set transform response promise

      if (config.transformResponse) {
        promiseTask.add(_transformResponse.default.bind(this, config.responseType)); // set after transform response promise

        interceptors.response.transform.forEach(function (interceptor) {
          promiseTask.add(interceptor.onFulfilled, interceptor.onRejected);
        });
      }
    }
  }, {
    key: "_methodsOptionMerge",
    value: function _methodsOptionMerge() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var method = arguments.length > 1 ? arguments[1] : undefined;
      var body = arguments.length > 2 ? arguments[2] : undefined;
      Object.assign(option, {
        method: method,
        body: body
      });
      return option;
    }
  }, {
    key: "_getRequest",
    value: function _getRequest(init, config) {
      (0, _normalizeHeaderName.default)(config.headers, 'Content-Type'); //handle body

      config.body = config.transformRequest && config.body ? (0, _transformRequest.default)(config.body, config.headers) : config.body;
      var isRequest = init instanceof Request; //handle url

      var isNeedMerge = false;
      var url = isRequest ? init.url : init;

      if (config.baseUrl && !(0, _baseUrl.isAbsoluteURL)(url)) {
        url = (0, _baseUrl.buildAbsoluteURL)(config.baseUrl, url);
        isNeedMerge = true;
      } // like //www.github.com -> https://www.github.com


      if (/^\/\//.test(url)) {
        url = url.replace(/(?=^\/\/)/, 'https:');
        isNeedMerge = true;
      }

      if (config.params) {
        url = (0, _buildSearchParams.default)(url, config.params);
        isNeedMerge = true;
      }

      if (isRequest) {
        if (isNeedMerge) {
          return this._mergeRequest(url, init, config);
        } else {
          return new Request(init, config);
        }
      }

      return new Request(url, config);
    }
  }, {
    key: "_mergeRequest",
    value: function _mergeRequest(url, request, config) {
      var copyRequest = {}; //copy request props, but body can not get, so request.body will be ignore

      for (var key in request) {
        var val = request[key];

        if (!(0, _typeCheck.isFunction)(val)) {
          copyRequest[key] = val;
        }
      }

      Object.assign(copyRequest, config);
      return new Request(url, copyRequest);
    }
  }]);

  return zyFetch;
}();

module.exports = zyFetch;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Interceptor =
/*#__PURE__*/
function () {
  function Interceptor() {
    _classCallCheck(this, Interceptor);

    this.handlers = [];
  }

  _createClass(Interceptor, [{
    key: "use",
    value: function use(onFulfilled, onRejected) {
      this.handlers.push({
        onFulfilled: onFulfilled,
        onRejected: onRejected
      });
      return this.handlers.length - 1;
    }
  }, {
    key: "remove",
    value: function remove(id) {
      if (this.handlers[id]) {
        delete this.handlers[id];
        this.handlers[id] = null;
        return true;
      }

      return false;
    }
  }, {
    key: "forEach",
    value: function forEach(callback, thisArgs) {
      this.handlers.forEach(callback, thisArgs);
    }
  }]);

  return Interceptor;
}();

module.exports = Interceptor;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformResponse;

function transformResponse(responseType, response) {
  switch (responseType) {
    case 'json':
      {
        return response.json().then(function (res) {
          if (typeof res === 'string') {
            return JSON.parse(res);
          } else {
            return res;
          }
        });
      }

    case 'blob':
      {
        return response.blob();
      }

    case 'text':
      {
        return response.text();
      }

    case 'arrayBuffer':
      {
        return response.arrayBuffer();
      }

    case 'formData':
      {
        return response.formData();
      }

    default:
      {
        return Promise.resolve(response);
      }
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformRequest;

var _typeCheck = __webpack_require__(7);

function transformRequest(body, headers) {
  if ((0, _typeCheck.isNormalObject)(body)) {
    headers['Content-Type'] = 'application/json;charset=utf-8';
    return JSON.stringify(body);
  }

  return body;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDate = isDate;
exports.isArray = isArray;
exports.isObject = isObject;
exports.isFunction = isFunction;
exports.isNormalObject = isNormalObject;

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

var toString = Object.prototype.toString;
/**
 * 对象是否为date类型
 */

function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * 对象是否为array类型
 */


function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * 对象是否为对象类型
 */


function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
/**
 * 对象是否为函数类型
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * 对象是否为普通对象类型
 */


function isNormalObject(val) {
  return toString.call(val) === '[object Object]';
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkStatus;

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getTimeoutFetch(fetch, timeout) {
  var timeoutFetch;

  if (fetch.polyfill) {
    timeoutFetch = function timeoutFetch(request) {
      return fetch(request, {
        timeout: timeout
      });
    };
  } else {
    timeoutFetch = function timeoutFetch(request) {
      return new Promise(function (resolve, reject) {
        var timeoutId = setTimeout(function () {
          reject(new TypeError('Network request timeout'));
        }, timeout);
        fetch(request).then(function (response) {
          clearTimeout(timeoutId);
          resolve(response);
        }).catch(function (err) {
          clearTimeout(timeoutId);
          reject(err);
        });
      });
    };
  }

  return timeoutFetch;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var PromiseChain =
/*#__PURE__*/
function () {
  function PromiseChain() {
    _classCallCheck(this, PromiseChain);

    this.chains = [];
  }

  _createClass(PromiseChain, [{
    key: "add",
    value: function add(onFulfilled, onRejected) {
      this.chains.push({
        onFulfilled: onFulfilled,
        onRejected: onRejected
      });
    }
  }, {
    key: "execute",
    value: function execute(init) {
      var promise = Promise.resolve(init);
      this.chains.forEach(function (_ref) {
        var onFulfilled = _ref.onFulfilled,
            onRejected = _ref.onRejected;
        promise = promise.then(onFulfilled, onRejected);
      });
      this.chains = [];
      return promise;
    }
  }]);

  return PromiseChain;
}();

module.exports = PromiseChain;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildSearchParams;

var _typeCheck = __webpack_require__(7);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

function buildSearchParams(url, params) {
  if (!params) {
    return url;
  }

  var searchParams = [];
  Object.keys(params).forEach(function (key) {
    var value = params[key];

    if (Array.isArray(value)) {
      key = "".concat(key, "[]");
    } else {
      value = [value];
    }

    value.forEach(function (val) {
      if ((0, _typeCheck.isDate)(val)) {
        val = val.toISOString();
      } else if ((0, _typeCheck.isObject)(val)) {
        val = JSON.stringify(val);
      }

      searchParams.push("".concat(encode(key), "=").concat(encode(val)));
    });
  });
  searchParams = searchParams.join('&');

  if (searchParams.length > 0) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + searchParams;
  }

  return url;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAbsoluteURL = isAbsoluteURL;
exports.buildAbsoluteURL = buildAbsoluteURL;

function isAbsoluteURL(url) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}

function buildAbsoluteURL(baseUrl, relativeUrl) {
  return relativeUrl ? "".concat(baseUrl.replace(/\/+$/, ''), "/").concat(relativeUrl.replace(/^\/+/, '')) : baseUrl;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeHeaderName;

function normalizeHeaderName(headers, normalizedName) {
  Object.keys(headers).forEach(function (key) {
    if (key !== normalizedName && key.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[key];
      delete headers[key];
    }
  });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _checkStatus = _interopRequireDefault(__webpack_require__(8));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = function getRetryInterceptor(fetch, request, option) {
  //retry count
  var retryCount = option.retryCount; //timeout

  var retryTimeout = option.retryTimeout;

  var retry = function retry() {
    return fetch(request).then(_checkStatus.default).catch(function (error) {
      return onRejected(error);
    });
  };

  var retryAdapter = function retryAdapter() {
    if (retryTimeout && retryTimeout > 0) {
      return (
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return timeout(retryTimeout);

                case 2:
                  return _context.abrupt("return", retry());

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))
      );
    } else {
      return retry;
    }
  }; //get retry function


  var retryFunction = retryAdapter();

  var onFulfilled = function onFulfilled(result) {
    return result;
  };

  var onRejected =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(error) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(retryCount >= 1)) {
                _context2.next = 5;
                break;
              }

              retryCount--;
              return _context2.abrupt("return", retryFunction());

            case 5:
              return _context2.abrupt("return", Promise.reject(error));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function onRejected(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return [onFulfilled, onRejected];
};

function timeout(timeout) {
  return new Promise(function (resolve) {
    setTimeout(resolve, timeout);
  });
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = {
  headers: {},
  responseType: 'json',
  method: 'get',
  transformResponse: false,
  transformRequest: false,
  credentials: 'same-origin',
  timeout: 0,
  baseUrl: ''
};
module.exports = config;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNativeFetch;

function getNativeFetch() {
  if (typeof window !== 'undefined' && typeof self !== 'undefined') {
    __webpack_require__(17);

    return self.fetch;
  } else {
    var fetch = __webpack_require__(17);

    return fetch;
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //fetch-polyfill url:https://github.com/github/fetch/blob/master/fetch.js

~function (self) {
  if (!self || self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj);
  }

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }

    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }

    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }

    return value;
  } // Build a destructive iterator for the value list


  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return {
          done: value === undefined,
          value: value
        };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }

    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };

      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }

    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;

      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);

        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  } // HTTP methods whose capitalization should be normalized


  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }

      this.url = input.url;
      this.credentials = input.credentials;

      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }

      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;

      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';

    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }

    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }

    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, {
      body: this._bodyInit
    });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2

    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();

      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';

    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, {
      status: 0,
      statusText: ''
    });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, {
      status: status,
      headers: {
        location: url
      }
    });
  };

  var DOMException = self.DOMException;

  try {
    new DOMException();
  } catch (err) {
    DOMException = __webpack_require__(18);
  }

  function fetch(input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new DOMException('Aborted', 'AbortError'));
      }

      var xhr = new XMLHttpRequest(); //add timeout support

      if (init && init.timeout) {
        xhr.timeout = init.timeout;
      }

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function () {
        //ie9
        var status = xhr.status === 1223 ? 204 : xhr.status;
        var options = {
          status: status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request timeout'));
      };

      xhr.onabort = function () {
        reject(new DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function () {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  }

  fetch.polyfill = true;
  self.fetch = fetch;
  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;
}(typeof self !== 'undefined' ? self : void 0);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

var DOMException =
/*#__PURE__*/
function (_Error) {
  _inherits(DOMException, _Error);

  function DOMException(name, message) {
    var _this;

    _classCallCheck(this, DOMException);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DOMException).call(this, message));
    _this.name = name;
    return _this;
  }

  return DOMException;
}(_wrapNativeSuper(Error));

module.exports = DOMException;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepCopy = deepCopy;

var _typeCheck = __webpack_require__(7);

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function deepCopy(obj) {
  var deepObj;

  if ((0, _typeCheck.isArray)(obj)) {
    deepObj = [];
  } else if (_typeof(obj) === 'object') {
    deepObj = {};
  } else {
    return obj;
  }

  Object.keys(obj).forEach(function (key) {
    deepObj[key] = deepCopy(obj[key]);
  });
  return deepObj;
}

/***/ })
/******/ ]);
});