import CountriesService from './services/CountriesService.js';

document.addEventListener('DOMContentLoaded', setup);


async function setup() {
    const service = new CountriesService();
    const continents = await service.getContinents();
    renderContinents(continents);

    setupCloseButton();
}


function setupCloseButton() {
    document.querySelector('#tDivCerrar').addEventListener('click', _ => {
        document.querySelector('#tDivFlag').classList.add('hidden');
        document.body.style.overflowY = 'auto';
    });
}


function renderContinents(continents) {
    const nDiv = document.querySelector('#tDivContinents');

    for (const { code, name } of continents) {
        const nCheckbox = document.createElement('input');
        nDiv.appendChild(nCheckbox);
        nCheckbox.type = 'checkbox';
        nCheckbox.id = `tChk${code}`;
        nCheckbox.value = code;
        nCheckbox.dataset.continent = code;
        nCheckbox.addEventListener('change', showOrHideCountries);

        const nLabel = document.createElement('label');
        nDiv.appendChild(nLabel);
        nLabel.setAttribute('for', `tChk${code}`);
        nLabel.innerText = name;
    }
}


async function showOrHideCountries(e) {
    const nCheckbox = e.currentTarget;
    const continentId = nCheckbox.dataset.continent;

    if (nCheckbox.checked) {
        const service = new CountriesService();
        const countries = await service.getCountriesByContinent(continentId);
        renderCountries(countries);
    } else {
        deleteCountries(continentId);
    }
}


function renderCountries(countries) {
    const nOl = document.querySelector('#tOlCountries');

    for (const { code, name, continent } of countries) {
        const nLi = document.createElement('li');
        nOl.appendChild(nLi);
        nLi.dataset.country = code;
        nLi.dataset.continent = continent;
        nLi.innerText = name;
        nLi.addEventListener('click', renderFlag);
    }
}


function deleteCountries(continentId) {
    const nOl = document.querySelector('#tOlCountries');
    const nLisToRemove = document.querySelectorAll(`li[data-continent="${continentId}"]`);
    for (const nLi of nLisToRemove) {
        nOl.removeChild(nLi);
    }
}


async function renderFlag(e) {
    const countryId = e.target.dataset.country;
    const service = new CountriesService();
    const { flags } = await service.getCountryById(countryId);
    document.querySelector('#tImgFlag').src = flags.svg;
    document.querySelector('#tDivFlag').classList.remove('hidden');
    document.body.style.overflowY = 'hidden';
}