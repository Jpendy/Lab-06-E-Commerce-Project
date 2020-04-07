// IMPORT MODULES under test here:
// import example from '../src/example.js';

import { renderPokemon } from '../render-pokemon.js'; 
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
        description: 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.',
        price: '$2.00'
    };
 
    const expected = `<li style="list-style: none;"><h2>Ash's Charizard</h2><img src="https://vignette.wikia.nocookie.net/iso33private/images/9/95/Charizard.png/revision/latest/scale-to-width-down/340?cb=20170727171344" style="height: 250px; width: 250px;"><p>Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.</p><h2>$2.00</h2><h3>Fire / Flying / Dragon</h3><button value="1">Add to Cart</button></li>`;
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const el = renderPokemon(charizard);

    const outerHTML = el.outerHTML;

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, outerHTML);
});
