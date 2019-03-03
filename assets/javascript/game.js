/* 

UofT Bootcamp 2019 - Crystal Collector 

---

Updates to game.js after receiving constructive feedback from Dimitry Besson 03-Mar-19

Issue #1
"The on click handlers for each crystal look very similar. 
Can you think of a way to set all four of them in one go instead of doing them all separately? 
Imagine you had 100 crystals. How would you handle this?" 

My response: 
The most logical way of iterating over a block of code repeatedly is using "for loop" statement. 
My concern for using the for loop statement is the ability to loop through crystals with unique id. 
Can I assign crystals different ids while using for loop to loop through the crystals and perform the on click function?
Can I put these buttons in an array first?

Possible solution:
var crystalID = ['crystal1', 'crystal2', 'crystal3', 'crystal4'];
var crystals = Math.floor(Math.random() * 11) + 1;
var playerCounter = 0; 

$("#crystalBtn").click(function () {
    for(var i = 0; i < crystalID.length; i++) {
        document.getElementById(crystalID[i]).addEventListener('click', click); 
    }

    playerCounter = playerCounter + crystals;
    $("#totalScore").text(playerCounter);
    if (playerCounter === randomNumber) {
        win();
    } else if (playerCounter > randomNumber) {
        lose();
    }

});


Issue #2
"There is also a lot of overlap between the setup you do at the beginning of the game, and in the reset function. 
Could some of the similarities be extracted and put into function?"

My response: 
How do I extract the similarities at the beginning and put into function?

Possible solution:
function startGame () {
    playerCounter = 0; 
    randomNumber = Math.floor(Math.random() * (101)) + 19;
    crystals = Math.floor(Math.random() * 11) + 1;

    $("#guessNumber").text(randomNumber);
    $("#totalScore").text(playerCounter);
}

function restart () {
    startGame();
}

*/


/// ***** GLOBAL VARIABLES *****

//1. random generated number
var randomNumber = Math.floor(Math.random() * (101)) + 19; // define random integar between 19 and 120
console.log(randomNumber)
$("#guessNumber").text(randomNumber); // get guessNumber id and print out the random number displayed

//2. win/lose counter
var wins = 0;                   // win counter contains an integar value of zero
$("#winCount").text(wins);      // get winCount id and print out the values of numeric keys
var losses = 0;                 // lose counter contains an integar value of zero
$("#loseCount").text(losses);   // get loseCount id and print out the values of numeric keys

//3. crystals
var crystalOne = Math.floor(Math.random() * 11) + 1;     // define hidden random number between number 1 to 12
var crystalTwo = Math.floor(Math.random() * 11) + 1;     // define hidden random number between number 1 to 12
var crystalThree = Math.floor(Math.random() * 11) + 1;   // define hidden random number between number 1 to 12
var crystalFour = Math.floor(Math.random() * 11) + 1;    // define hidden random number between number 1 to 12

//4. player total score
$("#totalScore").text(playerCounter);   // get totalScore id and print out the values of numeric keys
var playerCounter = 0;                  // player score counter contains an integer value of zero


/// ***** FUNCTIONS *****

//1. at the start of the game, randomly generated number is displayed
//2. four (4) crystals represents a number hidden from player
//3. each time player clicks on a crystal, the total score will increase by what the each crystal is worth
//4. the only way to find out much each crystal is worth is by clicking on it to add more points
$("#crystal1").click(function () {
    playerCounter = playerCounter + crystalOne;
    $("#totalScore").text(playerCounter);
    if (playerCounter === randomNumber) {
        win();
    } else if (playerCounter > randomNumber) {
        lose();
    }
})

$("#crystal2").click(function () {
    playerCounter = playerCounter + crystalTwo;
    $("#totalScore").text(playerCounter);
    if (playerCounter === randomNumber) {
        win();
    } else if (playerCounter > randomNumber) {
        lose();
    }
})

$("#crystal3").click(function () {
    playerCounter = playerCounter + crystalThree;
    $("#totalScore").text(playerCounter);
    if (playerCounter === randomNumber) {
        win();
    } else if (playerCounter > randomNumber) {
        lose();
    }
})

$("#crystal4").click(function () {
    playerCounter = playerCounter + crystalFour;
    $("#totalScore").text(playerCounter);
    if (playerCounter === randomNumber) {
        win();
    } else if (playerCounter > randomNumber) {
        lose();
    }
})

//5. if total score equals to random number, alert player wins
//5.1 increment win counter by 1,
//5.2 reset random number to a different random number, 
//5.3 reset total score to zero, 
//5.4 reset crystals to random numbers
function win() {
    window.alert("You win! Congratulations! 🎉🎉🎉");
    wins++;
    $("#winCount").text(wins);
    restart();
}

//6. if total score exceeds the random number, alert player lost
//6.1 increment loss by 1,
//6.2 reset random number to a different random number, 
//6.3 reset total score to zero, 
//6.4 reset crystals to random numbers
function lose() {
    window.alert("You lose! 👎 Try again.");
    losses++;
    $("#loseCount").text(losses);
    restart();
}

//7. game restarts, player total score resets to nil, random number is reset, hidden numbers in crystals are reset
//8. crystals are randomly generated between the number 1 and 12
//9. randomly generated number that player is trying to guess is between the number 19 and 120 
function restart() {
    randomNumber = Math.floor(Math.random() * (101)) + 19;
    $("#guessNumber").text(randomNumber);
    playerCounter = 0;
    crystalOne = Math.floor(Math.random() * 11) + 1;
    crystalTwo = Math.floor(Math.random() * 11) + 1;
    crystalThree = Math.floor(Math.random() * 11) + 1;
    crystalFour = Math.floor(Math.random() * 11) + 1;
    $("#totalScore").text(playerCounter);
}
