'use strict';

const user = {
    name: 'Marina',
    age: 25,
    language: 'ukrainian',
}

const printName = function (prefix) {
    console.log(this, prefix);
    console.log(prefix + ' ' + this.name);

}
function myApply(func, ctx, args) {
  ctx.printName = func;
  ctx.printName(args, ...args);
  delete ctx.printName;
}

myApply(printName, user, ['Dear']);