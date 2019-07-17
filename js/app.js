/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
* app.js */

//creating instance for the Game class
let game;

//listener that starts the game, and when the game is over, resets the game.
$('#btn__reset').on('click', function() {
    game = new Game ();
    game.startGame();
    game.resetGame();
});

//listener that listens for a click on any of the onscreen keyboard buttons. 
const $keys = $('#qwerty .key');
$keys.on('click', function(e) {
    game.handleInteraction(e);
});

//listener added for the keydown event.
document.addEventListener('keydown', function(event){
    const pressedKey = event.key;
    const alphabet = /[a-z]/;
    const keyClass = document.getElementsByClassName('key');
    if(alphabet.test(pressedKey)) {
        for(let key of keyClass) {
            if(key.innerText == pressedKey) {
                key.click();
            }
        }
    }   
});
