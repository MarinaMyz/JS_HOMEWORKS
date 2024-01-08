'use strict';
let sum = 0;
for (let i = 0; i < 20; i++) {
    console.log(i);

    if (i % 2 === 0) continue;
    sum += i;
}
    alert('Сума непарних чисел: ' + sum);
