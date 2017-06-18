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
	$("button#die1").hide();
	$("button#hold1").hide();
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

		$("h1#player1").text(players[0].playerName);
		$("h1#player2").text(players[1].playerName);
		$("button#die1").show();
		$("button#hold1").show();
alert("Let " + players[0].playerName + " Play");
	});

	$("button#die1").click(function() {

		var die = randomizeNum();
		$("h2#tempoSto1").text(die);

		if (die === 1) {
			$("button#die1").hide();
			$("button#hold1").hide();
			$("button#die2").show();
			$("button#hold2").show();
			$("div.display").toggle("slow");


			numTempo = [];
			$("h4#tempoTotal1").text("0");
			alert(players[1].playerName + "'s Turn");
		}else {

			numTempo.push(die);
			console.log(numTempo);
			var total = numTempo.reduce(function(total, enteredNum) {
				return total + enteredNum;
			});
			$("h4#tempoTotal1").text(total);
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
	$("h2#score1").text(score);

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
	$("h2#tempoSto2").text(die);
	if (die === 1) {
		$("button#die2").hide();
		$("button#hold2").hide();
		$("button#die1").show();
		$("button#hold1").show();
		$("div.display").toggle("slow");

		alert(players[0].playerName+"'s Turn");
		numTempo = [];
		$("h4#tempoTotal2").text("0");
	}else {
		numTempo.push(die);
		console.log(numTempo);
		var total = numTempo.reduce(function(total, enteredNum) {
			return total + enteredNum;
		});
		$("h4#tempoTotal2").text(total);
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
	$("h2#score2").text(score);


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
