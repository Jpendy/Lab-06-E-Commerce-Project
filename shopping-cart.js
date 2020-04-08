import { cartArray } from './cartArray.js';
import { findById } from './utility-functions.js';
import pokemonArray from './pokemonArray.js';
import { calcOrderTotal } from './utility-functions.js';
import { renderCartTableRows } from './utility-functions.js';

const tableBody = document.getElementById('table-body');
const orderTotalSpan = document.getElementById('order-total');

for (let i = 0; i < cartArray.length; i++) {
    let cart = cartArray[i];

    let pokemonIdIndex = findById(pokemonArray, cart.id);

    const tableRow = renderCartTableRows(cart, pokemonIdIndex);



    
    tableBody.appendChild(tableRow);
}

const total = calcOrderTotal(cartArray, pokemonArray);
orderTotalSpan.textContent = total;