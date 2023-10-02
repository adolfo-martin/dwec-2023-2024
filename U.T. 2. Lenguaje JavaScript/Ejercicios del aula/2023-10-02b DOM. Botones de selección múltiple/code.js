import { datosEmpresa as employees } from "./datos_empresa.js";

function retrieveCategories(employees) {
    const categoriesWithRepeated = employees.map(employee => employee.categoria);
    return Array.from(new Set(categoriesWithRepeated));
}


function fillCategoriesContainer(categories) {
    const nDiv = document.getElementById('tDivCategories');

    for (const category of categories) {
        const nCheckbox = document.createElement('input');
        nDiv.appendChild(nCheckbox);
        nCheckbox.setAttribute('type', 'checkbox');
        nCheckbox.setAttribute('id', `tChk${category}`);
        nCheckbox.setAttribute('name', category);

        const nLabel = document.createElement('label');
        nDiv.appendChild(nLabel);
        nLabel.setAttribute('for', `tChk${category}`);

        const nText = document.createTextNode(category);
        nLabel.appendChild(nText);

    }
}

fillCategoriesContainer(retrieveCategories(employees));
