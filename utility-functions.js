export function findById(pokemonArray, idtoFind) {
    
    for (let i = 0; i < pokemonArray.length; i++) {
        const array = pokemonArray[i];

        if (array.id === idtoFind) {
            return array;
        }
    }
}


export function calcLineTotal(quantity, price) {
    let lineTotal = quantity * price;
    return lineTotal
    ;

}

function roundCurrency(amount) {
    let round = Math.round(amount * 100) / 100;
    return round;
}


export function calcOrderTotal(cartArray, pokemonArray) {
    let orderTotal = 0;

    for (let i = 0; i < cartArray.length; i++) {
        let lineItem = cartArray[i];
        let pokemon = findById(pokemonArray, lineItem.id);
        let lineTotal = calcLineTotal(lineItem.quantity, pokemon.price);
        orderTotal += lineTotal;
    }
    let finalPrice = roundCurrency(orderTotal);
    return `$${finalPrice}.00`;
}


export function renderCartTableRows(cart, pokemonIdIndex) {
    const tableRow = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');


    // const removeItemButton = document.createElement('button');
    // removeItemButton.classList.add('remove-line-button');
    // removeItemButton.textContent = 'Remove Item';
    

    let lineTotal = calcLineTotal(cart.quantity, pokemonIdIndex.price);
    

    td1.textContent = pokemonIdIndex.name;
    td2.textContent = cart.quantity;
    td3.textContent = '$' + pokemonIdIndex.price.toFixed(2);
    td4.textContent = '$' + lineTotal.toFixed(2);

    td4.classList.add('line-totals');

    tableRow.append(td1, td2, td3, td4);
    return tableRow;
}