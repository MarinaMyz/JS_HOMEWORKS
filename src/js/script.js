'use strict';

const user = {
    name: 'Marina',
    age: 25,
    language: 'ukrainian'
}
const printName = function (prefix) {
    console.log(this, prefix)
    console.log(prefix + ' ' + this.name)
}
function myApply(func, ctx, args){
    ctx.printName = func;
    ctx.printName(args, ...args);
    delete ctx.printName;
}

function myBind(func, ctx, args) {
    return function () {
        myApply(func, ctx, args)
    }
}
const student = {
    name: 'Mike',
    age: 40
}

const bindFunc = myBind(printName, user, ['Dear']);
bindFunc('asd');
console.log(bindFunc);

