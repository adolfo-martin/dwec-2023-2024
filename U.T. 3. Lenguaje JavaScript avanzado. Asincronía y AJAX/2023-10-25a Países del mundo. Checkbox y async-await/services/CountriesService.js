export default class CountriesService {
    static URL_BASE = 'http://10.32.155.14:8080/api';

    async getContinents() {
        const url = CountriesService.URL_BASE + '/continents';
        const response = await fetch(url);
        const data = await response.json();
        return data.continents;
    }

    getCountries() { }

    async getCountriesByContinent(continentId) {
        const url = CountriesService.URL_BASE + '/countries';
        const response = await fetch(url);
        const data = await response.json();
        return data.countries.filter(country => country.continent === continentId);
    }

    async getCountryById(countryId) {
        const url = CountriesService.URL_BASE + '/countries/' + countryId;
        const response = await fetch(url);
        const data = await response.json();
        return data.country;
    }

}