const dice = document.getElementById('dice');

function calculate_score() {
	var betAmount = document.getElementById("betAmount").value;
	var bank = document.getElementById("bank").innerText;
	
	//dice 1
		var randomDice = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
	const dice = "img/" + "Dice-" + randomDice + ".png";
	var img1 = document.querySelectorAll("img")[0];
	img1.setAttribute("src", dice);

	//dice 2
	const randomDice2 = Math.floor((Math.random() * 6) + 1);
	var dice2 = "img/" + "Dice-" + randomDice2 + ".png";
	var img2 = document.querySelectorAll("img")[1];
	img2.setAttribute("src", dice2);

	if (randomDice = dice + dice2{
		document.querySelector("h1").innerHTML = " You Win!";
		
	}
	else if (randomDice < randomDice2) {
		document.querySelector("h1").innerHTML = "Craps! You Lose.";
	}
}

