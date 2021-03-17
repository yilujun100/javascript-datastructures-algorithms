// @ts-check
/* eslint-disable */

let daysOfWeek = new Array();

daysOfWeek = new Array(7);

daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); // {3}

// preferred
daysOfWeek = [];

daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // {3}

console.log('daysOfWeek.length', daysOfWeek.length);

for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(`daysOfWeek[${i}]`, daysOfWeek[i]);
}

// fibonacci numbers
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

for (let i = 1; i < fibonacci.length; i++) {
    console.log(`fibonacci[${i}]`, fibonacci[i]);
}

console.log('fibonacci', fibonacci);
