// @ts-check
/* eslint-disable */

//* ****** EcmaScript 2015 (ES6): Default Parameter Values
function sum(x = 1, y = 2, z = 3) {
    return x + y + z;
}
console.log(sum(4, 2));

// function above is the same as
function sum2(x, y, z) {
    if (x === undefined) x = 1;
    if (y === undefined) y = 2;
    if (z === undefined) z = 3;
    return x + y + z;
}
console.log(sum2(4, 2));

// or
function sum3() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 0 && arguments[1] !== undefined ? arguments[1] : 2;
    var z = arguments.length > 0 && arguments[2] !== undefined ? arguments[2] : 3;

    return x + y + z;
}
console.log(sum3(4, 2));

//* ****** EcmaScript 6: spread operator ('...')
let params = [3, 4, 5];
console.log(sum(...params));
console.log(sum.apply(undefined, params));

let numbers = [1, 2, ...params];
console.log(numbers);

//* ****** EcmaScript 6: rest parameter ('...')
function restParamaterFunction(x, y, ...a) {
    return (x + y) * a.length;
}
console.log(restParamaterFunction(1, 2, 'hello', true, 7));

// code above is the same as ES5:
function restParamaterFunction2(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}
console.log(restParamaterFunction2(1, 2, 'hello', true, 7));
