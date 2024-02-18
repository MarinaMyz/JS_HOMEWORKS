'use strict';

//1
let halfOfTheNumber = '';

for(let i = 20; i <= 30; i=i+0.5){
  halfOfTheNumber += i + ' ';
}
console.log(halfOfTheNumber);


//2
const exchangeDollar = 27;

for(let dollars = 10; dollars <= 100; dollars += 10) {
 const uah = dollars * exchangeDollar;
console.log(`${dollars}$ = ${uah}₴`);
}

//3
const number = 64;
let result = '';

for(let i = 1; i <= 100; i++) {
  if(i * i < number) {
 result += i + ' ';
 } else {
    break;
   }
}
console.log(result);

//4

const numberToCheckPrime = 24;
let isPrime = true;

if (numberToCheckPrime < 2) {
    isPrime = false;
} else {
    for (let i = 2; i * i <= numberToCheckPrime; i++) {
        if (numberToCheckPrime % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(isPrime);

//5
const numberToCheckPowerOfThree = 81;
let isPowerOfThree = numberToCheckPowerOfThree > 0;

for (let currentNumber = numberToCheckPowerOfThree; isPowerOfThree && currentNumber > 1; ) {
    if (currentNumber % 3 === 0) {
        currentNumber /= 3;
    } else {
        isPowerOfThree = false;
    }
}
console.log(isPowerOfThree);



