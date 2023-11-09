export default class ProductsService {
    _products = [
        { id: 1, name: 'Ratón Logitech', price: 12.95 },
        { id: 2, name: 'Monitor Samsung', price: 185.50 },
        { id: 3, name: 'Teclado Logitech', price: 18.90 },
        { id: 4, name: 'Camara Logitech', price: 75.95 },
        { id: 5, name: 'Pendrive Sandisk', price: 23.50 },
    ];

    async getProducts() {
        return this._products;
    }

    async getProductById(id) {
        return this._products.find(product => product.id === id);
    }
}