'use strict';

function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? arr[0] : initialValue;

    for (let i = initialValue === undefined ? 1 : 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
}

const arr = [2, 4, 6, 8, 10];
const sum = myReduce(arr, (acc, curr) => acc + curr, 0);

console.log(sum);