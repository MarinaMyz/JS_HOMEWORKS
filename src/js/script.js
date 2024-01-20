'use strict';
const firstNumber = Number(prompt('Please write number'));
const degree = Number(prompt('to what power to raise the number'));
console.log(firstNumber, degree);
function numberToDegree(number, degree = 1){
    if( !number){
        return 'Number missing';
    }
    if (isNaN(number) || isNaN(degree)){
        return 'Error';
    }
    return number ** degree;
}
const result = numberToDegree(firstNumber, degree);
alert(result);


