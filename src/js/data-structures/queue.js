// @ts-check

export default class Queue {
    constructor() {
        this.head = 0; // 队列的头指针
        this.tail = 0; // 队列的尾指针，通常情况下指向队列最后一个元素的下一位
        this.items = {};
    }

    // 入队
    enqueue(element) {
        this.items[this.tail] = element;
        this.tail++;
    }

    // 出队
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return result;
    }

    // 查看队首元素
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.head];
    }

    // 判空
    isEmpty() {
        return this.size() === 0;
    }

    // 清空
    clear() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

    // 队列元素个数
    size() {
        return this.tail - this.head;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.head]}`;
        for (let i = this.head + 1; i < this.tail; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
