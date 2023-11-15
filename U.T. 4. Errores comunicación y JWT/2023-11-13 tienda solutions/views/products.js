import ShopService from "../services/ShopService.js";

document.addEventListener('DOMContentLoaded', async _ => {
    const categoryId = getCategoryIdFromUrl();
    await getAndRenderProducts(categoryId);

    recreateCart();

    document.querySelector('#tDivCartButton')
        .addEventListener('click', _ => window.location = '/views/cart.htm');
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
        nTdAdd.setAttribute('data-id', product.product_id);
        nTdAdd.setAttribute('data-name', product.product_name);
        nTdAdd.setAttribute('data-price', product.list_price);
        nTdAdd.addEventListener('click', addProductToCart);
    });
}


function addProductToCart(e) {
    const productId = parseInt(e.target.dataset.id);
    const productName = e.target.dataset.name;
    const productPrice = parseFloat(e.target.dataset.price);

    let cart = JSON.parse(window.sessionStorage.getItem('cart'));
    if (!cart) {
        cart = [];
    }

    cart.push({
        id: productId,
        name: productName,
        price: productPrice
    });
    window.sessionStorage.setItem('cart', JSON.stringify(cart));

    recreateCart();
}


function recreateCart() {
    const cart = JSON.parse(window.sessionStorage.getItem('cart'));

    if (cart) {
        const nTbody = document.querySelector('#tTabCart>tbody');
        nTbody.innerHTML = '';

        cart.forEach(product => {
            const nTr = document.createElement('tr');
            nTbody.appendChild(nTr);

            const nTdName = document.createElement('td')
            nTr.appendChild(nTdName);
            nTdName.textContent = product.name;

            const nTdPrice = document.createElement('td')
            nTr.appendChild(nTdPrice);
            nTdPrice.textContent = product.price;
        })
    }
}