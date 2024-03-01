'use strict';
//1
const products = {
    product1: {name: 'Milk', price: 45},
    product2: {name: 'Banana', price: 50},
    product3: {name: 'Meat', price: 90}
};

const decreasePrices = (products) => {
    const updatedProducts = {};
    for (const [key, value] of Object.entries(products)) {
        updatedProducts[key] = {name: value.name, price: value.price * 0.9};
    }
    return updatedProducts;
};
console.log(decreasePrices(products));

//2
const students = [
    {name: 'Alice', grade: 85},
    {name: 'Bob', grade: 95},
    {name: 'Charlie', grade: 92},
    {name: 'David', grade: 87},
    {name: 'Eve', grade: 98}
];

const filterStudents = (students) => {
    return students.filter(student => student.grade > 90);
};

console.log(filterStudents(students));