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
let value = null;
console.log(value);
value = { key1: 'one' };
console.log(value);
value = 2;
console.log(value);
let outcome;
outcome = 'Result';
outcome = 45;
if (typeof outcome === 'string') {
    console.log(outcome.toUpperCase());
}
function printUser(user) {
    console.log(`User name: ${user.name}`);
    console.log(`User age: ${user.age}`);
}
printUser({ name: 'Yuliia', age: 70 });
const person = {
    name: 'Anna',
    age: 45,
    hobbies: ['programming', 'sport'],
};
console.log(`Hi, ${person.name}. You are ${person.age}. Your hobbies: ${person.hobbies}`);
const sum = (num1, num2) => {
    return num1 + num2;
};
console.log(`Results of sun fn: ${sum(10, 20)}`);
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
})(DayOfWeek || (DayOfWeek = {}));
const date = new Date();
const currentDay = DayOfWeek[date.getDay()];
console.log(`Today is ${currentDay}`);
