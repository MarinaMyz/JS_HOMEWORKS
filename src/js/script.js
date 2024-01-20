'use strict';
const arr = [1, 2, 3, -1, -2, -3];
function positiveNumbers(arr) {
    if(arr.length === 0){
        return 'empty array';
    }
    const result = [];
    for(let i= 0; i< arr.length; i++){
      if(arr[i] > 0) {
          result.push(arr[i]);
      }
    }
    if(result.length !== 0){
        return result;
    }else {
        return null;
    }
}
console.log(positiveNumbers(arr));