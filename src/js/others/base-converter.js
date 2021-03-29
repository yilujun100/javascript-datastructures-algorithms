// @ts-check

import Stack from '../data-structures/stack-array';

// 十进制转二进制
export function decimalToBinary(decNumber) {
    const remStack = new Stack(); // remStack用来存储余数
    let number = decNumber;
    let rem;
    let binaryString = ''; // 最终返回的二进制字符串

    // 当除法运算的结果不为0时，我们会得到一个余数，并压入栈中。然后让结果继续除以2
    while (number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }

    // 将栈中元素依次弹栈，并输出
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}
