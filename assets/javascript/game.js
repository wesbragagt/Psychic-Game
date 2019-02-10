// 1. make an array of letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var test = letters.length;
console.log("array contains " + test + " letters");



// make variables for wins, lossess, guesses left and guessess so far.
var win = 0;
var lossess = 0;

var guessesLeft = 12;

var letterSoFar = [];

var keyPressed = document.getElementById("letter-guessed");
var computerGuess = generateRandomLetter();
console.log("computer picks " + computerGuess);

// 2. computer chooses from those letters
function generateRandomLetter() {
    var computerNumber = Math.floor(Math.random() * letters.length);
    return letters[computerNumber];

}



// 3. make a keypress function to sense the keys being pressed

document.onkeyup = function (event) {

    letterSoFar.unshift(event.key);
    var newLetter = document.createElement("li");
    newLetter.textContent = letterSoFar[0];
    keyPressed.appendChild(newLetter);

    // 4. if one of the letters pressed on keyboard is equals to letter computer picked add +1 to wins and pick another letter

    if (letterSoFar[0] == computerGuess) {
        alert("OOOOH NOO, You got me");
        win = win + 1;
        document.getElementById("wins").innerHTML = win;
        location.reload();



    }
    else {
        alert("haha wrong letter, psyyyych!");
        lossess = lossess + 1;
        guessesLeft = guessesLeft - 1;
        document.getElementById("guesses-left").innerHTML = guessesLeft;

        if (guessesLeft === 0) {
            alert("GAMEOVER");
            document.write("<h1>Game Over</h1>");
        }
        else { return; }
    }
}






// 5. if letter pressed is not letter picked -1 guesses left