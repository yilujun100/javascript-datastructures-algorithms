// 用es6的限定作用域Symbol实现类
const _items = Symbol('stackItems');

class Stack {
    constructor() {
        this[_items] = [];
    }

    push(element) {
        this[_items].push(element);
    }

    pop() {
        return this[_items].pop();
    }

    peek() {
        return this[_items][this[_items].length - 1];
    }

    isEmpty() {
        return this[_items].length === 0;
    }

    size() {
        return this[_items].length;
    }

    clear() {
        this[_items] = [];
    }

    print() {
        console.log(this.toString());
    }

    toString() {
        return this[_items].toString();
    }
}

const stack = new Stack();
const objectSymbols = Object.getOwnPropertySymbols(stack);
console.log(objectSymbols.length);
console.log(objectSymbols);
console.log(objectSymbols[0]);
stack[objectSymbols[0]].push(1);
stack.print();
