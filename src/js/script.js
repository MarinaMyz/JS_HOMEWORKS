'use strict';

//1
 const sum = (num1, num2) => num1 + num2;
 const result = sum(40, 24);
 console.log(result);

//2
const longString = (str) => str.length;
const str = 'Hello Java Script';
console.log(longString(str));

//3
const arrayOfNumbers = (arr) => arr.map(num => num + 1);
const numbers = [2,7,4,5];
const incrementedNumbers = arrayOfNumbers(numbers);
console.log(incrementedNumbers);




