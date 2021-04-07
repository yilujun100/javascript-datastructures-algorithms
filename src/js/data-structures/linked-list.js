import { defaultEquals } from '../util';
import { Node } from './models/linked-list-models';

export default class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.equalsFn = equalsFn;
        this.count = 0; // count用来存储链表中的元素数量
        this.head = undefined; // 虚拟头节点
    }

    // 向链表尾部添加一个新元素
    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            // 向空链表添加一个元素
            this.head = node;
        } else {
            current = this.head;
            while (current.next != null) {
                // 获取最后一项
                current = current.next;
            }
            current.next = node; // 让当前元素的next指针指向要添加到链表的节点
        }
        this.count++;
    }

    // 返回链表中特定位置的元素
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    // 向链表的特定位置插入一个新元素
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    // 从链表的特定位置移除一个元素
    removeAt(index) {
        // 检查越界值
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                // 移除第一项
                this.head = current.next;
            } else {
                // 移除其他项只需将previous.next指向current.next
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined; // 如果不是有效的位置，直接return undefined
    }

    // 从链表中移除一个元素
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    // 返回元素在链表中的索引
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.size() && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    // 判空
    isEmpty() {
        return this.size() === 0;
    }

    // 返回链表包含的元素个数
    size() {
        return this.count;
    }

    // 获取链表的头节点
    getHead() {
        return this.head;
    }

    // 清空
    clear() {
        this.head = undefined;
        this.count = 0;
    }

    // 输出
    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.size() && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
}
