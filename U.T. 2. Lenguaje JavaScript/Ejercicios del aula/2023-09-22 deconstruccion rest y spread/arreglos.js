'use strict';

const watches = [
    'Casio',
    'Rolex',
    'Seiko',
    'Timex',
    'Longines',
    'Tudor',
];

console.log(watches);

//------------ spread -------------
console.log(...watches);

const moreWatches = [
    'Orient',
    'IWC',
    'Swatch',
    'Omega',
];

const allWatches = [...watches, ...moreWatches];
console.table(allWatches);

console.table(['Omega', ...watches, 'IWC', 'Orient']);



// ---------------- rest ---------------

const [watch1, watch2, ...finalWatches] = watches;
console.log(watch1);
console.log(watch2);
console.log(finalWatches);



