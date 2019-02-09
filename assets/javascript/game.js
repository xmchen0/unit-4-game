/* UofT Bootcamp 2019 - Crystal Collector */

// call jQuery's $ function, passing to it the document object
$(document).ready(function() { 

/// GLOBAL VARIABLES

//1. random generated number
// define random integar between 19 and 120
var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;

//2. win/lose counter
var wins = 0;                   // win counter contains an integar value of zero
$("#winCount").text(wins);      // get winCount id and print out the values of numeric keys
var losses = 0;                 // lose counter contains an integar value of zero
$("#loseCount").text(losses);   // get loseCount id and print out the values of numeric keys

//3. crystals
var hiddenNumber = []; // empty array to store object
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // array of integar of value between 1 and 12
var crystalOne = $("#crystal1");  // get crystal1 id and assign to variable
var crystalTwo = $("#crystal2");  // get crystal2 id and assign to variable
var crystalThree = $("#crystal3");  // get crystal3 id and assign to variable
var crystalFour = $("#crystal4");  // get crystal4 id and assign to variable

//4. player total score
$("#totalScore").text(playerCounter);   // get totalScore id and print out the values of numeric keys
$("#totalScore").empty();               // get totalScore id and empty all content from totalScore
var playerCounter = 0;                  // player score counter contains an integer value of zero


/// FUNCTIONS

//1. at the start of the game, randomly generated number is displayed
$("#randomNumberToGuess").text(randomNumber);

//2. four (4) crystals represents a number hidden from player
//3. each time player clicks on a crystal, the total score will increase by what the each crystal is worth
//4. the only way to find out much each crystal is worth is by clicking on it to add more points
    $("#crystal1").on("click", function() {
        playerCounter = playerCounter + crystalOne;
        $("#totalScore").text(playerCounter); 
            if (playerCounter == randomNumber) {
            win();
            } else if (playerCounter > randomNumber) {
            lose();
            }   
        }); 

    $("#crystal2").on("click", function() {
        playerCounter = playerCounter + crystalTwo;
        $("#totalScore").text(playerCounter); 
            if (playerCounter == randomNumber) {
            win();
            } else if (playerCounter > randomNumber) {
            lose();
            }   
        });  

    $("#crystal3").on("click", function() {
        playerCounter = playerCounter + crystalThree;
        $("#totalScore").text(playerCounter); 
            if (playerCounter == randomNumber) {
            win();
            } else if (playerCounter > randomNumber) {
            lose();
            }   
        });  

    $("#crystal4").on("click", function() {
        playerCounter = playerCounter + crystalFour;
        $("#totalScore").text(playerCounter); 
            if (playerCounter == randomNumber) {
            win();
            } else if (playerCounter > randomNumber) {
            lose();
            }   
        });  

//5. if total score equals to random number, alert player wins
//5.1 increment win counter by 1,
//5.2 reset random number to a different random number, 
//5.3 reset total score to zero, 
//5.4 reset crystals to random numbers
    function win() {
        alert("Congratulations! You win!");
        wins++;
        $("#winCount").text(wins);
        restart();
    };

//6. if total score exceeds the random number, alert player lost
//6.1 increment loss by 1,
//6.2 reset random number to a different random number, 
//6.3 reset total score to zero, 
//6.4 reset crystals to random numbers
    function lose() {
        if (playerCounter === randomNumber) {
        alert ("Bad luck! You lose!");
        losses++;
        $("#loseCount").text(losses);
        restart();
    };

//7. game restarts, player total score resets to nil, random number is reset, hidden numbers in crystals are reset
//8. crystals are randomly generated between the number 1 and 12
//9. randomly generated number that player is trying to guess is between the number 19 and 120 
    function restart() {
        playerCounter = 0;
        $("#totalScore").text(playerCounter);
        $("#totalScore").empty();
        $("#randomNumberToGuess").empty();
        hiddenNumber = [];
        numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        $("#randomNumberToGuess").text(randomNumber);
    };
    
