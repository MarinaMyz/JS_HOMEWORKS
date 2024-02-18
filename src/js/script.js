'use strict';


const userAge = prompt("Введіть число:");
const number = parseInt(userAge);

if (isNaN(number)) {
    alert("Будь ласка, введіть число.");
} else {
    let result;

    if (number === 1) {
        result = "рік";
    } else if (number >= 2 && number <= 4) {
        result = "роки";
    } else {
        result = "років";
    }

    alert(`${number} ${result}`);
}