import { findById } from './utility-functions.js';
//import pokemonArray from './pokemonArray.js';

export function renderPokemon(pokemon) {
    const list = document.createElement('li');
    const name = document.createElement('h2');
    const img = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('h2');
    const category = document.createElement('h3');
    const button = document.createElement('button');

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
    button.addEventListener('click', () => {

        let cartItem = localStorage.getItem('CART');
        let cart;
        console.log(cartItem);
        if (cartItem) {
            cart = JSON.parse(cartItem);
        }
        else {
            cart = [];
        }
        
        let item = findById(cart, pokemon.id);

        if (!item) {
            item = {
                id: pokemon.id,
                quantity: 1
            };

            cart.push(item);
        }
        else {
            item.quantity++;
        }

        cartItem = JSON.stringify(cart);
        localStorage.setItem('CART', item);

        alert('1 ' + pokemon.name + ' added to cart');

    });
   
    list.append(name, img, description, price, category, button);
    return list;
}