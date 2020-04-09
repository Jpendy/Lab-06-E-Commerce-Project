// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { findById } from '../utility-functions.js';
import { calcLineTotal } from '../utility-functions.js';
import { renderPokemon } from '../render-pokemon.js'; 
import { calcOrderTotal } from '../utility-functions.js';
import { renderCartTableRows } from '../utility-functions.js';
import pokemonTestArray from '../pokemonArray.js';
const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const charizard = {
        id: 1,
        name: "Ash's Charizard",
        lowerName: 'charizard',
        image: 'https://vignette.wikia.nocookie.net/iso33private/images/9/95/Charizard.png/revision/latest/scale-to-width-down/340?cb=20170727171344',
        category: 'Fire / Flying / Dragon',
        description: 'Lazy and disobediant.. Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.',
        price: 10.00
    };
 
    const expected = `<li style="list-style: none;"><h2>Ash's Charizard</h2><img src="https://vignette.wikia.nocookie.net/iso33private/images/9/95/Charizard.png/revision/latest/scale-to-width-down/340?cb=20170727171344" style="height: 200px; width: 200px;"><p>Lazy and disobediant.. Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.</p><h2>$10.00</h2><h3>Fire / Flying / Dragon</h3><button value="1">Add to Cart</button><input type="number" min="1" max="99"></li>`;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const el = renderPokemon(charizard);

    const outerHTML = el.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, outerHTML);
});



test('findById', function(assert) {

    const pokemonArrayTest = {
        id: 1,
        name: "Ash's Charizard",
        lowerName: 'charizard',
        image: 'https://vignette.wikia.nocookie.net/iso33private/images/9/95/Charizard.png/revision/latest/scale-to-width-down/340?cb=20170727171344',
        category: 'Fire / Flying / Dragon',
        description: 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.',
        price: '$2.00'
    };

    const idToFind = 1;

    const expected = "Ash's Charizard";

    const result = findById(pokemonArrayTest, idToFind);

    assert.equal(result, expected.name);
});


test('calcLineTotal', function(assert) {

    const quantity = 5;
    const price = 6;

    const expected = 30;


    const result = calcLineTotal(quantity, price);

    assert.equal(result, expected);
});


test('calcOrderTotal', function(assert) {

    const cartArray = [
        {
            id: 1,
            quantity: 2
        }
    ];

    const pokemonArray = [
        {
            id: 1,
            name: "Ash's Charizard",
            lowerName: 'charizard',
            image: 'https://vignette.wikia.nocookie.net/iso33private/images/9/95/Charizard.png/revision/latest/scale-to-width-down/340?cb=20170727171344',
            category: 'Fire / Flying / Dragon',
            description: 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.',
            price: 2.00
        }
    ];

    const expected = '$4.00';


    const result = calcOrderTotal(cartArray, pokemonArray);

    assert.equal(result, expected);

});


test('renderCartTableRows', function(assert) {

    const cart = 
        {
            id: 1,
            quantity: 2
        }
    ;

    const pokemonIdIndex = findById(pokemonTestArray, cart.id);
    const expected = `<tr><td>Ash's Charizard</td><td>2</td><td>$10.00</td><td class="line-totals">$20.00</td></tr>`;

        
    const result = renderCartTableRows(cart, pokemonIdIndex);
    const el = result.outerHTML;

    assert.equal(el, expected);


});