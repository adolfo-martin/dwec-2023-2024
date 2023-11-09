import ThermomixService from "./services/ThermomixService.js";


import MiHeaderComponent from './components/MiHeaderComponent.js';
window.customElements.define('mi-header', MiHeaderComponent);

import MiNavComponent from './components/MiNavComponent.js';
window.customElements.define('mi-nav', MiNavComponent);


export async function retrieveAndRenderBooks() {
    const service = new ThermomixService();
    const books = await service.getBooks();
    renderBooks(books);
}


function renderBooks(books) {
    const nUl = document.querySelector('#tUlBooks');

    books.forEach(book => {
        const nLi = document.createElement('li');
        nUl.appendChild(nLi);
        nLi.textContent = book.titulo;
        nLi.dataset.book = book.clave;
        nLi.addEventListener('click', gotoPageBooks);
    });
}


function gotoPageBooks(e) {
    const bookId = parseInt(e.target.dataset.book);
    window.location = `./dishes.htm?book=${bookId}`;
}


function getBookIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const bookId = parseInt(params.get('book'));
    return bookId;
}


export async function retrieveAndRenderDishes() {
    const bookId = getBookIdFromUrl();

    if (!bookId) {
        const service = new ThermomixService();
        const dishes = await service.getDishes();
        renderDishes(dishes);
    } else {
        const service = new ThermomixService();
        const dishes = await service.getDishesByBook(bookId);
        renderDishes(dishes);
    }
}


function renderDishes(dishes) {
    const nUl = document.querySelector('#tUlDishes');

    dishes.forEach(dish => {
        const nLi = document.createElement('li');
        nUl.appendChild(nLi);
        nLi.textContent = dish.nombre;
        nLi.dataset.dish = dish.clave;
        // nLi.addEventListener('click', gotoPageDishes);
    });
}