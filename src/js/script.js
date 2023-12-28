'use strict';
//1.
const student = {
    name: 'Mike',
    age: 25,
    grade: 4,
}
console.log(student);

student.grade = 5;
console.log(student);

student.course = 'english'
console.log(student);

//2.
const book = {
    title: 'Harry Potter',
    author: 'Joanna Rowling',
    year: 2001,
}
console.log(book);

book.publisher = {
    name: 'Bloomsbury',
    location: 'Great Britain',
}
console.log(book);

//3.
const movie = {
    title: 'Alone at home',
    director: 'Cris Columbus',
    year: 1990,
    genre: 'comedy',
}
console.log(movie);

for (const key in movie){
    console.log(key);
    console.log(movie[key]);
}

//4.
const person1 ={
    name: 'Marina',
    age: 25,
    nationality: 'Ukraine',
}

const person2 = {
    name: 'Marina',
    age: 25,
    nationality: 'Ukraine',
}
console.log(person1 === person2);
console.log(JSON.stringify(person1) === JSON.stringify(person2));


//5.
const arrAnimals = [
    {type: 'bear', name: 'Misha',},
    {type: 'cat', name: 'Bagira',}
]
console.log(arrAnimals);

const lion = {
    type: 'lion',
    name: 'Pasha',
}
arrAnimals.push(lion);
console.log(arrAnimals);





