//BUSINESS LOGIC
var players = [];

function Player(name) {
	this.name = name;
	this.rollNumbers = [];

}

function randomizeNum () {
	return Math.floor(Math.random() * (6)) + 1;
}

function changeUser(argument) {
	// body...
}
//USER LOGIC

$(document).ready(function() {
	$("form.playerNames").submit(function (event) {
		event.preventDefault();
		var playerOne = $("input#playerOne").val();
		var playerTwo = $("input#playerTwo").val();

		var newPlayer1 = new Player(playerOne);
		console.log(newPlayer1);
		var newPlayer2 = new Player(playerTwo);
		console.log(newPlayer2);

		players.push(newPlayer1, newPlayer2);

		console.log(players);
	});








	$("button.play").click(function() {
		alert("Let " + players[0].name+" Play");

		var die = randomizeNum();
		console.log(die);


		if (die === 1, function(){

			var die = randomizeNum();
			console.log(die);
			players[1].rollNumbers.push(die);

			alert(players[1].name + " will play");

			for (var score = 0; score <= 100;) {
				var score =  players[1].rollNumbers.reduce(function(total, enteredNum){
					return total + enteredNum;
				});

			}alert(score);

		})
