//BUSINESS LOGIC
var players = [];

function Player(name) {
	this.playerName = name;
	this.rollTotals = [];
	this.total = 0;

}

var numTempo = [];

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
alert("Let " + players[0].playerName + " Play");
	});

	$("button#die1").click(function() {

		var die = randomizeNum();
		console.log(die);
		if (die === 1) {
			$("button#die1").hide();
			$("button#hold1").hide();
			$("button#die2").show();
			$("button#hold2").show();
			$("div.display").toggle("slow");


			numTempo = [];
			alert(players[1].playerName + "'s Turn");
		}else {

			numTempo.push(die);
			console.log(numTempo);
		}
	}
);

$("button#hold1").click(function () {

	console.log("numTempo1 before is "+ numTempo);
	var total = numTempo.reduce(function(total, enteredNum) {
		return total + enteredNum;
	});
	players[0].rollTotals.push(total);
	var score = players[0].rollTotals.reduce(function(total, enteredNum) {
		return total + enteredNum;
	});
	players[0].total = score;
	console.log("Score is "+players[0].total );

	$("button#die1").hide();
	$("button#hold1").hide();
	$("button#die2").show();
	$("button#hold2").show();
	$("div.display").toggle("slow");

	alert(players[1].playerName+"'s Turn");
	numTempo = [];
	console.log("numTempo1 later is "+ numTempo);

	if (score >= 100) {
		alert(players[0].playerName+ "has won");
		$("button#die1").hide();
		$("button#hold1").hide();
		$("button#die2").hide();
		$("button#hold2").hide();
	}
});


//Player 2 LOGIC
$("button#die2").click(function() {

	var die = randomizeNum();
	console.log(die);
	if (die === 1) {
		$("button#die2").hide();
		$("button#hold2").hide();
		$("button#die1").show();
		$("button#hold1").show();
		$("div.display").toggle("slow");

		alert(players[0].playerName+"'s Turn");
		numTempo = [];
	}else {
		numTempo.push(die);
		console.log(numTempo);
	}
}
);

$("button#hold2").click(function () {
	console.log("numTempo2 before is "+ numTempo);
	var total = numTempo.reduce(function(total, enteredNum) {
		return total + enteredNum;
	});
	players[1].rollTotals.push(total);
	var score = players[1].rollTotals.reduce(function(total, enteredNum) {
		return total + enteredNum;
	});
	players[1].total = score;
	console.log("Score is "+players[1].total );


	$("button#die2").hide();
	$("button#hold2").hide();
	$("button#die1").show();
	$("button#hold1").show();
	$("div.display").toggle("slow");
	alert(players[0].playerName+"'s Turn");
	numTempo = [];

	if (score >= 100) {
		alert(players[1].playerName + "has won");
		$("button#die1").hide();
		$("button#hold1").hide();
		$("button#die2").hide();
		$("button#hold2").hide();
	}
});

});
