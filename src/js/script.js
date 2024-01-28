'use strict';

const lowestDivisor = Number(prompt('Please write number'));

if (isNaN(lowestDivisor)) {
    alert("Ви ввели не число!");
} else if (lowestDivisor < 2) {
    alert("Число повинно бути більшим або дорівнювати 2");
} else {
    for (let i = 2; i <= lowestDivisor; i++) {
        if (lowestDivisor % i === 0) {
            alert(`Мінімальний дільник числа ${lowestDivisor} є ${i}`);
            break;
        }
    }
}