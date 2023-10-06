import { vehicles } from './data.js';

document.addEventListener('DOMContentLoaded', setup);

function setup(_) {
    const nSelect = document.getElementById('tSelVehicles');
    nSelect.addEventListener('change', showVehicle);

    fillSelectVehicles(vehicles);
}

function fillSelectVehicles(vehicles) {
    const nSelect = document.getElementById('tSelVehicles');

    for (const vehicle of vehicles) {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', vehicle.key);
        nOption.setAttribute('data-photo', vehicle.photo);

        const nText = document.createTextNode(vehicle.model);
        nOption.appendChild(nText);
    }
}

function showVehicle(e) {
    // const nSelect = document.getElementById('tSelVehicles');
    const nSelect = e.target;
    const key = nSelect.value;
    const vehicle = vehicles.find(vehicle => vehicle.key === key);

    const path = `./photos/${vehicle.photo}`;
    const nImage = document.getElementById('tImgVehicle');
    nImage.setAttribute('src', path);
}