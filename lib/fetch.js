'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Headers = exports.Request = exports.Response = exports.fetch = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _ywlFetch = require('ywl-fetch');

var _interceptor = require('./interceptor');

var _interceptor2 = _interopRequireDefault(_interceptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var coreFetch = void 0,
    coreResponse = void 0,
    coreRequest = void 0,
    coreHeaders = void 0;
// if (window && window.fetch) {
//   coreFetch = window.fetch
//   coreResponse = window.Response
//   coreRequest = window.Request
//   coreHeaders = window.Headers
// }
// else {
coreFetch = _ywlFetch.fetch;
exports.Response = coreResponse = _ywlFetch.Response;
exports.Request = coreRequest = _ywlFetch.Request;
exports.Headers = coreHeaders = _ywlFetch.Headers;
// }


var zyFetch = function zyFetch(url, option) {
  var chain = [];
  var request = new coreRequest(url, option);
  var promise = _promise2.default.resolve(request);

  //set request promise
  zyFetch.interceptors.request.forEach(function (interceptor) {
    chain.unshift(interceptor.resolve, interceptor.reject);
  });
  // set fetch api promise
  chain.push(handleFetch);

  //set response promise
  zyFetch.interceptors.response.forEach(function (interceptor) {
    chain.push(interceptor.resolve, interceptor.reject);
  });

  function handleFetch(request) {
    return coreFetch(request);
  }

  while (chain.length >= 2) {
    promise = promise.then(chain.shift(), chain.shift());
  }
  //wait request chain finished
  // await promise.then(() => {
  // console.info('chain处理成功')
  // }).catch(() => {
  // console.info('chain处理失败')
  // })
  return promise;
};

zyFetch.interceptors = {
  request: new _interceptor2.default(),
  response: new _interceptor2.default()
};

exports.fetch = zyFetch;
exports.Response = coreResponse;
exports.Request = coreRequest;
exports.Headers = coreHeaders;