import { pokemonArray } from './pokemonArray.js';

const mainSection = document.getElementById('main-section');

for (let i = 0; i < pokemonArray.length; i++){
    const pokemon = pokemonArray[i];

    const list = document.createElement('li');
    const name = document.createElement('h2');
    const img = document.createElement('img');
    const description = document.createElement('p'); 
    const price = document.createElement('h2');
    const category = document.createElement('h3');
    const button = document.createElement('button');



    name.textContent = pokemon.name;
    img.src = pokemon.image;
    img.style.height = '300px';
    img.style.width = '300px';    
    description.textContent = pokemon.description;
    price.textContent = pokemon.price;
    category.textContent = pokemon.category;
    list.style.listStyle = 'none';
    button.value = pokemon.id;
    button.textContent = 'Add to Cart'

    list.append(name, img, description, price, category, button);

    mainSection.appendChild(list);
}