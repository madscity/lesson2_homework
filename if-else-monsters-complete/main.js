var fightChoice = function () {
	var fightStrong = prompt("Are you strong?", "Yes or No").toUpperCase();
	if (fightStrong === "YES") {
		alert("You beat the monster!");
	} else if (fightStrong === "NO") {
		fightSmartFunc();
	} else {
		alert("Your input is invalid! :(");
		fightChoice();
	}
};
var fightSmartFunc = function () {
	var fightSmart = prompt("Are you smart?", "Yes or No").toUpperCase();
	if (fightSmart === "YES") {
		alert("Smarty pants ;) You beat the monster!");
	} else if (fightSmart === "NO") {
		payChoice();
	} else {
		alert("Huh, I didn't get that...");
		fightSmartFunc();
	}
};
var payChoice = function () {
	var payWallet = prompt("Do you have 100€ in your wallet?", "Yes or No").toUpperCase();
	if (payWallet === "YES") {
		alert("You beat the monster!");
	} else if (payWallet === "NO") {
		var payBank = prompt("Is there a bank close by?", "Yes or No").toUpperCase();
		if (payBank === "YES") {
			var payGetMoney = promt("Let's go get the money, honey!").toUpperCase();
			if (payGetMoney === "YES") {
				alert("You beat that greedy monster!")
			} else if (payGetMoney === "NO") {
				alert("Ahhh so you're a liar! No passing for you.")
			} else {
				alert("@#$%@% is that another language? Try again.")
				prompt("Let's go get the money, honey!").toUpperCase();
			}
		} else if (payBank === "NO") {
			alert("No money, not pass! Outta luck this time kiddo!")
		} else {
			alert("What was that!? I didn't understand.")
			prompt("Is there a bank close by?", "Yes or No");
		}
	} else {
		alert("Typo? Let's go back!")
		payChoice();
	}
}
var runChoice = function () {
	var runFast = prompt("Are you fast?", "Yes or No").toUpperCase();
	if (runFast === "YES") {
		alert("You beat the monster!");
	} else if (runFast === "NO") {
		var runLong = prompt("Do you have endurance?", "Yes or No").toUpperCase();
		if (runLong === "YES") {
			alert("You beat the monster!");
		} else if (runLong === "NO") {
			alert("You shall not pass! :(")
		} else {
			alert("What was that? I didn't understand! :((");
			prompt("Do you have endurance?", "Yes or No")
		}
	} else {
		alert("I didn't get it!")
		prompt("Are you fast?", "Yes or No")
	}

}
function monsters() {
	var playQuestions = prompt('You are walking in the forest, when a monster jumps out. "None shall pass!" he says, "Unless, of course, you pay me 100€" Do you FIGHT, PAY or RUN?', "Type your answer here").toUpperCase();

	if (playQuestions === "FIGHT") {
		fightChoice();

	} else if (playQuestions == "PAY") {
		payChoice();

	} else if (playQuestions === "RUN") {
		runChoice();

	} else {
		alert("Your input is invalid! :(");
		monsters();
	}
}
document.getElementById("monsters").onclick = monsters;