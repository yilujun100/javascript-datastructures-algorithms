/**
 * 循环链表和链表之间的唯一区别在于，最后一个元素指向下一个元素的指针不是引用undefined,而是指向第一个元素（head）
 */

import { defaultEquals } from '../util';
import LinkedList from './linked-list';
import { Node } from './models/linked-list-models';

export default class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }

    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            // 向空链表尾部追加节点
            this.head = node;
        } else {
            // 向非空链表尾部追加节点
            current = this.getElementAt(this.size() - 1);
            current.next = node;
        }
        node.next = this.head;
        this.count++;
    }

    insert(element, index) {
        if (index >= 0 && index < this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    current = this.getElementAt(this.size() - 1);
                    this.head = node;
                    current.next = this.head;
                }
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

    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
                if (this.size() === 1) {
                    // 从只有一个元素的循环链表中移除一个元素
                    this.head = undefined;
                } else {
                    // 从一个非空循环链表中移除第一个元素
                    const removed = this.head; // 保存当前head元素的引用
                    current = this.getElementAt(this.size() - 1);
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed; // current指向被移除的元素
                }
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}
