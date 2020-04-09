//import { cartArray } from './cartArray.js';
import { findById } from './utility-functions.js';
import pokemonArray from './pokemonArray.js';
import { calcOrderTotal } from './utility-functions.js';
import { renderCartTableRows } from './utility-functions.js';

const tableBody = document.getElementById('table-body');
const orderTotalSpan = document.getElementById('order-total');
const orderButton = document.getElementById('order-button');
const cartResetButton = document.getElementById('cart-reset-button');

let cartArray = localStorage.getItem('CART');

if (cartArray) {
    cartArray = JSON.parse(cartArray);
}
else {
    cartArray = [];
}

for (let i = 0; i < cartArray.length; i++) {
    let cart = cartArray[i];

    let pokemonIdIndex = findById(pokemonArray, cart.id);

    const tableRow = renderCartTableRows(cart, pokemonIdIndex);

    tableBody.appendChild(tableRow);
}

const total = calcOrderTotal(cartArray, pokemonArray);
orderTotalSpan.textContent = total;

if (cartArray.length === 0) {
    orderButton.disabled = true;
}
else {
    orderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order place:/n' + JSON.stringify(cartArray, true, 2));
        location.href = 'index.html';
    });

}

cartResetButton.addEventListener('click', ()=> {
    localStorage.clear();
    tableBody.textContent = null;
    orderTotalSpan.textContent = null;
});

