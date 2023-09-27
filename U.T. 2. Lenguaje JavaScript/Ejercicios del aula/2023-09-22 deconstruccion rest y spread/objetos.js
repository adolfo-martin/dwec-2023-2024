'use strict';

const person = {
    firstname: 'Adolfo',
    lastname: 'Martin',
    age: 30,
    eyes: 'green',
    height: 195,
    weight: 84,
}

// -------spread-----------
const newPerson = {
    id: 1,
    dni: 34000000,
    ...person,
    address: 'Avenida',
    nationality: 'Spanish'
}

console.log(newPerson);

// -------------rest------------

const { age, eyes, ...otras } = person;
console.log(age, eyes, otras);