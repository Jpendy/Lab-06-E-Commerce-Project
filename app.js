import pokemonArray from './pokemonArray.js';
import { renderPokemon } from './render-pokemon.js';

const mainSection = document.getElementById('main-section');

const PRODUCTS_KEY = 'PRODUCTS';

let PokemonInCloud = localStorage.getItem(PRODUCTS_KEY);

if (!PokemonInCloud) {

    PokemonInCloud = JSON.stringify(pokemonArray);

    localStorage.setItem(PRODUCTS_KEY, PokemonInCloud);
}

const parsedPokemonInCloud = JSON.parse(PokemonInCloud); 


for (let i = 0; i < parsedPokemonInCloud.length; i++){
    const pokemon = parsedPokemonInCloud[i];
    const list = renderPokemon(pokemon);
    mainSection.appendChild(list);
}







