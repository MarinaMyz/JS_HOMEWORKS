'use strict';
//task1
let result = ''
for (let i = 10; i <= 20; i++) {
    result += i + ', ';
}
console.log(result);

//task2
let result1 = '';
for (let i = 10; i <= 20; i++) {
    result += i * i + ' ';
}
console.log(result1);

//task3
let result2 = '';
for (let i = 1; i <= 10; i++) {
    result += 7 * i + ' ';
}
console.log(result2);

//task4
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum);

//task5
let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
console.log(product);

//task6
let sum = 0;
for (let i = 1; i <= 500; i++) {
    sum += i;
}
const average = sum / 500;
console.log(average);

//task7
let sum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum);

//task8
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
    }
    console.log(i);
}

//task9
const number = 24;
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
    }
}
console.log(i);

//task10
let sum = 0;
for (let i = 1; i <= 24; i++) {
    if (24 % i === 0 && i % 2 === 0) {
        sum++;
    }
}
console.log(sum);

//task11
let sum = 0;
for (let i = 1; i <= 24; i++) {
    if (24 % i === 0 && i % 2 === 0) {
        sum += i;
    }
}
console.log(sum);

//task12
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + i * j);
    }
    console.log("-----");
}






