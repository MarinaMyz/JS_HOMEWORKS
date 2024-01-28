'use strict';
//1
let x = 10, y = 7;

const result = (x > y) ? 'x більше за y»' : 'x не більше, ніж y';
console.log(result);

//3
const integer = prompt('Прошу напишіть ціле число');

console.log(integer.startsWith('-') ? `Число складається з ${integer.length - 1} цифр` : `Число складається з ${integer.length} цифер`)
if(+integer > 0){
    alert('Число' + integer + 'однозначне позитивне');
} else {
    alert('Число' + integer + 'однозначне негативне');
}

//4
const firstNumber = Number (prompt('Please write first number'));
const secondNumber = Number (prompt('Please write second number'));
const thirdNumber = Number (prompt('Please write third number'));

if(firstNumber > secondNumber && firstNumber > thirdNumber) {
    alert(firstNumber);
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    alert(secondNumber);
} else {
   alert(thirdNumber);
}


//5
const firstSide = Number (prompt('Please write first side'));
const secondSide = Number(prompt('Please write second side'));
const thirdSide = Number(prompt('Please write third side'));

if (firstSide + secondSide > thirdSide && secondSide + thirdSide > firstSide && firstSide + thirdSide > secondSide) {
    alert('triangle can exist');
} else {
    alert('triangle can`t exist');
}



