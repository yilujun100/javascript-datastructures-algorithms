// @ts-check

// 基于数组的栈
export default class StackArray {
    constructor() {
        this.items = []; // 使用数组来保存栈里的元素
    }

    push(element) { // 向栈添加元素
        this.items.push(element);
    }

    pop() { // 从栈移除元素
        return this.items.pop();
    }

    peek() { // 查看栈顶元素
        return this.items[this.items.length - 1];
    }

    isEmpty() { // 检查栈是否为空
        return this.items.length === 0;
    }

    size() { // 返回栈里的所有元素
        return this.items.length;
    }

    clear() { // 清空栈元素
        this.items = [];
    }

    toArray() {
        return this.items;
    }

    toString() { // 打印栈内容
        return this.items.toString();
    }
}
