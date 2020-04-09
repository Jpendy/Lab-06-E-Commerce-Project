import { findById } from './utility-functions.js';
//import { cartArray } from './cartArray.js';

export function renderPokemon(pokemon) {
    const list = document.createElement('li');
    const name = document.createElement('h2');
    const img = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('h2');
    const category = document.createElement('h3');
    const button = document.createElement('button');
    const input = document.createElement('input');

    name.textContent = pokemon.name;
    img.src = pokemon.image;
    img.style.height = '200px';
    img.style.width = '200px';
    description.textContent = pokemon.description;
    price.textContent = '$' + pokemon.price.toFixed(2);
    category.textContent = pokemon.category;
    list.style.listStyle = 'none';
    button.value = pokemon.id;
    button.textContent = 'Add to Cart';
    input.type = 'number';
    input.min = '1';
    input.max = '99';
    input.value = 1;
    
    button.addEventListener('click', () => {
        let cartArray = localStorage.getItem('CART');

        if (!cartArray) {
            cartArray = [];
            
        }
        else {
            cartArray = JSON.parse(cartArray);
        }
        
        let item = findById(cartArray, pokemon.id);

        if (!item) {
            item = {
                id: pokemon.id,
                quantity: input.value
            };

            cartArray.push(item);
        }
        else {

            item.quantity++;
        }

        cartArray = JSON.stringify(cartArray);
        localStorage.setItem('CART', cartArray);

        alert(input.value + ' ' + pokemon.name + ' added to cart');

    });
   
    list.append(name, img, description, price, category, button, input);
    return list;
}