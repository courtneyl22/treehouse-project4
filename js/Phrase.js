/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    //adds letter placeholders to the display when the game starts.
    addPhraseToDisplay() {     
        for(let i = 0; i < this.phrase.length; i ++) {
            let character = this.phrase[i];
            let space = `<li class="space"> </li>`;
            let letter = `<li class="hide letter ${character}">${character}</li>`;

            if (character === " ") {
                $('#phrase ul').append(space);
            } else {
                $('#phrase ul').append(letter);
            }
        }
    }

    //checks to see if the letter selected by the player matches a letter in the phrase.
    checkLetter(letter){
        return (this.phrase.includes(letter));
    }

    //reveals the letter(s) on the board that matches the player's selection.
    showMatchedLetter(letter) {
       $(`#phrase ul .${letter}`).removeClass('hide').addClass('show');
    }
}