"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
    getInfo() {
        return `${this.author}, ${this.title}, ${this.publishedYear}`;
    }
}
exports.Book = Book;
//# sourceMappingURL=Book.js.map