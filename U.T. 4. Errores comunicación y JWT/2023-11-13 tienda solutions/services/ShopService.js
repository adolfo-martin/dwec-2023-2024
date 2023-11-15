export default class ShopService {
    static BASE_URL = 'http://127.0.0.1:8080/rest'

    async getProducts() {
        const url = ShopService.BASE_URL + '/products.php';
        const response = await fetch(url);
        const data = await response.json();
        return data.products;
    }


    async getProductsByCategory(categoryId) {
        const products = await this.getProducts();
        return products.filter(product => product.category_id === categoryId);
    }
}