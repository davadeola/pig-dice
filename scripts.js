//BUSINESS LOGIC
var players = [];

function Player(name) {
	this.name = name;
	this.rollNumbers = [];
	this.total = 0;

}

function randomizeNum() {
	return Math.floor(Math.random() * (6)) + 1;
}


//USER LOGIC

$(document).ready(function() {
	$("button#die2").hide();
	$("button#hold2").hide();

	$("form.playerNames").submit(function(event) {
		event.preventDefault();
		//collect the names of the players
		var playerOne = $("input#playerOne").val();
		var playerTwo = $("input#playerTwo").val();
		//create new objects for each player

		var newPlayer1 = new Player(playerOne);
		console.log(newPlayer1);
		var newPlayer2 = new Player(playerTwo);
		console.log(newPlayer2);

		players.push(newPlayer1, newPlayer2);

		console.log(players);
	});

	$("button#die1").click(function() {
		alert("Let " + players[0].name + " Play");
		var die = randomizeNum();
		console.log(typeof  die);
		if (die === 1) {
			$("button#die1").hide();
			$("button#hold1").hide();
			alert("Player Two's Turn");
		}else {
			players[0].rollNumbers.push(die);
			console.log(players[0].rollNumbers);
		}
	}
	);

	$("button#hold1").click(function () {
		var total = players[0].rollNumbers.reduce(function(total, enteredNum) {
		  return total + enteredNum;
		});
		players[0].total = total;
		console.log("Total is "+players[0].total );
		$("button#die1").hide();
		$("button#hold1").hide();
		alert("Player Two's Turn");
	})
	//




});
