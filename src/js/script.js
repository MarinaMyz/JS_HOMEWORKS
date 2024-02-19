'use strict';

//1
function getFactorial(n) {
    return (n != 1) ? n * getFactorial(n - 1) : 1;
}
console.log( getFactorial(3) );

//2
function pow(num, degree) {
    if(degree == 1) {
        return num;
    } else {
        return num * pow(num, degree - 1);
    }
}
console.log(pow(5,2));

//3
function sum(a,b) {
    if(b === 0) {
        return a;
    }
    return sum(++a, --b);
}
console.log(sum(4,6));