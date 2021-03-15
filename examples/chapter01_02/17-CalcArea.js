// @ts-check
/* eslint-disable */

// ES2016中引入了**运算符，用来进行指数运算
export const circleArea = (r) => 3.14 * r ** 2; // 也可以使用Math.pow(r, 2)

export const squareArea = (s) => s * s;

// export { circleArea, squareArea }
export { circleArea as circle, squareArea as square };
