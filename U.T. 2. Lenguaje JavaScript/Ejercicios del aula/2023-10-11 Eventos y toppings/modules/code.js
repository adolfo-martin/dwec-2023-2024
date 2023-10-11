import { toppings } from "./data.js";

document.addEventListener('DOMContentLoaded', () => {
    fillTableToppings(toppings);
});

function fillTableToppings(toppings) {
    const nTbody = document.getElementById('tTbdToppings');

    toppings.forEach(topping => {
        const nTr = document.createElement('tr');
        nTbody.appendChild(nTr);

        const nTdCheckzone = document.createElement('td')
        nTr.appendChild(nTdCheckzone);

        const nCheckbox = document.createElement('input');
        nTdCheckzone.appendChild(nCheckbox);
        nCheckbox.type = 'checkbox';
        nCheckbox.value = topping.id;
        nCheckbox.dataset.price = topping.price;
        nCheckbox.addEventListener('change', updateTotalPrice);

        const nTdName = document.createElement('td')
        nTr.appendChild(nTdName);
        nTdName.textContent = topping.type;

        const nTdPrice = document.createElement('td')
        nTr.appendChild(nTdPrice);
        nTdPrice.textContent = topping.price;

    });
}

function updateTotalPrice(e) {
    const nParagraph = document.getElementById('tParPrice');
    const totalPrice = parseFloat(nParagraph.textContent);

    const nCheckbox = e.target;
    const price = parseFloat(nCheckbox.dataset.price);

    if (nCheckbox.checked) {
        nParagraph.textContent = totalPrice + price;
    } else {
        nParagraph.textContent = totalPrice - price;
    }
}