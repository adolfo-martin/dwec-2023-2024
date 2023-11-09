import ProductsService from "./ProductsService.js";

export async function getAndRenderProducts() {
    const service = new ProductsService();
    const products = await service.getProducts();
    renderProducts(products);
}





function renderProducts(products) {
    const nTbody = document.querySelector('#tTabProducts>tbody');

    for (const product of products) {
        nTbody.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td><button id="tBut${product.id}" data-product="${product.id}">+</button></td>
            </tr>
        `;

        const nButton = document.querySelector(`#tBut${product.id}`);
        nButton.addEventListener('click', addProductToCart);
    };

    function addProductToCart(e) {
        let cart = JSON.parse(window.localStorage.getItem('cart'));

        if (!cart) {
            cart = [];
        }

        const productId = parseInt(e.target.dataset.product);
        cart.push(productId);
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }
}


