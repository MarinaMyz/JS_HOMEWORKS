'use strict';
const ul = document.getElementById('ulId');
const ulAttributes = [];
const ulAttributeName = [];

for(let attr of ul.attributes) {
    ulAttributes.push(attr.value);
    ulAttributeName.push(attr.name);
}
console.log(ulAttributes);
console.log(ulAttributeName);

const lastName = ul.lastElementChild;
lastName.textContent = 'Привет меня зовут Марина';

ul.firstElementChild.setAttribute('data-my-name', 'Марина');

ul.removeAttribute('data-dog-tail');