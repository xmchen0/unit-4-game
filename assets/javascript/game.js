/* UofT Bootcamp 2019 - Crystal Collector */

/// GLOBAL VARIABLES

var randomNumber;       // define a target random number 
var playerCounter = 0;  // player score counter contains an integer value of zero

//1. random generated number
// define random integar between 19 and 120
randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;

//2. win/lose counter
var winCount = 0;                   // win counter contains an integar value of zero
$("#winCount").text(winCount);      // get winCount id and print out the values of numeric keys
var losses = 0;                     // lose counter contains an integar value of zero
$("#loseCount").text(loseCount);    // get loseCount id and print out the values of numeric keys

//3. crystals
var hiddenNumber = []; // empty array to store object
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // array of integar of value between 1 and 12
var crystal1 = $("#crystal1");  // get crystal1 id and assign to variable
var crystal2 = $("#crystal2");  // get crystal2 id and assign to variable
var crystal3 = $("#crystal3");  // get crystal3 id and assign to variable
var crystal4 = $("#crystal4");  // get crystal4 id and assign to variable

var topRanPixels = Math.floor(Math.random() * 300);

//4. player total score
$("#totalScore").text(playerCounter);   // get totalScore id and print out the values of numeric keys
$("#totalScore").empty();               // get totalScore id and empty all content from totalScore


/// FUNCTIONS

$(document).ready(function() { // call jQuery's $ function, passing to it the document object

//1. at the start of the game, randomly generated number is displayed
$("#random-number").text(targetNumber);

//2. four (4) crystals represents a number hidden from player

//3. each time player clicks on a crystal, the total score will increase by what the each crystal is worth

//4. the only way to find out much each crystal is worth is by clicking on it to add more points

//5. when total score equals to random number, 
//5.1 increment win counter by 1,
//5.2 reset random number to a different random number, 
//5.3 reset total score to zero, 
//5.4 reset crystals to random numbers

//6. when total score exceeds the random number,
//6.1 increment loss by 1,
//6.2 reset random number to a different random number, 
//6.3 reset total score to zero, 
//6.4 reset crystals to random numbers

//7. crystals are randomly generated between the number 1 and 12

//8. randomly generated number that player is trying to guess is between the number 19 and 120 
