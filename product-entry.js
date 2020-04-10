import pokemonArray from './pokemonArray.js';
const myForm = document.getElementById('my-form');


myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const myFormData = new FormData(myForm);

    const PRODUCTS_KEY = 'PRODUCTS';

    let PokemonInCloud = localStorage.getItem(PRODUCTS_KEY);
    
    if (!PokemonInCloud) {
    
        PokemonInCloud = JSON.stringify(pokemonArray);
    
        localStorage.setItem(PRODUCTS_KEY, PokemonInCloud);
    }

    const product = {
        id: myFormData.get('id'),
        name: myFormData.get('name'),
        image: myFormData.get('image'),
        description: myFormData.get('description'),
        category: myFormData.get('category'),
        price: myFormData.get('price')
    };
    
    const pokemonInCloud = localStorage.getItem('PRODUCTS');

    const parsedPokemonInCloud = JSON.parse(pokemonInCloud);

    parsedPokemonInCloud.push(product);


    const stringyNewProducts = JSON.stringify(parsedPokemonInCloud);

    localStorage.setItem('PRODUCTS', stringyNewProducts);
});