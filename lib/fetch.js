'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Headers = exports.Request = exports.Response = exports.fetch = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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


var zyFetch = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url, option) {
    var chain, request, promise;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            chain = [];
            request = new coreRequest(url, option);
            promise = _promise2.default.resolve(request);

            zyFetch.interceptors.request.forEach(function (interceptor) {
              chain.push(interceptor.resolve, interceptor.reject);
            });

            while (chain.length >= 2) {
              promise = promise.then(chain.shift(), chain.shift());
            }
            //wait request chain finished
            _context.next = 7;
            return promise.then(function () {
              // console.info('chain处理成功')
            }).catch(function () {
              // console.info('chain处理失败')
            });

          case 7:
            return _context.abrupt('return', coreFetch(request));

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function zyFetch(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

zyFetch.interceptors = {
  request: new _interceptor2.default(),
  response: new _interceptor2.default()
};

exports.fetch = zyFetch;
exports.Response = coreResponse;
exports.Request = coreRequest;
exports.Headers = coreHeaders;