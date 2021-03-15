// @ts-check
/** eslint-disable */

console.log('**** for example ****');
/** for - example */
for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log('**** while example ****');
/** while - example */
var j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

console.log('**** do-while example ****');
/** do-while - example */
// do...while循环和while循环很相似。区别是：在while循环里，先进行条件判断再执行循环体中的代码，而在do...while循环里，
// 是先执行循环体中的代码再判断循环条件。do...while循环至少会让循环体中的代码执行一次。
var k = 0;
do {
    console.log(k);
    k++;
} while (k < 10);
