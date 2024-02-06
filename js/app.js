"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./modules/Book");
const func_1 = require("./modules/func");
const User_1 = require("./modules/User");
const book1 = new Book_1.Book('JSScript', 'David Flanagan', 2018);
console.log(book1.getInfo());
console.log((0, func_1.calculation)(9));
console.log((0, func_1.calculation)('Hello Dear'));
const user = new User_1.User('Sheva', 'Anna', '456789');
console.log(user.getUserInfo());
function returnLastElement(arg) {
    return arg[arg.length - 1];
}
console.log(returnLastElement([1, 2, 3, 4]));
console.log(returnLastElement(['Yul', 'Alla', 'Olha']));
console.log(returnLastElement([
    { name: 'Inna', year: 2019 },
    { name: 'Ivan', year: 2000 },
]));
//# sourceMappingURL=app.js.map