'use strict';

function fillTypesOfStreet(types) {
    const nDiv = document.getElementById('tDivTypesOfStreet');

    for (const type of types) {
        const nRadio = document.createElement('input');
        nDiv.appendChild(nRadio);
        nRadio.setAttribute('type', 'radio');
        nRadio.setAttribute('name', 'type-of-street');
        nRadio.setAttribute('value', type.shortName);
        nRadio.setAttribute('id', `tRad${type.shortName}`);

        const nLabel = document.createElement('label');
        nDiv.appendChild(nLabel);
        nLabel.setAttribute('for', `tRad${type.shortName}`);

        const nText = document.createTextNode(type.longName);
        nLabel.appendChild(nText);
    }


}

const orderByLongName = (type1, type2) => type1.longName.localeCompare(type2.longName);

fillTypesOfStreet(typesOfStreet.sort(orderByLongName));