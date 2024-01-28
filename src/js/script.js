'use strict';

function calculatePrice () {
    const potatoPerLiter = 75 * 4;
    const overallPotatoes= potatoPerLiter * 48 / 1000;
    return overallPotatoes * 13;
}
alert(Math.ceil(calculatePrice()));