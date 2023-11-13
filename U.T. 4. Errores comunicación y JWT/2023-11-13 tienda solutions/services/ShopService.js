export default class ShopService {
    static BASE_URL = 'http://10.88.75.113:8080/rest'

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