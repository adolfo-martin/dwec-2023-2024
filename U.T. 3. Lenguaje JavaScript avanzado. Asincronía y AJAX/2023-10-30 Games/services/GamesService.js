export class GamesService {
    static BASE_URL = 'http://127.0.0.1:3000';

    async getGenres() {
        const response = await fetch(`${BASE_URL}/genres`);
        const data = await response.json();
        return data.genres;
    }
}