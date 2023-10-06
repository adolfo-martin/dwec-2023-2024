import { vehicles } from "./data.js";

document.addEventListener('DOMContentLoaded', setup);

function setup(_) {
    fillCheckboxesCars(vehicles);

}

function fillCheckboxesCars(cars) {
    const nDiv = document.getElementById('tDivCars');

    cars.forEach(car => {
        const nCheckbox = document.createElement('input');
        nDiv.appendChild(nCheckbox);
        nCheckbox.setAttribute('type', 'checkbox');
        nCheckbox.setAttribute('name', car.key);
        nCheckbox.setAttribute('id', `tChk${car.key}`);
        nCheckbox.setAttribute('value', car.key);

        // nCheckbox.onchange = addCarToTable;
        nCheckbox.addEventListener('change', addCarToTable);

        const nLabel = document.createElement('label');
        nDiv.appendChild(nLabel);
        nLabel.setAttribute('for', `tChk${car.key}`);

        const nText = document.createTextNode(car.model);
        nLabel.appendChild(nText);
    });
}

function addCarToTable(e) {
    const nCheckbox = e.target; // target me da la etiqueta que lanzo el evento
    const carId = nCheckbox.value; // en esa etiqueta, en value guarde el código del coche

    const car = vehicles.find(car => car.key === carId);

    const tBody = document.getElementById('tTbdCars');

    const nTr = document.createElement('tr');
    tBody.appendChild(nTr);

    const nTdModel = document.createElement('td');
    nTr.appendChild(nTdModel);

    const nTextModel = document.createTextNode(car.model);
    nTdModel.appendChild(nTextModel);

    const nTdPhoto = document.createElement('td');
    nTr.appendChild(nTdPhoto);

    const nImg = document.createElement('img');
    nTdPhoto.appendChild(nImg);
    nImg.setAttribute('src', `./assets/photos/${car.photo}`);

}
