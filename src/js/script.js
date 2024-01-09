'use strict';

let operation = prompt('What do you want to earn (add, sub, mult, div)?');
let num1 = Number(prompt('Please write first number'));
let num2 = Number(prompt('Please write second number'));
let result;

if(operation === 'add') {
    result = num1 + num2;
    alert(num1 + ' ' + '+' + ' ' + num2 + ' = ' + result);
} else if (operation === 'sub'){
    result = num1 - num2;
    alert(num1 + ' ' + '-' + ' ' + num2 + ' = ' + result);
} else if (operation === 'mult') {
    result = num1 * num2;
    alert(num1 + ' ' + '*' + ' ' + num2 + ' = ' + result);
} else if (operation === 'div') {
    result = num1 / num2;
    alert(num1 + ' ' + '/' + ' ' + num2 + ' = ' + result);
}

