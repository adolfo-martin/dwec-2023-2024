document.addEventListener('DOMContentLoaded', setup);


function setup() {
    retrieveAndShowContinents();
}


function retrieveAndShowContinents() {
    const url = 'http://192.168.0.38:8080/api/continents';
    fetch(url)
        .then(response => response.json())
        .then(data => showContinents(data.continents))
        .catch(alert);
}


function showContinents(continents) {
    const nDiv = document.querySelector('#tDivContinents');
    continents.forEach(continent => {
        const nCheckbox = document.createElement('input');
        nDiv.appendChild(nCheckbox);
        nCheckbox.setAttribute('type', 'checkbox');
        nCheckbox.setAttribute('name', continent.code);
        nCheckbox.setAttribute('id', `tChk${continent.code}`);
        nCheckbox.setAttribute('value', continent.code);
        nCheckbox.setAttribute('data-continent', continent.code);
        nCheckbox.addEventListener('change', retrieveAndShowCountriesByContinent);

        const nLabel = document.createElement('label');
        nDiv.appendChild(nLabel);
        nLabel.setAttribute('for', `tChk${continent.code}`);
        nLabel.textContent = continent.name;
    });
}


function retrieveAndShowCountriesByContinent(e) {
    const nCheckbox = e.target;
    const continentId = nCheckbox.dataset.continent;

    if (nCheckbox.checked) {
        const url = 'http://192.168.0.38:8080/api/countries';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const countries = data.countries.filter(country => country.continent === continentId);
                showCountries(countries);
            })
            .catch(alert);
    } else {
        const nTbody = document.querySelector('#tTabCountries>tbody');
        const rows = nTbody.querySelectorAll(`tr[data-continent="${continentId}"]`);
        rows.forEach(row => nTbody.removeChild(row));
    }
}


function showCountries(countries) {
    const nTbody = document.querySelector('#tTabCountries>tbody');

    countries.forEach(country => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);
        nTr.setAttribute('data-continent', country.continent)

        const nTdFlag = document.createElement('td');
        nTr.appendChild(nTdFlag);

        const nTdName = document.createElement('td');
        nTr.appendChild(nTdName);

        nTdName.textContent = country.name;

        const nTdPopulation = document.createElement('td');
        nTr.appendChild(nTdPopulation);
    });
}