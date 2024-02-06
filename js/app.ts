import { Book } from './modules/Book';
import { calculation } from './modules/func';
import { User } from './modules/User';

const book1 = new Book('JSScript', 'David Flanagan', 2018);
console.log(book1.getInfo());

console.log(calculation(9));
console.log(calculation('Hello Dear'));

const user = new User('Sheva', 'Anna', '456789');
console.log(user.getUserInfo());
function returnLastElement<Type>(arg: Array<Type>): Type | undefined {
  return arg[arg.length - 1];
}

console.log(returnLastElement([1, 2, 3, 4]));
console.log(returnLastElement(['Yul', 'Alla', 'Olha']));
console.log(
  returnLastElement([
    { name: 'Inna', year: 2019 },
    { name: 'Ivan', year: 2000 },
  ]),
);
