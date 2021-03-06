console.log("Start it up, lads!");


var startButton = document.querySelector('#btn');
var resetButton = document.querySelector('#reset');
var orangeNote = document.querySelector('.orange');
var greenNote = document.querySelector('.green');
var purpleNote = document.querySelector('.purple');
var brownNote = document.querySelector('.brown');  
var computerMoves = [];
var playerMoves = [];
var score = 0;

//FUNCTION FOR COMPUTER'S RANDOM SELECTION: 

var startItUp = function(event){
		window.setTimeout(gameInstruction, 1000);
	var blueNotes = [orangeNote, greenNote, purpleNote, brownNote];
	var randomIndex = Math.floor(Math.random()*blueNotes.length);
	var randomSelection = blueNotes[randomIndex];
	if (randomSelection === blueNotes[0]){
		setTimeout(function(){
			randomSelection.classList.add("black");
		}, 500);
		document.getElementById('orange-note').play();
		setTimeout(function(){
		    randomSelection.classList.remove("black");
		}, 1000);
	} else if (randomSelection === blueNotes[1]){
		setTimeout(function(){
			randomSelection.classList.add("black");
		}, 500);
		document.getElementById('green-note').play();
		setTimeout(function(){
			randomSelection.classList.remove("black");
		}, 1000);
	} else if (randomSelection === blueNotes[2]){
		setTimeout(function(){
			randomSelection.classList.add("black");
		}, 500);
		document.getElementById('purple-note').play();
		setTimeout(function(){
			randomSelection.classList.remove("black");
		}, 1000);
	} else {
		setTimeout(function(){
			randomSelection.classList.add("black");
		}, 500);
		document.getElementById('brown-note').play();
		setTimeout(function(){
			randomSelection.classList.remove("black");
		}, 1000);
	}
	computerMoves.push(randomIndex);
	console.log(computerMoves);
};
//STARTS THE GAMEPLAY:
startButton.addEventListener('click', startItUp);

//FUNCTION FOR USER SELECTION:
var lightItUp= function(event){
	if (event.target.classList.contains("orange") === true){
		setTimeout(function(){
			orangeNote.classList.add("black");
		}, 500);
		document.getElementById('orange-note').play();
		setTimeout(function(){
			orangeNote.classList.remove("black");
		}, 1000);
		playerMoves.push(0);
		console.log(playerMoves);
	} else if (event.target.classList.contains("green") === true){
		setTimeout(function(){
			greenNote.classList.add("black");
		}, 500);
		document.getElementById('green-note').play();
		setTimeout(function(){
			greenNote.classList.remove("black");
		}, 1000);
		playerMoves.push(1);
		console.log(playerMoves);
	} else if (event.target.classList.contains("purple") === true){
		setTimeout(function(){
			purpleNote.classList.add("black");
		}, 500);
		document.getElementById('purple-note').play();
		setTimeout(function(){
			purpleNote.classList.remove("black");
		}, 1000);
		playerMoves.push(2);
		console.log(playerMoves);
	} else {			
		setTimeout(function(){
			brownNote.classList.add("black");
		}, 500);
		document.getElementById('brown-note').play();
		setTimeout(function(){
			brownNote.classList.remove("black");
		}, 1000);
		playerMoves.push(3);
		console.log(playerMoves);
	} 
	//RESULTS OF USER SELECTION: 
	if ( doTheyMatch(computerMoves, playerMoves) ){
			score ++;
			window.setTimeout(startItUp, 1500);
			window.setTimeout(displayScore, 1000);
	//GAME-OVER and RESET:
	} else {
		window.setTimeout(playAgain, 1000);
		resetButton.addEventListener('click', gameReset); 
	}
};

//ALLOWS USER TO CLICK ON BOXES and LOGS RESULT:
orangeNote.addEventListener('click', lightItUp);
greenNote.addEventListener('click', lightItUp);
purpleNote.addEventListener('click', lightItUp);
brownNote.addEventListener('click', lightItUp);

//POSTS IN-PROGRESS INSTRUCTIONS: 
var gameInstruction = function () {
	document.querySelector('.play-again').textContent='Click the right box to match Simon!';
};

//POSTS SCORE IF PLAYER WINS:
var displayScore = function (){
	document.querySelector('.score-counter').textContent='You win!  SCORE: ' + score;
};

//POSTS INSTRUCTIONS WHEN PLAYER LOSES"
var playAgain = function () {
	document.querySelector('.play-again').textContent='You lose! press RESET to continue';
};

//RESETS COUNTER, RESETS GAME:

var gameReset = function (){
	computerMoves = [];
	playerMoves = [];
	document.querySelector('.play-again').textContent='PRESS start TO PLAY!';
	document.querySelector('.score-counter').textContent='SCORE: 0';
};


// THIS FUNCTION COMPARES THE LENGTH AND CONTENT OF TWO ARRAYS AND RETURN A TRUE/FALSE VALUE 
// See STACK OVERFLOW: 
// http://stackoverflow.com/questions/22395357/how-to-compare-two-arrays-are-equal-using-javascript-or-jquery


var doTheyMatch = function (arr1, arr2){
	console.log("checking match...");
    if (arr1.length !== arr2.length) {
    	return false;
    }
    for (var i = 0, length = arr1.length; i < length; i++){
        if (arr1[i] !== arr2[i]){
	    	console.log("they don't match");
            return false;
        }
    } 
    console.log("they match")
    return true;
};

//GAME IS MISSING FUNCTIONALITY FOR COMPUTER REPLAYING THE NOTES SELECTED IN PREVIOUS ROUNDS
