/** 算术运算符 */
// + - * / % ++ --
var num = 0;
console.log('num value is ' + num);

num = num + 2;
console.log('New num value is ' + num);

num = num * 3;
console.log('New num value is ' + num);

num = num / 2;
console.log('New num value is ' + num);
// console.log(10 / 0); // Infinity 不允许0作为除数
// console.log(0 / 0); // NaN

num++;
num--;
/**
 * 递增、递减分为前置型和后置型
 * 前置型：变量的值都是在语句被求值以前发生改变
 * 后置型：变量的值都是在语句被求值以后发生改变
 * 单独对一个操作数使用，递增或递减，不和别的发生计算，是没有关系的，结果都是一样的
 * 一旦需要和别的发生计算：
 *  前置型：num1基础上，进行+1操作，然后和2进行相加
 *  后置型：num2基础上，和2进行相加，注意：在计算之前，并没有发生自增的情况，但是计算完成之后，还是会自增的。
 */
var num1 = 0;
var num2 = 0;

var result1 = ++num1 + 2;
var result2 = num2++ + 2;
console.log('result value is ', result1, result2);

console.log('New num value is ' + num);

console.log('num mod 2 value is ' + (num % 2));

/** 一元操作符 */
// + -
// 如果操作数是Number类型，并且是个数值，那么这个运算符对我们并不会产生任何的影响
// 不论是正号还是负号，对NaN都是不会产生任何影响的
// 如果是其他类型，会经过隐式类型转换
//  - Boolean会通过Number进行转换，然后变成一个数字类型
//  - Null会通过Number进行转换，然后变成一个数字类型
//  - Undefined会通过Number进行转换，然后变成一个数字类型
console.log(+5);
console.log(-NaN);
console.log(+true);
console.log(+null);
console.log(+undefined);
/**
 * + 用途：
 * 1. 加法运算符
 * 2. 字符串拼接
 * 3. 一元加运算符
 */

/** 赋值运算符 */
// = += -= *= /= %=
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('New num value is ' + num);

/** 比较运算符 */
// == === != > >= < <=
console.log('num == 1 : ' + (num == 1));
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));

/** 逻辑运算符 */
// && || !
console.log('true && false: ' + (true && false));
console.log('true || false: ' + (true || false));
console.log('!true: ' + !true);

/** 位运算符 */
// & | ~ ^ << >>
// 位运算符相关操作规则见：位运算符.js
console.log('5 & 1:', 5 & 1); // same as 0101 & 0001 (result 0001 / 1)
console.log('5 | 1:', 5 | 1); // same as 0101 | 0001 (result 0101 / 5)
console.log('~ 5:', ~5); // -6
console.log('5 ^ 1:', 5 ^ 1); // same as 0101 ^ 0001 (result 0100 / 4)
console.log('5 << 1:', 5 << 1); // same as 0101 << 1 (result 1010 / 10)
console.log('5 >> 1:', 5 >> 1); // same as 0101 >> 1 (result 0010 / 2)

/** typeof */
// 在JavaScript中有两种数据类型：
// 1.原始数据类型: number string boolean null undefined Symbol bigInt(es2020)
// 2.派生数据类型/对象: JavaScript对象，包括函数、数组和正则表达式
console.log('typeof num:', typeof num);
console.log('typeof Yilujun100:', typeof 'Yilujun100');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1, 2, 3]);
console.log('typeof {name: John}:', typeof { name: 'John' });

/** delete */
// JavaScript支持delete运算符，可以删除对象里的属性
var myObj = { name: 'John', age: 21 };
delete myObj.age;
console.log(myObj); // Object { name: "John" }
