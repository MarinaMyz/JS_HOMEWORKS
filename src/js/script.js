'use strict';
function padString(string, number, symbol = '*', right = true ) {
    if (!string || !number) {
        return 'Error';
    }
    if(typeof symbol !== 'string' && symbol.length !== 1){
        return 'Error';
    }
    if (string.length === number) {
        return string;
    }
    if (string.length > number) {
        return string.substring(0, number);
    }
    if (right) {
        return string.padEnd(number, symbol);
    }
    return string.padStart(number, symbol);
}

console.log(padString('bye', 8, '@'));