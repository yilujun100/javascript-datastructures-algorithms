// @ts-check
/** eslint-disable */
// 数据类型        转换成布尔值
// undefined        false
// null             false
// 布尔值            true是true,false是false
// 数               +0、-0和NaN都是false,其他都是true
// 字符串            如果字符串是空的（长度是0）就是false,其他都是true（长度大于等于1）
// 对象              true

function testTruthy(val) {
    return val ? console.log('truthy') : console.log('falsy');
}

testTruthy(true);
testTruthy(false);
testTruthy(new Boolean(false)); // 对象始终为true

testTruthy('');
testTruthy('a');
testTruthy('Packt');
testTruthy(new String(''));

testTruthy(1);
testTruthy(-1);
testTruthy(NaN);
testTruthy(new Number(NaN));

testTruthy({});

var obj = { name: 'John' };
testTruthy(obj);
testTruthy(obj.name);
testTruthy(obj.age); // age (属性不存在)
