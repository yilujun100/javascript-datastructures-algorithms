(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.CalcArea = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // @ts-check
  /* eslint-disable */

  // ES2016中引入了**运算符，用来进行指数运算
  var circleArea = exports.circleArea = function circleArea(r) {
    return 3.14 * Math.pow(r, 2);
  }; // 也可以使用Math.pow(r, 2)

  var squareArea = exports.squareArea = function squareArea(s) {
    return s * s;
  };

  // export { circleArea, squareArea }
  exports.circle = circleArea;
  exports.square = squareArea;
});