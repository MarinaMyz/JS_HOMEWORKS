'use strict';
const a = +prompt('Вкажіть перше число');
const b = +prompt('Вкажіть друге число');
const num = +prompt('Напишіть пори року');


const task1 = (a === 0) ? 'Вірно' : 'Невірно';
alert(task1);
const task2 = (a > 0) ? 'Вірно' : 'Невірно';
alert(task2);
const task3 = (a < 0) ? 'Вірно' : 'Невірно';
alert(task3);
const task4 = (a >= 0) ? 'Вірно' : 'Невірно';
alert(task4);
const task5 = (a <= 0) ? 'Вірно' : 'Невірно';
alert(task5);
const task6 = (a !== 0) ? 'Вірно' : 'Невірно';
alert(task6);
const task7 = (a === 'test') ? 'Вірно' : 'Невірно';
alert(task7);
const task8 = (a === '1') ? 'Вірно' : 'Невірно';
alert(task8);
const task9 = (a > 0 && a < 5) ? 'Вірно' : 'Невірно';
alert(task9);
const task10 = (a === 0 || a === 2) ? a + 7 : a / 10;
alert(task10);
const task11 = (a <= 1 || b >= 3) ? a + b : a - b;
alert(task11);
const task12 = (a > 2 && a < 11 || b >= 6 && b <= 14) ? 'Вірно' : 'Невірно';
alert(task12);


let result = '';
switch (num){
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'літо';
        break;
    case 4:
        result = 'осінь';
        break;
    default:
        result = 'невідоме число';
}
alert(result);
