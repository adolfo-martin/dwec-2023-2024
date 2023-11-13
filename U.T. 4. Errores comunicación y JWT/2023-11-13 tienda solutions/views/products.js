import ShopService from "../services/ShopService.js";

document.addEventListener('DOMContentLoaded', async _ => {
    const categoryId = getCategoryIdFromUrl();
    await getAndRenderProducts(categoryId);
});


function getCategoryIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get('category');
    return categoryId;
}


async function getAndRenderProducts(categoryId) {
    const service = new ShopService();
    let products;
    if (!categoryId) {
        products = await service.getProducts();
    } else {
        products = await service.getProductsByCategory(categoryId);
    }
    renderProducts(products);
}


function renderProducts(products) {
    const nTbody = document.querySelector('#tTabProducts');

    products.forEach(product => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);
        nTr.setAttribute('title', product.description);

        const nTdName = document.createElement('td');
        nTr.appendChild(nTdName);
        nTdName.textContent = product.product_name;

        const nTdPrice = document.createElement('td');
        nTr.appendChild(nTdPrice);
        nTdPrice.textContent = product.list_price;

        const nTdAdd = document.createElement('td');
        nTr.appendChild(nTdAdd);
        nTdAdd.textContent = '+';
        nTdAdd.setAttribute('data-product', product.product_id);
        nTdAdd.addEventListener('click', addProductToCart);
    });
}


function addProductToCart(e) {
    const productId = parseInt(e.target.dataset.product);

    let cart = JSON.parse(window.sessionStorage.getItem('cart'));
    if (!cart) {
        cart = [];
    }

    cart.push(productId);
    window.sessionStorage.setItem('cart', JSON.stringify(cart));
}