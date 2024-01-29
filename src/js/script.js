'use strict';
const users = function () {
    const sayHi = function () {
        console.log('hello')
    }
    return function (name, age) {
        const lastName = 'Doe';

        return {
            name,
            age,
            lastName,
            sayHi

        }
    }
}
const createUser = users();

const user = createUser( 'Mike',  26);
const user2 = createUser(  'Anna',  28);
const user3 = createUser( 'John',  24);

console.log(user,user2);
console.log(user.sayHi === user2.sayHi);

user.sayHi()
user2.sayHi()
