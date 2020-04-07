export function findById(pokemonArray, cartArray) {
    for (let i = 0; i < pokemonArray.length; i++) {
        let array = pokemonArray[i];

        if (array.id === cartArray.id) {
            return array.name;
        }
    }
}



export function calcLineItem(quantity, price) {
    let lineTotal = quantity * price;
    return lineTotal;
}