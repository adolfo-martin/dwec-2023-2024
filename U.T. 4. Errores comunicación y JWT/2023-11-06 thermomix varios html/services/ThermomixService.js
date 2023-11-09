export default class ThermomixService {
    static URL_BASE = 'http://localhost:8080/controlador.php';

    async getBooks() {
        const url = `${ThermomixService.URL_BASE}?operacion=obtener_libros`;
        const response = await fetch(url);
        const data = await response.json();
        return data.libros;
    }

    async getDishesByBook(bookId) {
        const url = `${ThermomixService.URL_BASE}?operacion=obtener_platos&libro=${bookId}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.platos;
    }

    async getDishes() {
        const books = await this.getBooks();

        // const allDishes = [];
        // for (const book of books) {
        //     const dishes = await this.getDishesByBook(book.clave);
        //     allDishes.push(...dishes);
        // }

        const allDishes = await Promise.all(
            books.map(book => this.getDishesByBook(book.clave))
        );

        return allDishes.flat();
    }
}