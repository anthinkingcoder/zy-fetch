"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Interceptor = function () {
  function Interceptor() {
    (0, _classCallCheck3.default)(this, Interceptor);

    this.handlers = [];
  }

  (0, _createClass3.default)(Interceptor, [{
    key: "use",
    value: function use(resolve, reject) {
      this.handlers.push({
        resolve: resolve,
        reject: reject
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

exports.default = Interceptor;