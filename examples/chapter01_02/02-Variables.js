var num = 1; // 声明一个数值类型变量
num = 3; // 更新已有变量。JavaScript不是强类型语言。这意味着你可以声明一个变量并初始化成一个数值类型的值，然后把它更新成字符串或者其他类型的值

var price = 1.5; // 声明一个十进制浮点数
var myName = 'Yilujun100'; // 声明一个字符串
var trueValue = true; // 声明一个布尔值
var nullVar = null; // 声明一个null
var und; // 声明undefined变量。null表示变量没有值，undefined表示变量已被声明，但尚未赋值。

console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue);
console.log('price: ' + price);
console.log('nullVar: ' + nullVar);
console.log('und: ' + und);
// console.log接收参数的两种方式：
// 1. + : 会将结果合并为一个字符串
// 2. , : 允许我们为其添加一个描述，并在变量为对象时将其内容以可视化的方式输出。
// 输出JavaScript值得三种方式：alert、console.log、document.write

// ******* Variable Scope
// 作用域：在编写的算法函数中，我们能访问变量（在使用函数作用域时，也可以是一个函数）的地方。有局部变量和全局变量两种。

var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable); // 输出global，因为它是一个全局变量
console.log(myFunction()); // 输出local，因为myVariable是在myFunction函数中声明的局部变量，所以作用域仅在myFunction内

console.log(myOtherVariable); // 输出global，因为我们引用了初始化的全局变量myOtherVariable
console.log(myOtherFunction()); // 输出local。在myOtherFunction函数里，因为没有使用var关键字修饰，所以这里引用的是全局变量myOtherVariable并将它赋值为local
console.log(myOtherVariable); // 输出local。因为在myOtherFunction里修改了myOtherVariable的值
// ! 在JavaScript里应该尽可能少用全局变量
