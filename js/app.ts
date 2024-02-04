const firstname: string = 'Yuliia';
const age: number = 3;
const isDone: boolean = false;
console.log(`My name is ${firstname} and I am ${age} year old. And I've ${isDone} verification`);

const list: Array<number> = [25, 26, 27];
const list2: number[] = [1, 2, 4];

const show = function (): void {
  console.log(list, list2);
};
show();

// const error = function (): never {
//     throw new TypeError('This is an error')
// }
// error()
function greet(name?: string | null | undefined): void {
  name ? console.log(`Hello, ${name}!`) : console.log('Hello, stranger!');
}
greet('Alex');
greet(null);
greet(undefined);

let value: any = null;
console.log(value);
value = { key1: 'one' };
console.log(value);
value = 2;
console.log(value);
let outcome: unknown;
outcome = 'Result';
outcome = 45;
if (typeof outcome === 'string') {
  console.log(outcome.toUpperCase());
}

function printUser(user: { name: string; age: number }): void {
  console.log(`User name: ${user.name}`);
  console.log(`User age: ${user.age}`);
}
printUser({ name: 'Yuliia', age: 70 });

interface Person {
  name: string;
  age: number;
  hobbies: Array<string>;
}

const person: Person = {
  name: 'Anna',
  age: 45,
  hobbies: ['programming', 'sport'],
};

console.log(`Hi, ${person.name}. You are ${person.age}. Your hobbies: ${person.hobbies}`);

const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};
console.log(`Results of sun fn: ${sum(10, 20)}`);

enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
const date = new Date();
const currentDay = DayOfWeek[date.getDay()];
console.log(`Today is ${currentDay}`);
