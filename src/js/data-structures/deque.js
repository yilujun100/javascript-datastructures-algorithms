/**
 * 双端队列（deque, 或称double-ended queue）是一种允许我们同时从队首和队尾添加和删除元素的特殊队列
 */

export default class Deque {
    constructor() {
        this.head = 0;
        this.tail = 0;
        this.items = {};
    }

    // 向双端队列头部添加元素
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.head > 0) {
            this.head--;
            this.items[this.head] = element;
        } else {
            for (let i = this.tail; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
        }
    }

    // 向双端队列尾部添加元素
    addBack(element) {
        this.items[this.tail] = element;
        this.tail++;
    }

    // 向双端队列头部移除元素
    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return result;
    }

    // 向双端队列尾部移除元素
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.tail--;
        const result = this.items[this.tail];
        delete this.items[this.tail];
        return result;
    }

    peekFront() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.head];
    }

    peekBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.tail - 1];
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

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
