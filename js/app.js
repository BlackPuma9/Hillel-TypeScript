"use strict";
const firstname = 'Yuliia';
const age = 3;
const isDone = false;
console.log(`My name is ${firstname} and I am ${age} year old. And I've ${isDone} verification`);
const list = [25, 26, 27];
const list2 = [1, 2, 4];
const show = function () {
    console.log(list, list2);
};
show();
// const error = function (): never {
//     throw new TypeError('This is an error')
// }
// error()
function greet(name) {
    name ? console.log(`Hello, ${name}!`) : console.log('Hello, stranger!');
}
greet('Alex');
greet(null);
greet(undefined);
function printUser(user) {
    console.log(`User name: ${user.name}`);
    console.log(`User age: ${user.age}`);
}
printUser({ name: 'Yuliia', age: 70 });
let value = null;
console.log(value);
value = { key1: 'one' };
console.log(value);
value = 2;
console.log(value);
let outcome;
outcome = 'Result';
if (typeof outcome === 'string') {
    console.log(outcome.toUpperCase());
}
