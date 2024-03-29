# treehouse-project4
This is a Phrase Hunter game that was created by using OOP JavaScript. I hope you enjoy it!

Technologies:
- JavaScript
- Object-Oriented Programming Javascript
- HTML
- CSS

Phrase Class:
- Includes constructor that receives a phrase parameter and initializes a phrase property set to the phrase
- Includes addPhraseToDisplay() method which adds the phrase to the gameboard
- Includes checkLetter() method which checks if a letter is in the phrase
- Includes showMatchedLetter() method which reveals the letter(s) on the board that matches the player's selection

Game Class Constructor:
- Includes a constructor that initializes a missed property set to 0, a phrases property set to an array of five Phrase objects, and an activePhrase property set to null initially
- Phrases added to the game only include letters and spaces

Game Class Methods:
- Includes startGame() method that hides the start screen overlay, sets the activePhrase property to a random phrase, and calls the addPhraseToDisplay() method on the active phrase
- Includes getRandomPhrase() method that randomly retrieves one phrase from the phrases array
- Includes handleInteraction() method that:
  1. Disables the selected letter's onscreen keyboard button
  2. If the phrase does not include the guessed letter, the wrong CSS class is added to the selected letter's keyboard button and the removeLife() method is called
  3. If the phrase includes the guessed letter, the chosen CSS class is added to the selected letter's keyboard button, the   showMatchedLetter() method is called on the phrase, and the checkForWin() method is called. If the player has won the game, the gameOver() method is called
- Includes checkForWin() method that checks if the player has revealed all of the letters in the active phrase
- Includes a removeLife() method that removes a life from the scoreboard (one of the liveHeart.png images is replaced with a lostHeart.png image), increments the missed property, and if the player has lost the game calls the gameOver() method
- Includes gameOver() method that displays a final "win" or "loss" message by showing the original start screen overlay styled with either the win or lose CSS class

app.js:
- Clicking the "Start Game" button creates a new Game object and starts the game
- Clicking an onscreen keyboard button results in a call to the handleInteraction() method for the clicked keyboard button
- Clicking the spaces between and around the onscreen keyboard buttons does not result in the handleInteraction() method being called
- Event listener has been added for the keydown or keyup event so that pressing a physical keyboard button results in the handleInteraction() method being called for the associated onscreen keyboard button

Resetting the Gameboard:
- After a game is completed, the gameboard is reset so that clicking the "Start Game" button loads a new game

HTML & CSS:
- Provided HTML and CSS is used
- App styles have been personalized and changes have been noted in the README.md file and the project submission notes
- Changes made:
  1. Font was changed to Darker Grotesque
  2. Added background images to the .main container, .start, .win, & .lose classes
  3. Changed the colors of the fonts
  4. Changed the opacity of the virtual keyboard & start button
  5. Changed the colors for the .chosen, .wrong, & .show classes
  6. Put text into the h1 element when it's first loaded
  
  
