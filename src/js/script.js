'use strict';

const uniqueNumbers = [];

function randomNumber() {
    if (uniqueNumbers.length >= 100) {
        return null;
    }

    let generatedNumber;
    do {
        generatedNumber = Math.floor(Math.random() * 100) + 1;
    } while (uniqueNumbers.includes(generatedNumber));

    uniqueNumbers.push(generatedNumber);
    return generatedNumber;
}

for (let i = 1; i <= 100; i++) {
    console.log(randomNumber());
}

