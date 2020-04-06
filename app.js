import { pokemonArray } from './pokemonArray.js';
import { renderPokemon } from './render-pokemon.js';

const mainSection = document.getElementById('main-section');

for (let i = 0; i < pokemonArray.length; i++){
    const pokemon = pokemonArray[i];

    const list = renderPokemon(pokemon);

    mainSection.appendChild(list);
}


