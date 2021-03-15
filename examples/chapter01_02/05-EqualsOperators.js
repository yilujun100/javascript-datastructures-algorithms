// @ts-check
/** eslint-disable */
// 数据类型转换规则：
// 1. 对象 == 字符串 对象.toString()变为字符串
// 2. null == undefined相等，但和其他值比较就不再相等
// 3. NaN == NaN 不相等
// 4. 剩下的都是转换为数字

console.log('packt' ? true : false); // true

console.log('packt' == true);
// 1 - 布尔值会被toNumber方法转成数字
// 'packt' == 1
// 2 - 用toNumber转换字符串值
// NaN == 1
// 最终输出false

console.log('packt' == false);
// 1 - 布尔值会被toNumber方法转成数字
// 'packt' == 0
// 2 - 用toNumber转换字符串值
// NaN == 0
// 最终输出false

console.log([0] == true);
// 1 - 布尔值会被toNumber方法转成数字
// [0] == 1
// 2 - 使用toPrimitive转换对象
// 2.1 - [0].valueOf() is not primitive
// 2.2 - [0].toString is 0
// 0 == 1
// outputs false

//* ****************************** ===
console.log('packt' === true);

console.log('packt' === 'packt');

var person1 = { name: 'John' };
var person2 = { name: 'John' };
console.log(person1 === person2); // 不同的对象（引用地址不同）
