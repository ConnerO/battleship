var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

// while ( isSunk == false ) {
// 	guess = prompt("What is your guess? (enter a number between 0-6):");

// 	if ( guess < 0 || guess > 6) {
// 		alert("Please enter a valid number!");
// 	} else {
// 		guesses = guesses + 1;
// 		if (guess == location1 || guess == location2 || guess == location3)	{	
// 			hits = hits + 1;
// 			alert("HIT!");
// 			if (hits === 3) {
// 				isSunk = true;
// 				alert("You sank my battleship!");
// 			}
// 		}	else {
// 			alert("Miss!");
// 		}
// 	}
// }
// var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + ((3/guesses)*100);
// alert(stats);

var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}

}; 

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("blah blah blah");
