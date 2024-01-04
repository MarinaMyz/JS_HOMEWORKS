'use strict';
const num1 = Number( prompt ('Please write first number'));
const num2 = Number( prompt ('Please write second number'));
const plusResult = num1 + num2;
const minusResult = num1 - num2;
const multiplicationResult = num1 * num2;
const divisionResult = num1 / num2;
alert('Result: ' + num1 + ' + ' + num2 + ' = ' + plusResult + '\n' +
    num1 + ' - ' + num2 + ' = ' + minusResult + '\n' +
    num1 + ' / ' + num2 + ' = ' + divisionResult + '\n' +
    num1 + ' * ' + num2 + ' = ' + multiplicationResult);