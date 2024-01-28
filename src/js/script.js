'use strict';
const year = Number(prompt('Який твій рік народження?'));
const city = prompt('В якому місті ти живешь?');
const sport = prompt('Який твій улюбленний вид спорту?');

const currentYear = new Date().getFullYear();
let result = '';


if(year){
    result += `Твій вік ${currentYear - year}. `;
} else {
    alert(`Шкода, що Ви не захотіли ввести свій вік`);
}


if (city) {
    if (city === 'Київ' || city === 'Вашингтон' || city === 'Лондон') {
        result += `Ти живеш у столиці ${city}. `;
    } else {
        result += `Ти живеш у місті ${city}. `;
    }
} else {
    alert(`Шкода, що Ви не захотіли ввести свое місто`);
}

if (sport === 'футбол') {
    result += 'Круто! Хочеш стати Криштиану Роналду?';
} else if (sport === 'баскетбол') {
    result += 'Круто! Хочеш стати Майклом Джорданом';
} else if (sport === 'бокс') {
    result += 'Круто! Хочеш стати Василием Ломанченко';
} else {
    alert ('Шкода, що Ви не захотіли ввести свій улюблений спорт');
}

alert(result);