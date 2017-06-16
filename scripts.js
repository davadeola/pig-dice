//BUSINESS LOGIC
var players = [];

function Player(name) {
	this.name = name;
	this.rollNumbers = [];
	
}

function randomizeNum () {
	return Math.floor(Math.random() * (6)) + 1;
};

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
			
			
			var die = randomizeNum();
			console.log(die);
			
			var enteredNum =players.Player.rollNumbers[0].push(die);
			console.log(enteredNum);

			var score =  players.Player[0].rollNumbers.reduce(function(total, enteredNum){
				return total + enteredNum;
			});
			console.log(score);
			
			// if (player.total == ) {

			

			// }
		});		

	
		

})
