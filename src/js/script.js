'use strict';

let ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this; // return the object itself to allow chaining
    },
    down: function() {
        this.step--;
        return this; // return the object itself to allow chaining
    },
    showStep: function() {
        alert(this.step);
        return this; // return the object itself to allow chaining
    }
};
console.log(ladder.up().up().down().showStep());