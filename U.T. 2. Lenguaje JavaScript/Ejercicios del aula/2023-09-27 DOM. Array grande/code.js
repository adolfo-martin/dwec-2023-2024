'use strict';

const employees = datosEmpresa;

const extractCategory = employee => employee.categoria;
const categoriesWithRepeates = employees.map(extractCategory);
// console.log(categoriesWithRepeates);


const categoriesWithoutRepeates = calculateUniqueCategories(categoriesWithRepeates)
console.log(categoriesWithoutRepeates);


// function calculateUniqueCategories(repeates) {
//     const uniques = [];

//     ext: for (const category of repeates) {
//         int: for (const category2 of uniques) {
//             if (category === category2) {
//                 continue ext;
//             }
//         }
//         uniques.push(category);
//     }

//     return uniques;
// }


// function calculateUniqueCategories(repeates) {
//     const uniques = [];

//     for (const category of repeates) {
//         if (uniques.includes(category)) {
//             continue;
//         }
//         uniques.push(category);
//     }

//     return uniques;
// }


function calculateUniqueCategories(repeates) {
    const uniques = new Set(repeates);
    return Array.from(uniques);
}


function fillCategoriesDropdown(categories) {

}




function fillEmployeesList(employees) {
    const nOl = document.getElementById('tOlEmployees');

    for (const { nombre: firstname, apellido: lastname } of employees) {
        const nLi = document.createElement('li');
        nOl.appendChild(nLi);

        const nText = document.createTextNode(`${firstname} ${lastname}`);
        nLi.appendChild(nText);
    }
}


fillEmployeesList(datosEmpresa);



