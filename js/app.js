"use strict";
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
const book1 = new Book('JSScript', 'David Flanagan', 2018);
console.log(book1.getInfo());
function returnLastElement(arg) {
    return arg[arg.length - 1];
}
console.log(returnLastElement([1, 2, 3, 4]));
console.log(returnLastElement(['Yul', 'Alla', 'Olha']));
console.log(returnLastElement([
    { name: 'Inna', year: 2019 },
    { name: 'Ivan', year: 2000 },
]));
function calculation(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return value * value;
    }
}
console.log(calculation(4));
console.log(calculation('Hello Dear'));
//# sourceMappingURL=app.js.map