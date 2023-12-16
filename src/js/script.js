'use strict';

const firstOperand = Number(prompt('Please enter first number'));
const secondOperand = Number(prompt('Please enter second number'));

const plusResult = firstOperand + secondOperand;
console.log(`Result: ${firstOperand} + ${secondOperand} = ${plusResult}`); // result: 2 + 3 = 5
//console.log('Result: ' + firstOperand + ' + ' + secondOperand + ' = ' + plusResult); // result: 2 + 3 = 5

const minusResult = firstOperand - secondOperand;
console.log(`Result: ${firstOperand} - ${secondOperand} = ${minusResult}`);

const multiolicationResult = firstOperand * secondOperand;
console.log(`Result: ${firstOperand} * ${secondOperand} = ${multiolicationResult}`);

const divisionResult = firstOperand / secondOperand;
console.log(`Result: ${firstOperand} / ${secondOperand} = ${divisionResult} `);
