'use strict';

const watches = [
    'Casio',
    'Rolex',
    'Seiko',
    'Timex',
    'Longines',
    'Tudor',
];

// const watch1 = watches[0];
// const watch2 = watches[1];
// const watch3 = watches[2];

const [watch1, watch2, watch3] = watches;

console.log(watch1);
console.log(watch2);
console.log(watch3);


const person = {
    firstname: 'Adolfo',
    lastname: 'Martin',
    age: 30,
    eyes: 'green',
    height: 195,
    weight: 84,
}

// const height = person.height;
// const weight = person.weight;

const { height: altura, weight: masa } = person;

console.clear();
console.log(altura, masa);