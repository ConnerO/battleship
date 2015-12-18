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

var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	
	ships = 
		[{ locations: ["06", "16", "26"], hits: ["", "", ""] }, 
		 { locations: ["24", "34", "44"], hits: ["", "", ""] }, 
		 { locations: ["10", "11", "12"], hits: ["", "", ""] }],

	fire: function(guess) {

		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);
			if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("HIT!");
				if (this.isSunk(ship)) {
					this.shipsSunk++;
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("You missed.");
		return false;
	},

	isSunk: function(ship) {
		for (var i = 0; i < this.numShips; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		return true;
	}
};



// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");

view.displayMessage("blah blah blah");
