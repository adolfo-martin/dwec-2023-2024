'use strict';

const brands = [
    { key: 'hon', name: 'Honda' },
    { key: 'suz', name: 'Suzuki' },
    { key: 'kaw', name: 'Kawasaki' },
    { key: 'der', name: 'Derbi' },
    { key: 'bul', name: 'Bultaco' },
    { key: 'hdv', name: 'Harley-Davidson' },
    { key: 'bmw', name: 'BMW' },
    { key: 'pia', name: 'Piaggio' },
    { key: 'ind', name: 'Indian' },
    { key: 'kym', name: 'Kymco' },
];


// const nSelect = document.getElementById('tSelBrands');

// for (const brand of brands) {
//     const nOption = document.createElement('option');
//     nSelect.appendChild(nOption);
//     nOption.setAttribute('value', brand.key);

//     const nText = document.createTextNode(brand.name);
//     nOption.appendChild(nText);
// }

llenarDesplegable();

function llenarDesplegable() {
    const nSelect = document.getElementById('tSelBrands');

    brands.forEach(brand => {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', brand.key);

        const nText = document.createTextNode(brand.name);
        nOption.appendChild(nText);
    });
}