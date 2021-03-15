// @ts-check
/** eslint-disable */

/** Object example 1 */
var obj = new Object();

/** Object example 2 */
var obj = {};

obj = {
    name: {
        first: 'Gandalf',
        last: 'the Grey'
    },
    address: 'Middle Earth'
};

/** Object example 3 */

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function () {
        console.log(this.isbn);
    };
}

var book = new Book('title', 'pag', 'isbn');

console.log(book.title);

book.title = 'new title';

console.log(book.title);

// printTitle函数只会创建一次，在所有实例中共享。
// 如果在类的定义里声明，则每个实例都会创建自己的函数副本。使用 prototype 方法可以节约内存和降低实例化的开销。
// 不过prototype方法只能声明public函数和属性，而类定义可以声明只在类的内部访问的private函数和属性。
Book.prototype.printTitle = function () {
    console.log(this.title);
};

book.printTitle();

book.printIsbn();
