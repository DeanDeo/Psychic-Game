//Letter choices available
var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;




//computer select random
var computerGuess = compChoices[Math.floor(Math.random() * compChoices.length)];

//allows user 9 guesses
function updateGuessesLeft() {
    // grabbing the HTML element and setting it equal to the guessesLeft
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.compChoices[Math.floor(Math.random() * this.compChoices.length)];
};

function updateGuessesSoFar() {
    //guesses user has already used
    document.querySelector('#guesses').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// function will be called when we reset everything
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

//when key is released it becomes the users guess
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = compChoices.includes(userGuess);

    if (check === false) {
        alert("Please select a letter");
        return false;
    } else if (check === true) {
        //if user picks a letter then update guesses left and add the lette guessed to list
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                //update win column
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                alert("Winner Winner Chicken Dinner!");
                
                reset();
            }
        } else if (guessesLeft == 0) {
            // update loss column 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Try again you non-psychic!");
            // reset 
            reset();
        }
        return false;
    } else {
        alert("Error");
    }

};