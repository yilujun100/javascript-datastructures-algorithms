// @ts-check
/** eslint-disable */

//* ****** EcmaScript 2015 (ES6): let and const keywords

//* ****** EcmaScript 2015 (ES6): let is the new var
var framework = 'Angular';
var framework = 'React'; // 同名变量，可能会导致错误的输出
console.log(framework);

let language = 'JavaScript!';
// let language = 'Ruby'; // 抛出错误，因为在同一作用域中已经声明过language变量
console.log(language);

//* ****** EcmaScript 2015 (ES6): const
// const的行为和let关键字一样，唯一的区别在于，用const定义的变量是只读的，也就是常量
const PI = 3.141593;
// PI = 3.0; // throws error
console.log(PI);

const jsFramework = {
    name: 'Angular'
};
jsFramework.name = 'React';
// 对于非对象类型的变量，比如数、布尔值甚至字符串，我们不可以改变变量的值。
// 当遇到对象时，只读的 const 允许我们修改或重新赋值对象的属性，但变量本身的引用（内存中的引用地址）不可以修改，也就是不能对这个变量重新赋值

// error, cannot reassign object reference
/*
jsFramework = {
    name: 'Vue'
};
*/
