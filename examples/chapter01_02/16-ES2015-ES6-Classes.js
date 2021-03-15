// @ts-check
/* eslint-disable */

//* ****** EcmaScript 2015 (ES6): classes
class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn() {
        console.log(this.isbn);
    }
}

let book = new Book('title', 'pag', 'isbn');

console.log(book.title);

book.title = 'new title';

console.log(book.title);

// inheritance
class ITBook extends Book {
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn);
        this.technology = technology;
    }

    printTechnology() {
        console.log(this.technology);
    }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'JavaScript');

console.log(jsBook.title);
console.log(jsBook.printTechnology());

// getter and setters(使用属性存取器)
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let lotrChar = new Person('Frodo');
console.log(lotrChar.name);
lotrChar.name = 'Gandalf';
console.log(lotrChar.name);
lotrChar._name = 'Sam'; // _name并非真正的私有属性，我们仍然可以引用它
console.log(lotrChar.name);
