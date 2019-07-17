/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
* Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase ('meg thee stallion'), //rappers & singers.
                        new Phrase ('ari lennox'),
                        new Phrase ('cardi b'),
                        new Phrase ('doja cat'),
                        new Phrase ('rico nasty'),
                        new Phrase ('janelle monae'),
                        new Phrase ('kari faux'),];
        this.activePhrase = null;
    }

    //selects then returns a random phrase from the array of phrases above.
    getRandomPhrase() {
        let chosenPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return chosenPhrase;
    }

    //hides the start screen overlay, sets the activePhrase to a random phrase, and then adds the phrase to the display. resets phrase when restart.
    startGame(){
        $('#phrase ul').empty();
        $('#overlay').hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(); 
    }

    
    //checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. 
    handleInteraction(e) {
        let letter = $(e.target).text(); 
        $(e.target).prop('disabled', true);
         if (this.activePhrase.checkLetter(letter)){
            this.activePhrase.showMatchedLetter(letter);
            $(e.target).addClass('chosen');
            if (this.checkForWin()) {
                this.gameOver();
            }     
        } else {
            this.removeLife();
            $(e.target).addClass('wrong');
        }
    }

    //removes a life from the scoreboard. once out of lives(5 missed chances), the gameOver() method is called.
    removeLife() {
        $('img')[this.missed].src = 'images/lostHeart.png';
        this.missed ++;
        if (this.missed === 5) {
            this.gameOver();
        }
    }

    //checks to see if all of the letters are revealed.
    checkForWin() {
        return ($('#phrase ul .hide').length === 0);
    }

    //displays the original start screen overlay. depending on the outcome of the game, replace the overlay’s `start` CSS class with either the `win` or `lose` CSS class.
   gameOver() {
        $('#overlay').show();
        if (this.checkForWin()) {
            $('#game-over-message').text('You know your Artists!');
            $('.title').text('Congrats!');
            $('#overlay').addClass('win');
        } else {
            $('#game-over-message').text('You tried...');
            $('.title').text('Awww');
            $('#overlay').addClass('lose');
        }
    }

    //enables all onscreen buttons, updates each to use the `key` CSS class, and resets all of the heart images.
    resetGame() {
        $('#qwerty .key').prop('disabled', false);
        document.querySelectorAll(`img[src*=lost]`).forEach(lives => lives.src = 'images/liveHeart.png');
        $('#qwerty .key').removeClass('chosen');
        $('#qwerty .key').removeClass('wrong');
        $('#overlay').removeClass('lose');
        $('#overlay').removeClass('win');
    }
}