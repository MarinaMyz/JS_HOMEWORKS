'use strict';

//1
const stringsArray = ["apple", "banana", "orange", "kiwi", "grapefruit", "pear", "plum"];
const symbolArray = stringsArray.filter(str => str.length > 5);
console.log(symbolArray);

//2
const numbersSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbersSum.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;

}, 0);
console.log(sum);

//3
const averageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const average = averageNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue / averageNumbers.length;
}, 0);
console.log(average);
