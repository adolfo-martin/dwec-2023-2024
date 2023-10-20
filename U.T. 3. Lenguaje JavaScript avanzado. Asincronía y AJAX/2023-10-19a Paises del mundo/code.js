document.addEventListener('DOMContentLoaded', setup);


function setup(e) {
    const nSelect = document.querySelector('#tSelContinents');
    nSelect.addEventListener('change', retrieveAndShowCountriesByContinent);
    retrieveAndShowContinents();
}


function retrieveAndShowContinents() {
    showSpinnerLoading();

    const url = 'http://192.168.0.38:8080/api/continents';
    fetch(url)
        .then(response => response.json())
        .then(({ continents }) => fillTableContinents(continents))
        .catch(alert);
}


function fillTableContinents(continents) {
    const nSelect = document.getElementById('tSelContinents');

    continents.forEach(({ code, name }) => {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', code);

        const nText = document.createTextNode(name);
        nOption.appendChild(nText);
    });

    hideSpinnerLoading();
}


function retrieveAndShowCountriesByContinent(e) {
    showSpinnerLoading();

    const nSelect = e.target;
    const continentId = nSelect.value;

    const url = 'http://192.168.0.38:8080/api/countries';
    fetch(url)
        .then(response => response.json())
        .then(({ countries }) => {
            const filteredCountries = countries.filter(({ continent }) => continent === continentId);
            fillListCountries(filteredCountries)
        })
        .catch(alert);
}


function fillListCountries(countries) {
    const nOl = document.querySelector('#tOlCountries');
    while (nOl.hasChildNodes()) {
        nOl.removeChild(nOl.firstChild);
    }

    countries.forEach(({ code, name }) => {
        const nOption = document.createElement('li');
        nOl.appendChild(nOption);
        // nOption.setAttribute('value', code);

        const nText = document.createTextNode(name);
        nOption.appendChild(nText);
    });

    hideSpinnerLoading();
}


function showSpinnerLoading() {
    // const nImage = document.getElementById('tImgLoading');
    // const nImage = document.querySelector('#tImgLoading');
    const nImage = document.querySelector('.spinner-loading');
    nImage.classList.remove('hidden');
}

function hideSpinnerLoading() {
    const nImage = document.querySelector('.spinner-loading');
    nImage.classList.add('hidden');
}